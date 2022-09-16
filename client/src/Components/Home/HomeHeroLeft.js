import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/HomeCSS/HomeHeroLeft.css";
const Homeheroleft = () => {
  return (
    <>
      <div className="left_side">
        <div className="tittle">Suryaghat Library</div>
        <div className="hero_disc">
          <i className="fas fa-quote-left"></i>
          <span className="fancyHero">Suryaghat Library</span> is a popular non
          profit organization established with the motive of providing the free
          online book service to the readers through application and website.
          <i className="fas fa-quote-right"></i>
        </div>
        <div className="btn_group">
          <button className="btn">
            <NavLink
              className="leftbtn"
              style={{ padding: "10px " }}
              to="/store"
            >
              Go to Book Store
            </NavLink>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Homeheroleft;
