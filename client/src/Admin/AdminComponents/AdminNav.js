import React, { useContext } from "react";
import AdminNavStyle from "../AdminCSS/AdminNav.module.css";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { ContexStore } from "../../ContexStore/ContexStore";
import AdminNotif from "./AdminNotif";
import { serverBaseURI } from "../../Utilities/file.config";
const AdminNav = () => {
  const { admin, handleAdminNotif, adminNotif } = useContext(ContexStore);
  const { username, is_super, image } = admin;

  const history = useHistory();
  const handleLogout = () => {
    Cookies.remove("__tcphblad__");
    history.push("/route/haribabalibrary/admin/login");
    window.location.reload();
  };
  return (
    <>
      <header className={AdminNavStyle.nav}>
        <div className={AdminNavStyle.adminLogo}>
          <NavLink
            className={AdminNavStyle.NavLink}
            to="/route/haribabalibrary/admin/dashboard"
          >
            DashBoard
          </NavLink>
        </div>

        <div className={AdminNavStyle.ul}>
          {/* <li onClick={handleAdminNotif} className={AdminNavStyle.notif}>
            <i
              style={{
                background: adminNotif && "rgba(204, 204, 204, 0.527)",
              }}
              className="fas fa-bell"
            ></i>
          </li> */}
          <li>
            {is_super === "true" ? (
              <NavLink
                className={AdminNavStyle.adminName}
                to="/route/haribabalibrary/admin/dashboard/adminprofile"
              >
                <img
                  height="25px"
                  width="25px"
                  src={`${serverBaseURI}/hariBaba/api/uploads/AdminSRC/${image}`}
                  alt="img"
                />{" "}
                {username !== undefined ? username.split(" ")[0] : username}
              </NavLink>
            ) : (
              <NavLink to="#" className={AdminNavStyle.adminName}>
                <img
                  height="25px"
                  width="25px"
                  src={`${serverBaseURI}/hariBaba/api/uploads/AdminSRC/${image}`}
                  alt="img"
                />{" "}
                {username !== undefined ? username.split(" ")[0] : username}
              </NavLink>
            )}
          </li>
          <li onClick={handleLogout} className={AdminNavStyle.adminLogout}>
            <i class="fas fa-sign-out-alt"></i> Logout
          </li>
        </div>
      </header>
      {adminNotif && <AdminNotif />}
    </>
  );
};

export default AdminNav;
