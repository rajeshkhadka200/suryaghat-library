import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Content.module.css";
import Skeleton from "react-loading-skeleton";
import { serverBaseURI } from "../file.config";

const ContentOne = ({
  itemLen,
  itemName,
  username,
  image,
  is_super,
  email,
  joined_on,
}) => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);

  return (
    <>
      <div className={style.topbanner}>
        <div className={style.topBannerLeft}>
          <div className={style.img}>
            {image !== undefined ? (
              <>
                {loading ? (
                  <Skeleton width={150} height={150} circle={true} />
                ) : (
                  <img
                    style={{ border: "4px solid #8c78eed2" }}
                    src={`${serverBaseURI}/hariBaba/api/uploads/AdminSRC/${image}`}
                    alt={username}
                  />
                )}
              </>
            ) : (
              <i id={style.icons} className="fas fa-book-reader fa-6x"></i>
            )}
          </div>
        </div>
        <div className={style.topBannerRight}>
          <span className={style.bannerHeading}>
            {username !== undefined ? (
              loading ? (
                <Skeleton height={50} width={150} />
              ) : (
                <>
                  {username}{" "}
                  <small>
                    <sup>
                      <i
                        style={{ color: "#2d88ff", fontSize: "15px" }}
                        className="fas fa-check-circle"
                      ></i>
                    </sup>
                  </small>
                </>
              )
            ) : (
              "Suryaghat library"
            )}
          </span>
          <p className={style.countitems}>
            {username ? (
              <>
                {loading ? (
                  <Skeleton height={50} width={300} />
                ) : (
                  <>
                    <span className={style.itemDynamic}>
                      Email :{" "}
                      <span style={{ textTransform: "lowercase" }}>
                        {email && email}
                      </span>
                    </span>
                    <br />
                    <span className={style.itemDynamic}>
                      Role : {is_super === "true" ? "Super Admin" : "Admin"}
                    </span>{" "}
                    <br />
                    <span className={style.itemDynamic}>
                      joined On : {joined_on && joined_on}
                    </span>
                  </>
                )}
              </>
            ) : (
              <>
                <span className={style.itemDynamic}>{itemLen}</span>+ Items
                Found in &nbsp;
                <span className={style.itemDynamic}>{itemName}</span>
              </>
            )}
          </p>
          {!username && (
            <p className={style.quote}>
              <i id={style.fasbannerLeft} className="fas fa-quote-left"></i>
              You can never get a cup of tea large enough or a book long enough
              to suit me.
              <i id={style.fasbannerRight} className="fas fa-quote-right"></i>
            </p>
          )}
          {!username && (
            <NavLink className={style.bannerButton} to="/about">
              Who we are
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentOne;
