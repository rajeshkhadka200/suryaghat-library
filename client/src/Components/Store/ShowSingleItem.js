import React, { useState, useContext } from "react";
import style from "../../Styles/StoreCSS/ItemDetails.module.css";
import { ContexStore } from "../../ContexStore/ContexStore";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

import { serverBaseURI } from "../../Utilities/file.config";
import { getApi } from "../../services";

const ShowSingleItem = ({
  pro_title,
  pro_desc,
  cat_title,
  owner_name,
  lang_title,
  emo_title,
  pro_img1,
  publish_date,
  referenceurl,
  pro_rating,
  src,
}) => {
  const [visible, setvisible] = useState(170);
  const [copied, setCopied] = useState(false);
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }
  const { userData } = useContext(ContexStore);
  const us_ckk = Cookies.get("__tcphbl30__");

  const [error, setError] = useState("");
  let arr = [];
  for (let i = 0; i < pro_rating; i++) {
    arr.push(<i id={style.iconsColor} className="fas fa-star "></i>);
  }
  const { u_download, upload_items, user_id } = userData;

  function downloadFile(src) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = `${serverBaseURI}/hariBaba/api/uploads/files/${src}`;
    link.click();
    getApi //update user download
      .post("/hariBaba/api/senduserData", {
        user_id,
        key: "update_user_download",
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Updated");
        }
      })
      .catch((err) => console.log(err));
  }

  const IncVisible = () => {
    setvisible(10000);
  };
  return (
    <>
      <div className={style.itemWrapper}>
        <div className={style.itemLeft}>
          <img
            src={`${serverBaseURI}/hariBaba/api/uploads/upload/${pro_img1}`}
            alt={pro_title}
          />
          {/* <img src={`/upload/${pro_img1}`} alt={pro_title} /> */}

          <div className={style.shareItem}>
            <button onClick={copy}>
              Share : {copied ? "Copied" : "Copy"} Link
            </button>
          </div>
        </div>
        <div className={style.itemMiddle}>
          <div className={style.itemheading}>{pro_title}</div>

          <p className={style.itemauthor}>by {owner_name},</p>
          {arr.map((data, key) => {
            return <span key={key}>{data}</span>;
          })}
          <div className={style.itemOthers}>
            <span>Category : {cat_title}</span>
            <span>language : {lang_title}</span>
            <span>Genre : Story</span>
            <span>Publish Date : {emo_title}</span>
            <span>Last Updated : {publish_date}</span>
            {referenceurl && (
              <span>
                Reference URL :{" "}
                <a target="_blank" href={referenceurl} rel="noreferrer">
                  {referenceurl}
                </a>
              </span>
            )}
          </div>
          <hr />
          <div className={style.ItemDetails}>
            <p className={style.itemSynopsisTitle}>Synopsis</p>
            <p className={style.itemSynopsis}>
              {pro_desc === undefined
                ? pro_desc
                : pro_desc.substring(0, visible)}
              {visible < 175 ? "..." : ""}
              {visible < 175 ? (
                <span onClick={IncVisible} className={style.showMore}>
                  &nbsp; Show more
                </span>
              ) : (
                ""
              )}
            </p>
            <div className={style.othersDetails}>
              <button
                onClick={() => {
                  !us_ckk
                    ? setError("Please login to download")
                    : upload_items <= 5 && u_download >= 5
                    ? setError(
                        "Download count exceed upload more than 5 to download more"
                      )
                    : upload_items <= 15 && u_download >= 15
                    ? setError(
                        "Download count exceed upload more than 10 to download more"
                      )
                    : upload_items <= 30 && u_download >= 15
                    ? setError(
                        "Download count exceed upload more than 30 to download more"
                      )
                    : downloadFile(src);
                }}
              >
                Download File
              </button>
              <div style={{ color: "red" }}>{error}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSingleItem;
