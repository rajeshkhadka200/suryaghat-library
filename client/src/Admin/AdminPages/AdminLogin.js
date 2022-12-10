import React, { useState } from "react";
import AdminLoginStyle from "../AdminCSS/AdminLogin.module.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Utilities/StaticContents/Footer";
import { getApi } from "../../services";

const AdminLogin = () => {
  let history = useHistory();
  const isAdmin = Cookies.get("__tcphblad__");
  if (isAdmin) {
    history.push("/route/haribabalibrary/admin/dashboard");
  }

  const [adminCredintials, setadminCredintials] = useState({
    email: "",
    password: "",
  });

  //destructure data to dend
  const { email, password } = adminCredintials;
  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setadminCredintials({ ...adminCredintials, [name]: value });
  };

  const SendData = (e) => {
    e.preventDefault();
    getApi
      .post("/hariBaba/api/admin/adminauth", {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          Cookies.set("__tcphblad__", response.data.id, { expires: 1 });
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast.error(err.response.data.message);
        } else if (err.response.status === 400) {
          toast.error(err.response.data.message);
        }
      });
  };
  return (
    <>
      <form onSubmit={SendData}>
        <div className={AdminLoginStyle.loginWrapper}>
          <div className={AdminLoginStyle.loginBox}>
            <span>Dashboard login</span>
            <div className={AdminLoginStyle.formControl}>
              <label>Email</label>
              <input
                name="email"
                value={adminCredintials.email}
                onChange={handleOnchange}
                placeholder="Enter email"
                type="email"
                required
              />
            </div>
            <div className={AdminLoginStyle.formControl}>
              <label>Password</label>
              <input
                name="password"
                value={adminCredintials.password}
                onChange={handleOnchange}
                placeholder="Enter password"
                type="password"
                required
              />
            </div>
            <div className={AdminLoginStyle.btnGroup}>
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default AdminLogin;
