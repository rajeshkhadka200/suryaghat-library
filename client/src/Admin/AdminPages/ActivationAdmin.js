import AdminLoginStyle from "../AdminCSS/AdminLogin.module.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Utilities/StaticContents/Footer";
import { useHistory, useParams } from "react-router-dom";
import { getApi } from "../../services";
const ActivationAdmin = () => {
  const history = useHistory();
  const { queryString } = useParams();
  useEffect(() => {
    const verifyQuery = async () => {
      await getApi
        .get(`/hariBaba/api/admin/verification/${queryString}`)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            return;
          } else {
            window.location.reload();
            history.push("/");
          }
        })
        .catch((err) => {
          history.push("/");
        });
    };
    verifyQuery();
  }, []);

  const [imageAdmin, setimageAdmin] = useState();
  const handleImgCh = (e) => {
    setimageAdmin(e.target.files[0]);
  };
  const [newadminData, setnewadminData] = useState({
    username: "",
    password: "",
    cPassword: "",
  });

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setnewadminData({ ...newadminData, [name]: value });
  };
  const { username, cPassword, password } = newadminData;
  const regitserAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("adminFile", imageAdmin);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("cPassword", cPassword);
    await getApi
      .post(`/hariBaba/api/admin/activationclick/${queryString}`, formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Account Registered Successfully");
          setnewadminData({
            username: "",
            password: "",
            cPassword: "",
          });
          setTimeout(() => {
            history.push("/");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <Nav /> */}
      <ToastContainer />
      <form onSubmit={regitserAdmin}>
        <div className={AdminLoginStyle.loginWrapper}>
          <div className={AdminLoginStyle.loginBox}>
            <span>Register Yourself</span>
            <div className={AdminLoginStyle.formControl}>
              <label>Username</label>
              <input
                name="username"
                onChange={handleOnchange}
                placeholder="Enter username"
                type="text"
                required
                value={newadminData.username}
              />
            </div>
            <div className={AdminLoginStyle.formControl}>
              <label>Your Image </label>
              <input
                accept=".jpg,.png,.jpeg,.gif"
                onChange={handleImgCh}
                type="file"
              />
            </div>
            <div className={AdminLoginStyle.formControl}>
              <label>Password</label>
              <input
                name="password"
                onChange={handleOnchange}
                placeholder="Enter password"
                type="password"
                required
                value={newadminData.password}
              />
            </div>
            <div className={AdminLoginStyle.formControl}>
              <label>Confirm Password</label>
              <input
                name="cPassword"
                onChange={handleOnchange}
                placeholder="Confirm password"
                type="password"
                required
                value={newadminData.cPassword}
              />
            </div>
            <div className={AdminLoginStyle.btnGroup}>
              <button type="submit">Add Admin</button>
            </div>
          </div>
        </div>
      </form>
      {/* <Footer /> */}
    </>
  );
};

export default ActivationAdmin;
