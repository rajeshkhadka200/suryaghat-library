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
  genre_title
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
    getApi //update user download
    .post("/hariBaba/api/senduserData", {
      user_id,
      key: "update_user_download",
    })
    .then((response) => {
      if (response.status === 200) {
          console.log("Updated");
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.href = `${serverBaseURI}/hariBaba/api/uploads/files/${src}`;
        link.click();
        }
      })
      .catch((err) => console.log(err));
  }

  const IncVisible = () => {
    setvisible(10000);
  };
  const desVisible = () => {
    setvisible(170);
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
            <span>Genre : {genre_title}</span>
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
              {visible < 175 ? "  ..." : ""}
              {visible < 175 ? (
                <>
                <br />
                <span onClick={IncVisible} className={style.showMore}>
                  Show more
                </span>
                </>
              ) : (
                <>
                <br />
                <span onClick={desVisible} className={style.showMore}>
                  Show less
                </span>
                </>
              )}
            </p>
            <div className={style.othersDetails}>
              <button
                onClick={() => {
                  !us_ckk
                    ? setError("Please login to download")
                    : upload_items === 0 && u_download >= 10 
                    ? setError(
                      "Download count exceed upload at least 1 content to download more"
                    )
                    : upload_items <= 1 && u_download >= 20
                    ? setError(
                        "Download count exceed upload more than 1 contents to download more"
                      )
                    // : upload_items <= 3 && u_download >= 15
                    // ? setError(
                    //     "Download count exceed upload more than 5 contents to download more"
                    //   )
                    // : upload_items <= 10 && u_download >= 20
                    // ? setError(
                    //     "Download count exceed upload more than 10 contents to download more"
                    //   )
                    : downloadFile(src);
                }}
              >
                Download File
              </button>
              <div style={{ color: "red", fontSize: '0.7rem', marginTop: '5px' }}>{error}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSingleItem;
