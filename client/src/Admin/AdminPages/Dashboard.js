import React, { useContext } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import AdminNav from "../AdminComponents/AdminNav.js";
import AdminSideNav from "../AdminComponents/AdminSideNav.js";
import { ContexStore } from "../../ContexStore/ContexStore.js";
import ContentOne from "../../Utilities/StaticContents/ContentOne.js";
const Dashboard = () => {
  const { admin } = useContext(ContexStore);
  const { is_super, username, image, email, joined_on } = admin;
  let history = useHistory();
  const isAdmin = Cookies.get("__tcphblad__");
  if (!isAdmin) {
    history.push("/route/haribabalibrary/admin/login");
  }

  return (
    <>
      <AdminNav />

      <div
        style={{
          marginTop: "80px",
        }}
      >
        <ContentOne
          username={username}
          is_super={is_super}
          image={image}
          email={email}
          joined_on={joined_on}
        />
      </div>
      <hr
        style={{
          width: "90%",
          margin: "20px auto",
        }}
      />
      <AdminSideNav />
    </>
  );
};

export default Dashboard;
