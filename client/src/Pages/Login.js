import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import axios from "axios";
import Cookies from "js-cookie";
import { Redirect } from "react-router";
import LoginStyle from "../Styles/ProfileCSS/Login.module.css";
import Footer from "../Utilities/StaticContents/Footer";
import Nav from "../Components/Nav/Nav";
import { toast } from "react-toastify";
import MainLoader from "../Utilities/StaticContents/MainLoader";
import { serverBaseURI } from "../Utilities/file.config";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

const Login = () => {
  const [loading, setloading] = useState(false);
  window.scrollTo(0, 0);
  document.title = "SuryaGhat Library || Login";
  const authID = Cookies.get("__tcphbl30__");
  const history = useHistory();

  // const clientId = process.env.REACT_APP_CLIENT_ID;
  // const onSuccess = async (res) => {
  //   setloading(true);
  //   const { name, email, imageUrl, googleId } = res.profileObj;
  //   await axios
  //     .post("/hariBaba/api/auth", {
  //       name,
  //       email,
  //       imageUrl,
  //       googleId,
  //     })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         toast.success("Registered Sucessfully");
  //         Cookies.set("__tcphbl30__", googleId, { expires: 7 });
  //         const randomNum = Math.random(5000) + 5080;
  //         Cookies.set("__cuser-_webuser_", randomNum);
  //         Cookies.set("___security-data.user_", randomNum + 8489920);
  //         //localStorage.setItem("model", "true");

  //         setTimeout(() => {
  //           history.push("/");
  //           window.location.reload();
  //           setloading(false);
  //         }, 2000);
  //       }
  //       if (res.status === 202) {
  //         if (!authID) {
  //           toast.success("Login Successfull");
  //           Cookies.set("__tcphbl30__", googleId, { expires: 7 });
  //           const randomNum = Math.random(5000) + 5080;
  //           Cookies.set("__cuser-_webuser_", randomNum);
  //           Cookies.set("___security-data.user_", randomNum + 8489920);
  //           //localStorage.setItem("model", "true");
  //         }
  //         setTimeout(() => {
  //           setloading(false);
  //           history.push("/");
  //           window.location.reload();
  //         }, 2000);
  //       }
  //     });
  // };

  // const onFailure = (res) => {
  //   toast.error("Something went wrong");
  //   setloading(false);
  // };

  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   clientId,
  //   onFailure,
  // });

  var provider_google = new firebase.auth.GoogleAuthProvider();
  //var provider_fb = new firebase.auth.FacebookAuthProvider();

  async function googleSignin(provider) {
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(async function (result) {
        await axios
          .post("/hariBaba/api/auth", {
            name: result.user.displayName,
            email: result.user.email,
            imageUrl: result.user.photoURL,
            googleId: result.user.uid,
          })
          .then((res) => {
            if (res.status === 200) {
              Cookies.set("__tcphbl30__", result.user.uid, { expires: 7 });
              const randomNum = Math.random(5000) + 5080;
              Cookies.set("__cuser-_webuser_", randomNum);
              Cookies.set("___security-data.user_", randomNum + 8489920);
              setTimeout(() => {
                toast.success("Registered Sucessfully");
                history.push("/");
                window.location.reload();
                setloading(false);
              }, 2000);
            }
            if (res.status === 202) {
              if (!authID) {
                toast.success("Login Successfull");
                Cookies.set("__tcphbl30__", result.user.uid, { expires: 7 });
                const randomNum = Math.random(5000) + 5080;
                Cookies.set("__cuser-_webuser_", randomNum);
                Cookies.set("___security-data.user_", randomNum + 8489920);
              }
              setTimeout(() => {
                setloading(false);
                window.location.reload();
                history.push("/");
              }, 2000);
            }
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        //console.log(error.code);
        //console.log(error.message);
      });
  }

  return (
    <>
      {loading && <MainLoader />}
      <Nav />
      {authID ? <Redirect to="/" /> : ""}
      <div className={LoginStyle.loginWrapper}>
        <div className={LoginStyle.LoginRight}>
          <div className={LoginStyle.loginBox}>
            <span>Login Here</span>
            <img
              src={`${serverBaseURI}/hariBaba/api/uploads/Images/user.png`}
              alt="user"
            />
            <button
              onClick={() => {
                googleSignin(provider_google);
              }}
              style={{ cursor: "pointer" }}
            >
              <i class="fab fa-google"></i> Continue with google
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
