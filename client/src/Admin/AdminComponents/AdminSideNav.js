import React, { useContext, useState, useEffect } from "react";
import SidenavStyle from "../AdminCSS/AdminSideNav.module.css";
import { NavLink } from "react-router-dom";
import { ContexStore } from "../../ContexStore/ContexStore";
import { toast, ToastContainer } from "react-toastify";
import { getApi } from "../../services";

const AdminSideNav = ({ adminLen }) => {
  const { alluser, admin } = useContext(ContexStore);
  const { is_super } = admin;
  const [apiData, setapiData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await getApi.get("/hariBaba/api/productadmin").then((response) => {
        setapiData(response.data);
      });
    };
    loadData();
  }, []);
  const fireRestrict = () => {
    toast("Restricted Area for normal admin.");
  };

  return (
    <>
      <ToastContainer />
      <div className={SidenavStyle.sidebar}>
        <NavLink
          className={SidenavStyle.Sidelinks}
          to="/route/haribabalibrary/admin/dashboard/products"
        >
          <i className="fab  fa-product-hunt fa-3x"></i>

          <p>
            All Contents <p>{apiData.length}</p>
          </p>
        </NavLink>

        <NavLink
          className={SidenavStyle.Sidelinks}
          to="/route/haribabalibrary/admin/dashboard/verifyimages"
        >
          <i className="fas  fa-image fa-3x"></i>
          <p>Verify Images</p>
        </NavLink>

        <NavLink
          className={SidenavStyle.Sidelinks}
          to="/route/haribabalibrary/admin/dashboard/soon"
        >
          <i class="fas fa-plus-square fa-3x"></i>
          <p>
            Add Banner & <br /> video{" "}
          </p>
        </NavLink>
        <NavLink className={SidenavStyle.Sidelinks} to="#">
          <i className="fas  fa-download fa-3x"></i>
          <p>
            All Downloads <p>{adminLen}</p>
          </p>
        </NavLink>

        {is_super === "true" ? (
          <>
            <NavLink
              className={SidenavStyle.Sidelinks}
              to="/route/haribabalibrary/admin/dashboard/users"
            >
              <i className="fas  fa-users fa-3x"></i>
              <p>
                All User <p>{alluser.length}</p>{" "}
              </p>
            </NavLink>

            <NavLink
              className={SidenavStyle.Sidelinks}
              to="/route/haribabalibrary/admin/dashboard/addadministrator"
            >
              <i className="fas  fa-user-lock fa-3x"></i>
              <p>
                Add Admin <p>{adminLen}</p>
              </p>
            </NavLink>
          </>
        ) : (
          <>
            <li onClick={fireRestrict} className={SidenavStyle.Sidelinks}>
              <i className="fas  fa-users fa-3x"></i>

              <p>
                All User <p>{alluser.length}</p>{" "}
              </p>
            </li>

            <li onClick={fireRestrict} className={SidenavStyle.Sidelinks}>
              <i className="fas  fa-user-lock fa-3x"></i>

              <p>
                All Admin <p>{adminLen}</p>{" "}
              </p>
            </li>
          </>
        )}
      </div>
    </>
  );
};

export default AdminSideNav;
