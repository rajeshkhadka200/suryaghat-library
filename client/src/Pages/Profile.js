import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import profileCSS from "../Styles/ProfileCSS/Profile.module.css";
import { ContexStore } from "../ContexStore/ContexStore";
import { NavLink, Redirect } from "react-router-dom";
import Logout from "./Logout";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import MyUploads from "../Components/Profile/MyUploads";
import Nav from "../Components/Nav/Nav";
import { AddFav } from "../Admin/AdminComponents/Check";
import InfoModel from "../Utilities/StaticContents/InfoModel";
import Footer from "../Utilities/StaticContents/Footer";
import { serverBaseURI } from "../Utilities/file.config";
const Profile = () => {
  const [isloading, setisloading] = useState(true);
  const AuthId = Cookies.get("__tcphbl30__");
  const { userData, highlight, color } = useContext(ContexStore);
  const { username, email, user_profile, upload_items } = userData;
  if (userData !== "") {
    setTimeout(() => {
      setisloading(false);
    }, 2000);
  }

  if (userData.username) {
    document.title = "Profile - " + userData.username;
  } else {
    document.title = "Profile";
  }
  // AddFav(user_profile ? user_profile : null);
  //get the user notif

  const [modelCon, setmodelCon] = useState(false);
  const [popup, setpopup] = useState(true);
  let modelStatus = localStorage.getItem("model");

  useEffect(() => {
    setTimeout(() => {
      if (
        upload_items < 5 &&
        window.location.pathname === "/profile" &&
        modelStatus === "true"
      ) {
        setmodelCon(true);
        document.querySelector("body").classList.add("hide");
      }
    }, 7000);
  }, []);
  const methodControl = () => {
    setpopup(false);
  };
  return (
    <>
      <Nav />
      {popup && modelCon && (
        <InfoModel
          url={"/upload"}
          heading={"Your upload count is less than 5."}
          message={"Do you want to upload more contents in our website ?"}
          buttontextone={"Yes"}
          buttontexttwo={"Cancel"}
          methodControl={methodControl}
          neverMesg="Don't ask to upload"
        />
      )}
      {AuthId ? (
        <>
          <div>
            <div id="header__" className={profileCSS.profileHeader}>
              <div className={profileCSS.profileLeft}>
                <div className="profileImg">
                  {isloading ? (
                    <SkeletonTheme color={color} highlightColor={highlight}>
                      <Skeleton circle={true} height={130} width={130} />
                    </SkeletonTheme>
                  ) : (
                    <img src={user_profile} alt={username} />
                  )}
                </div>
              </div>

              <div className={profileCSS.profileRight}>
                <div className={profileCSS.username}>
                  {isloading ? (
                    <SkeletonTheme color={color} highlightColor={highlight}>
                      <Skeleton height={20} width={150} />
                    </SkeletonTheme>
                  ) : upload_items >= 1 && upload_items <= 2 ? (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContents: "center",
                      }}
                    >
                      {username} &nbsp;
                      <img
                        src={`${serverBaseURI}/hariBaba/api/uploads/Images/silver.png`}
                        // src="/Images/silver.png"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                      &nbsp;
                      <span style={{ fontSize: "15px" }}>
                        (You got Silver Membership)
                      </span>
                    </span>
                  ) : upload_items >= 3 ? (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContents: "center",
                      }}
                    >
                      {username} &nbsp;
                      <img
                        // src="/Images/gold.png"
                        src={`${serverBaseURI}/hariBaba/api/uploads/Images/gold.png`}
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                      &nbsp;
                      <span style={{ fontSize: "15px" }}>
                        (You got Gold Membership)
                      </span>
                    </span>
                  )
                  //  : upload_items >= 16 ? (
                  //   <span
                  //     style={{
                  //       display: "flex",
                  //       alignItems: "center",
                  //       justifyContents: "center",
                  //     }}
                  //   >
                  //     {username} &nbsp;
                  //     <img
                  //       // src="/Images/platinum.png"
                  //       src={`${serverBaseURI}/hariBaba/api/uploads/Images/platinum.png`}
                  //       alt=""
                  //       style={{ width: "30px", height: "30px" }}
                  //     />
                  //     &nbsp;
                  //     <span style={{ fontSize: "15px" }}>
                  //       (You got Platinum Membership)
                  //     </span>
                  //   </span>
                  // ) 
                  : (
                    <span>{username} </span>
                  )}
                </div>
                <div className={profileCSS.details}>
                  {isloading ? (
                    <SkeletonTheme color={color} highlightColor={highlight}>
                      <Skeleton height={20} width={150} />
                    </SkeletonTheme>
                  ) : (
                    <div>
                      <p>{upload_items} uploads</p> <p>{email} </p>
                    </div>
                  )}
                </div>

                <div className={profileCSS.btngrp}>
                  {isloading ? (
                    <SkeletonTheme color={color} highlightColor={highlight}>
                      <Skeleton height={30} width={150} />
                    </SkeletonTheme>
                  ) : (
                    <>
                      <NavLink className={profileCSS.button} to="/upload">
                        Upload
                      </NavLink>

                      <Logout />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <MyUploads />
        </>
      ) : (
        <Redirect to="/login" />
      )}
      <Footer />
    </>
  );
};
export default Profile;
