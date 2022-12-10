import React, { useEffect, useState } from "react";
import AdminLoginStyle from "../AdminCSS/AdminLogin.module.css";
import Check from "../AdminComponents/Check";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNav from "../AdminComponents/AdminNav";
import UserCSS from "../AdminCSS/User.module.css";
import Card from "../AdminComponents/Card";
import Skeleton from "react-loading-skeleton";
import { serverBaseURI } from "../../Utilities/file.config";
import { getApi } from "../../services";

const AdminProfile = () => {
  const [footer, setfooter] = useState(true);
  setTimeout(() => {
    setfooter(false);
  }, 3000);
  const [loading, setloading] = useState(false);
  Check();
  const [adminCredintials, setadminCredintials] = useState({
    adminid: "",
    email: "",
    password: "",
  });
  const { adminid, password, email } = adminCredintials;
  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setadminCredintials({ ...adminCredintials, [name]: value });
  };
  const SendUpdated = async (e) => {
    setloading(true);
    e.preventDefault();
    await getApi
      .post("/hariBaba/api/admin/changepassword", {
        adminid,
        password,
        email,
      })
      .then((response) => {
        setTimeout(() => {
          setloading(false);
          if (response.status === 200) {
            toast.success("Password Changed Sucessfully");
            setadminCredintials({
              email: "",
              password: "",
              adminid: "",
            });
          }
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          if (err.response.status === 401) {
            toast.error("Id or email Incorrect");
          } else if (err.response.status === 404) {
            toast.error("Internal Server Error");
          }
          setloading(false);
        }, 1000);
      });
  };
  const [alladmin, setalladmin] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      await getApi.get("/hariBaba/api/admin/alladmin").then((response) => {
        setalladmin(response.data);
      });
    };
    loadData();
  }, []);
  const [display, setdisplay] = useState(false);
  const handleDisplay = () => {
    setdisplay(!display);
  };
  return (
    <>
      <AdminNav />
      {alladmin && (
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            width: "80%",
            margin: "80px auto",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          All the Admins Of HariBaba Library.
        </p>
      )}
      <div id={UserCSS.idsU} className={UserCSS.userWrapper}>
        {alladmin
          .filter((x) => x.username !== "")
          .map((data, key) => {
            const { id, username, password, email, image, is_super } = data;
            return (
              <Card
                singleImg={image}
                key={key}
                id={id}
                username={username}
                password={password.substring(0, 20)}
                email={email}
                image={`${serverBaseURI}/hariBaba/api/uploads/AdminSRC/${image}`}
                is_super={is_super}
              />
            );
          })}
      </div>

      <div className={AdminLoginStyle.showHideCr}>
        {footer ? (
          <Skeleton height={40} width={200} />
        ) : (
          <button onClick={handleDisplay} className="button">
            {display ? "Hide" : "Open"} Credintials changing Box.
          </button>
        )}
      </div>

      {display && (
        <form onSubmit={SendUpdated}>
          <div
            id={AdminLoginStyle.ids}
            className={AdminLoginStyle.loginWrapper}
          >
            <div className={AdminLoginStyle.loginBox}>
              <span>Change credentials</span>
              <div className={AdminLoginStyle.formControl}>
                <label>Admin/ Super Admin ID</label>
                <input
                  name="adminid"
                  value={adminCredintials.adminid}
                  onChange={handleOnchange}
                  placeholder="Enter super admin /admin ID"
                  type="number"
                  required
                />
              </div>
              <div className={AdminLoginStyle.formControl}>
                <label>Email</label>
                <input
                  name="email"
                  value={adminCredintials.email}
                  onChange={handleOnchange}
                  placeholder="Enter Admin Email"
                  type="email"
                  required
                />
              </div>
              <div className={AdminLoginStyle.formControl}>
                <label>New Password</label>
                <input
                  name="password"
                  value={adminCredintials.password}
                  onChange={handleOnchange}
                  placeholder="Enter New password"
                  type="password"
                  required
                />
              </div>
              <div className={AdminLoginStyle.btnGroup}>
                <button
                  disabled={loading}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: loading ? "grey" : "",
                    cursor: loading ? "not-allowed" : "",
                  }}
                  type="submit"
                >
                  {loading && (
                    <img
                      height="20px"
                      width="20px"
                      src={`${serverBaseURI}/hariBaba/api/uploads/Images/loading.jpg`}
                      alt="not found"
                    />
                  )}
                  &nbsp;&nbsp;
                  {loading ? "Changing Password.." : "Change Password"}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default AdminProfile;
