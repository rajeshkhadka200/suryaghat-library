import React from "react";
import { useGoogleLogout } from "react-google-login";
import Cookies from "js-cookie";
import LogoutCSS from "../Styles/ProfileCSS/Logout.module.css";
import { useHistory } from "react-router";
import firebase from "firebase";
const Logout = () => {
  let history = useHistory();
  // const clientId = process.env.REACT_APP_CLIENT_ID;
  // const onLogoutSuccess = () => {
  //   Cookies.remove("__tcphbl30__");
  //   //localStorage.removeItem("model");
  //   history.push("/");
  //   window.location.reload();
  // };
  // const onFailure = () => {
  //   alert("Failure");
  // };
  // const { signOut } = useGoogleLogout({
  //   clientId,
  //   onLogoutSuccess,
  //   onFailure,
  // });

  function googleSignout() {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          Cookies.remove("__tcphbl30__");
          history.push("/");
          window.location.reload();
        },
        function (error) {
          console.log("Signout Failed");
        }
      );
  }

  //  return statements starts
  return (
    <>
      <button
        id={LogoutCSS.button}
        className={LogoutCSS.logoutBtn}
        onClick={googleSignout}
      >
        <span>Sign Out</span>
      </button>
    </>
  );
};

export default Logout;
