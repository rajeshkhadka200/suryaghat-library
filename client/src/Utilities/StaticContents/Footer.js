import React, { useState, useContext, memo } from "react";
import { NavLink, useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import { ContexStore } from "../../ContexStore/ContexStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./footer.css";
import { serverBaseURI } from "../file.config";

const Footer = () => {
  const history = useHistory();
  const serID = process.env.REACT_APP_SERVICE_ID;
  const tempID = process.env.REACT_APP_TEMPLETE_ID;
  const userID = process.env.REACT_APP_USER_ID;
  const [loading, setloading] = useState(false);
  const { userData } = useContext(ContexStore);
  const { username, email } = userData;
  const [usermsg, setusermsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!username || !email) {
      setloading(true);
      setTimeout(() => {
        toast.info("Please Login to Send message");
        setloading(false);
      }, 1000);
    } else {
      setloading(true);
      emailjs.sendForm(serID, tempID, e.target, userID).then(
        () => {
          setTimeout(() => {
            toast.success("Meessage Sent Successfully!");
            setloading(false);
            setusermsg("");
          }, 1000);
        },
        () => {
          setTimeout(() => {
            toast.error("Failed sending message");
            setloading(false);
          }, 1000);
        }
      );
    }
  };
  const quickLinks = [
    {
      list: "Home",
      url: "/",
    },
    {
      list: "About",
      url: "/about",
    },
    {
      list: "Contents",
      url: "/contents",
    },
    {
      list: "Store",
      url: "/store",
    },
    {
      list: "Gallery",
      url: "/store/gallery",
    },
  ];
  // const scrollup = () => {
  //   window.scrollTo(0, 0);
  // };

  return (
    <>
      <footer>
        <ToastContainer />
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic"> Suryaghat Library</div>
              <p>
                Suryaghat Library is a popular non profit organization
                established with the motive of providing the free online book,
                Audio and Videos service.
              </p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone cncttxt">
                <i className="fas fa-phone-volume"></i>+977-9840767766
              </div>
              <div className="email cncttxt">
                <i className="fas fa-envelope"></i>
                haribabalibraryofficial45.np@gmail.com
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">Quiks Links</div>
            {quickLinks.map((data, key) => {
              const { url, list } = data;
              return (
                <div>
                  <NavLink to={url}>{list}</NavLink>
                </div>
              );
            })}
          </div>
          <div className="right box">
            <div className="topic">Contact Us</div>
            <form onSubmit={sendEmail}>
              <textarea
                value={usermsg}
                name="message"
                required
                placeholder="Leave a message..."
                onChange={(e) => setusermsg(e.target.value)}
              />
              <input type="hidden" value={username} name="username" />
              <input type="hidden" value={email} name="useremail" />
              <button
                disabled={loading}
                type="submit"
                style={{
                  background: loading ? "grey" : "",
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading && (
                  <img
                    height="20px"
                    width="20px"
                    src={`${serverBaseURI}/hariBaba/api/uploads/Images/loading.jpg`}
                  />
                )}
                &nbsp; &nbsp;
                {loading ? "Sending.." : "Send"}
              </button>
            </form>
            <div className="media-icons">
              <a
                href="https://www.facebook.com/haribabalibrary/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="#" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p className="cpyrght">
            Copyright © {new Date().getFullYear().toString()} All right reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
