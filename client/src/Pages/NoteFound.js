import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Global/NotFound.css";
import Footer from "../Utilities/StaticContents/Footer";
function NotFound() {
  var location = window.location.href;
  document.title = "Page Not Found - 404";
  return (
    <>
      <div className="error_center">
        <p className="error404"> 404 </p>
        <p>{location}</p>
        <p>
          The link may be broken, or the page may have been removed. Check to
          see if the link you're trying to open is correct.
        </p>
        <div className="btnE_con">
          <Link className="btn" to="/">
            Go back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
