import React, { useEffect, useState, useContext } from "react";
import db from "../../Utilities/firebase.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContexStore } from "../../ContexStore/ContexStore.js";
import productCSS from "../AdminCSS/AdminProduct.module.css";
import { serverBaseURI } from "../../Utilities/file.config.js";
import { useHistory } from "react-router-dom";
import { getApi } from "../../services/index.js";
const AdminSingleComp = ({
  pro_id,
  pro_title,
  pro_img1,
  pro_desc,
  cat_title,
  sub_cat_title,
  owner_name,
  genre_title,
  lang_title,
  emo_title,
  publish_date,
  isVerified,
  src,
  iseditor,
  pro_rating,
  google_id,
  keys,
  apiData,
}) => {
  const { admin } = useContext(ContexStore);
  const { username } = admin;
  const history = useHistory();

  const deleteProduct = (id, pro_img1, src, google_id, isVerified) => {
    getApi
      .post("/hariBaba/api/deletebyadmin", {
        id,
        pro_img1,
        src,
        google_id,
        isVerified,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Product Deleted Successfully");
          // window.location.reload();
          history.push("/route/haribabalibrary/admin/dashboard");
        }
      });
  };

  //verify
  const verifyproduct = (id, google_id, cat_title, pro_title, pro_img1) => {
    getApi
      .post("/hariBaba/api/verifyproduct", {
        id,
        google_id,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Product Verified");
          const docsId = new Date().getTime().toString();
          const notifDate = new Date().toISOString().slice(0, 10);
          db.collection("Notif")
            .doc(docsId)
            .set({
              timestamp: docsId,
              user_id: google_id,
              pro_img: pro_img1,
              admin_name: username,
              cat_title: cat_title,
              pro_title: pro_title,
              pro_id: id,
              notifDate: notifDate,
            })
            .then(() => {
              window.location.reload();
              history.push("/route/haribabalibrary/admin/dashboard");
            });
          //setTimeout(() => {}, 1000);
        }
      });
  };
  //editor product
  const editorProduct = async (pro_id, keys) => {
    if (window.confirm(`Add to Editor pick ? ID : ${keys + 1}`))
      await getApi
        .post("/hariBaba/api/verifyeditor", {
          pro_id,
          checkQuery: "firstset",
        })
        .then((res) => {
          alert(`Added to editor Pick ID: ${keys + 1}`);
          // window.location.reload();
          history.push("/route/haribabalibrary/admin/dashboard");
        });
  };

  //remove editor

  const removeEditor = async (pro_id, keys) => {
    if (window.confirm(`Remove from Pick ? ID ${keys + 1}`)) {
      await getApi
        .post("/hariBaba/api/verifyeditor", { pro_id, checkQuery: "secondset" })
        .then((res) => {
          alert(`Removed from editor Pick ID:${keys + 1}`);
          history.push("/route/haribabalibrary/admin/dashboard");

          // window.location.reload();
        });
    }
  };

  var myArray = new Array(140);
  myArray.fill(1);
  useEffect(() => {
    myArray = new Array(apiData.length);
    myArray.fill(1);
  }, []);

  const [rate, setrate] = useState([...myArray]);

  const addrate = (keys) => {
    if (rate[keys] !== 5) {
      rate[keys] = rate[keys] + 1;
      setrate([...rate]);
    } else {
      alert("Maximum 5 rating is allwed");
    }
  };
  const subrate = (keys) => {
    if (rate[keys] > 1) {
      rate[keys] = rate[keys] - 1;
      setrate([...rate]);
    } else {
      alert("Minimum 1 rating is allwed");
    }
  };
  //send rate to db
  const sendRate = (pro_id, keys) => {
    const rating = rate[keys];
    getApi
      .post("/hariBaba/api/itemrating", {
        rating,
        pro_id,
      })
      .then((responce) => {
        alert("rated");
      })
      .catch((err) => {
        alert(err.responce.data);
      });
  };

  return (
    <>
      <div keys={keys} className={productCSS.content}>
        <div className={productCSS.left}>
          <img
            src={`${serverBaseURI}/hariBaba/api/uploads/upload/${pro_img1}`}
            alt="img"
          />
        </div>
        <div className={productCSS.right}>
          <div className={productCSS.details}>
            <p className={productCSS.title}>
              <span
                style={{
                  fontWeight: "500",
                }}
              >
                {keys + 1})
              </span>
              &nbsp; {pro_title}{" "}
            </p>
            <div className={productCSS.other}>
              <p>Author : {owner_name} </p>
              <p>Category : {cat_title}</p>
              <p>Sub category : {sub_cat_title}</p>
              <p>Uploaded on : {publish_date}</p>
              <p>Genre title : {genre_title}</p>
              <p>Language : {lang_title}</p>
              <p>Emotion : {emo_title}</p>
              <p>Current rating : {pro_rating}</p>
            </div>
          </div>
          <div className={productCSS.othersDetails}>
            <p className={productCSS.desc}>
              {pro_desc !== undefined && pro_desc.substring(0, 500)}
            </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href={`${serverBaseURI}/hariBaba/api/uploads/files/${src}`}
              >
                View Files
              </a>
            </p>
            {isVerified === 1 && (
              <div className={productCSS.ratingCon}>
                <div className={productCSS.actualrate}>
                  <span
                    className={productCSS.minus}
                    onClick={(e) => {
                      subrate(keys);
                    }}
                  >
                    -
                  </span>
                  {rate[keys]}
                  <span
                    className={productCSS.minus}
                    onClick={(e) => {
                      addrate(keys);
                    }}
                  >
                    +
                  </span>
                </div>
                <button
                  onClick={(e) => sendRate(pro_id, keys)}
                  className={productCSS.button}
                >
                  Rate
                </button>
              </div>
            )}

            <div className={productCSS.grp}>
              {isVerified === 0 ? (
                <button
                  onClick={(e) =>
                    verifyproduct(
                      pro_id,
                      google_id,
                      cat_title,
                      pro_title,
                      pro_img1
                    )
                  }
                >
                  verify
                </button>
              ) : (
                ""
              )}
              {isVerified === 1 ? (
                <>
                  {iseditor === 0 ? (
                    <button
                      style={{ background: "rgba(0, 128, 0, 0.5)" }}
                      onClick={(e) => editorProduct(pro_id, keys)}
                    >
                      Set Editor
                    </button>
                  ) : (
                    <button
                      style={{ background: "rgba(255, 0, 0, 0.5)" }}
                      onClick={(e) => removeEditor(pro_id, keys)}
                    >
                      Remove Editor
                    </button>
                  )}
                </>
              ) : (
                ""
              )}

              <button
                onClick={(e) =>
                  deleteProduct(pro_id, pro_img1, src, google_id, isVerified)
                }
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSingleComp;
