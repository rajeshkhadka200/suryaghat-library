import React, { useState, useContext, memo } from "react";
import "../../Styles/Global/nav.css";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { ContexStore } from "../../ContexStore/ContexStore";
import { useGoogleLogout } from "react-google-login";
import Notification from "../../Utilities/StaticContents/Notification";
const Nav = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const ad_ckk = Cookies.get("__tcphblad__");
  const { userData, handleNotif, notifOpen } = useContext(ContexStore);
  const { username, user_profile, upload_items } = userData;
  const [dropDown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropDown);
  };

  const navData = [
    {
      list: "Home",
      url: "/",
      mobIcon: "fas icons fa-home",
    },
    {
      list: "Collection",
      url: "/contents",
      mobIcon: "fas icons fa-upload",
    },
    {
      list: "Store",
      url: "/store",
      mobIcon: "fas icons fa-store",
    },
    {
      list: "Images",
      url: "/store/gallery",
      mobIcon: "fas fa-image icons",
    },
    {
      list: "About",
      url: "/about",
      mobIcon: "fas icons fa-address-card",
    },
  ];

  const hideDropDown = () => {
    setDropdown(!dropDown);
  };

  const onLogoutSuccess = () => {
    setDropdown(!dropDown);
    Cookies.remove("__tcphbl30__");
    //localStorage.removeItem("model");
    window.location.reload();
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });
  //get cookie :)
  const authID = Cookies.get("__tcphbl30__");
  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/" className="mainHeadingNav">
            <p>
              <b className="logo_span">Suryaghat</b>library
            </p>
          </NavLink>
          <li style={{ cursor: "pointer" }} className="for_mobile">
            {authID ? (
              <div className="logedin_data">
                <img
                  onClick={handleDropdown}
                  style={{
                    borderRadius: "50%",
                  }}
                  height="25px"
                  width="25px"
                  src={user_profile}
                  alt={username}
                />
                &nbsp;
                <small
                  onClick={handleDropdown}
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {username !== undefined ? username.split(" ")[0] : username}
                </small>
                &nbsp;
                {dropDown ? (
                  <i
                    style={{
                      fontSize: "15px",
                    }}
                    className="fas fa-caret-up "
                  ></i>
                ) : (
                  <>
                    <i
                      style={{
                        fontSize: "15px",
                      }}
                      className="fas fa-caret-down"
                    ></i>
                  </>
                )}
                {authID && (
                  <>
                    <span onClick={handleNotif} className="notif_btn">
                      {/*<div className="notif_len">5</div>*/}
                      <i class="fas fa-bell "></i>
                    </span>
                  </>
                )}
              </div>
            ) : (
              //here
              <i
                onClick={handleDropdown}
                className="fas add icons fa-user-circle"
              ></i>
            )}
          </li>
        </div>

        <ul className="nav_links">
          {navData.map((data, key) => {
            const { list, url, mobIcon } = data;
            return (
              <li key={key}>
                <NavLink exact activeClassName="nav_active" to={url}>
                  <i id="ac_icon" className={mobIcon}></i>
                  <span className="nav__lg_list">{list}</span>
                  <p className="indi">{list}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="user__login">
          <li className="for_desktop">
            <span style={{ cursor: "pointer" }} className="color">
              {authID ? (
                <>
                  <div className="logedin_data">
                    <img
                      style={{
                        borderRadius: "50%",
                      }}
                      height="25px"
                      width="25px"
                      src={user_profile}
                      alt={username}
                      onClick={handleDropdown}
                    />
                    &nbsp;
                    <span onClick={handleDropdown}>{username}</span> &nbsp;
                    {dropDown ? (
                      <i className="fas fa-caret-up"></i>
                    ) : (
                      <i className="fas fa-caret-down"></i>
                    )}
                    {authID && (
                      <span onClick={handleNotif} className="notif_btn">
                        <i class="fas fa-bell "></i>
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <div onClick={handleDropdown}>
                  User &nbsp;
                  {dropDown ? (
                    <i className="fas fa-caret-up"></i>
                  ) : (
                    <i className="fas fa-caret-down"></i>
                  )}
                </div>
              )}
            </span>
          </li>
        </div>
      </nav>

      {dropDown ? (
        <div className="dropdown_data ">
          <li
            className="li_pro"
            onClick={hideDropDown}
            style={{ color: "#fff" }}
          >
            {authID ? (
              <>
                <div>
                  <div className="con_link_pro">
                    <div className="left_link_pro">
                      <img
                        height="45"
                        width="45"
                        src={user_profile}
                        alt={username}
                      />
                    </div>
                    <div className="right_link_pro">
                      <p>{username}</p>
                      <p className="light_upload">
                        {upload_items} upload counts
                      </p>
                    </div>
                  </div>
                  <div className="btn__viewPro">
                    <NavLink className="pro__link" to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
              </>
            ) : (
              <NavLink className="li lifor" to="/profile">
                My profile
                <svg
                  aria-label="Profile"
                  class="_8-yf5 "
                  color="#fff"
                  fill="#262626"
                  height="16"
                  role="img"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <circle
                    cx="12.004"
                    cy="12.004"
                    fill="none"
                    r="10.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <circle
                    cx="12.006"
                    cy="9.718"
                    fill="none"
                    r="4.109"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></circle>
                </svg>
              </NavLink>
            )}
          </li>
          {authID ? (
            <NavLink
              className="li lifor"
              onClick={signOut}
              style={{ color: "#fff" }}
              to="/"
            >
              Sign Out
              <svg
                aria-label="Switch Accounts"
                class="_8-yf5 "
                color="#fff"
                fill="#fff"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path>
              </svg>
            </NavLink>
          ) : (
            <NavLink
              className="li lifor"
              onClick={hideDropDown}
              style={{ color: "#fff" }}
              to="/login"
            >
              Sign In
              <svg
                aria-label="Direct"
                class="_8-yf5 "
                color="#fff"
                fill="#262626"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </NavLink>
          )}

          {ad_ckk && (
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              className="li lifor"
              onClick={hideDropDown}
              style={{ color: "#fff" }}
              to="/route/haribabalibrary/admin/login"
            >
              Admin
              <svg
                role="img"
                height="16"
                width="16"
                viewBox="0 0 16 16"
                class="Svg-sc-1bi12j5-0 fIDrcz"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </NavLink>
          )}
        </div>
      ) : (
        ""
      )}

      {notifOpen && <Notification />}
    </>
  );
};

export default memo(Nav);
