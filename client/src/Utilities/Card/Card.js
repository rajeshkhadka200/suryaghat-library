import React, { memo } from "react";
import style from "../../Styles/StoreCSS/TopRated.module.css";
import ReactStars from "react-stars";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { serverBaseURI } from "../file.config";
const Card = ({ pro_id, img, title, owner, rating, desc, cat_title }) => {
  return (
    <>
      <NavLink
        className={style.actualCard}
        to={`/details/${pro_id}/${cat_title}`}
      >
        <div className={style.leftPart}>
          <img
            src={`${serverBaseURI}/hariBaba/api/uploads/upload/${img}`}
            alt="Not found"
          />
        </div>
        <div className={style.rightPart}>
          <div className={style.title}>
            {title === undefined ? title : `${title.substring(0, 20)}...`}
          </div>
          <p className={style.authorName}>
            by {`${owner.substring(0, 20)}...`}
          </p>
          <div className={style.rate}>
            <ReactStars
              count={rating}
              size={24}
              color1={"#f79028"}
              color2={"#f79028"}
            />
          </div>
          <p className={style.desc}>
            {desc === undefined ? desc : `${desc.substring(0, 50)}...`}
          </p>
          <NavLink
            to={`/details/${pro_id}/${cat_title}`}
            className={style.linkRate}
          >
            See Details
          </NavLink>
        </div>
      </NavLink>
    </>
  );
};

export default memo(Card);
