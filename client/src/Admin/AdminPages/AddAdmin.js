import React, { useState, useContext } from "react";
import AdminLoginStyle from "../AdminCSS/AdminLogin.module.css";
import { v4 as uuidv4 } from "uuid";
import Check, { AddFav } from "../AdminComponents/Check";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import AdminNav from "../AdminComponents/AdminNav";
import Footer from "../../Utilities/StaticContents/Footer";
import { ContexStore } from "../../ContexStore/ContexStore";
import { serverBaseURI } from "../../Utilities/file.config";
import { getApi } from "../../services";
const AddAdmin = () => {
  const serID = process.env.REACT_APP_SERVICE_ID;
  const tempID = process.env.REACT_APP_TEMPLETE_ID;
  const userID = process.env.REACT_APP_USER_ID;
  const { admin } = useContext(ContexStore);
  const { image } = admin;

  Check();

  const [newadminData, setnewadminData] = useState({
    email: "",
  });

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setnewadminData({ ...newadminData, [name]: value });
  };
  const { email } = newadminData;
  const uid = uuidv4();

  const AddAdmin = async (e) => {
    e.preventDefault();

    await getApi
      .post("/hariBaba/api/admin/addadmin", { email: email, uid: uid })
      .then((response) => {
        if (response.status === 200) {
          alert("Wait for the conformation...");
          setnewadminData({
            email: "",
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast.error(`Email already exist`);
        }
      });
  };
  //AddFav(`${serverBaseURI}/hariBaba/api/uploads/Images/${image}`);
  return (
    <>
      <AdminNav />
      <ToastContainer />
      <form onSubmit={AddAdmin}>
        <div className={AdminLoginStyle.loginWrapper}>
          <div className={AdminLoginStyle.loginBox}>
            <span>Add Admin</span>

            <div className={AdminLoginStyle.formControl}>
              <label>Email</label>
              <input
                name="email"
                onChange={handleOnchange}
                placeholder="Enter email"
                type="email"
                required
                value={newadminData.email}
              />
            </div>

            <div className={AdminLoginStyle.btnGroup}>
              <button type="submit">Add Admin</button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default AddAdmin;
