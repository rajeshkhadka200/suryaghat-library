import React, { useState, useEffect, useContext } from "react";
import ShowSingleItem from "../Components/Store/ShowSingleItem";

import { useParams } from "react-router-dom";
import { AudioPlayer, VideoPlayer } from "../Components/Store/Source";
import Nav from "../Components/Nav/Nav";
import Comment from "../Components/Store/Comment";
import Footer from "../Utilities/StaticContents/Footer";
import { ContexStore } from "../ContexStore/ContexStore";
import style from "../Styles/StoreCSS/ShowStoreData.module.css";
import Card from "../Utilities/Card/Card";
import { serverBaseURI } from "../Utilities/file.config";
import { getApi } from "../services";

const ItemDetails = () => {
  const { userData, apiData } = useContext(ContexStore);
  const { upload_items } = userData;
  let { id, type } = useParams();
  const [singleData, setsingleData] = useState([]);
  const [checkItem, setcheckItem] = useState("");

  var width = window.innerWidth;

  const checkaudio = () => {
    return (
      <>
        <AudioPlayer src={src} />
      </>
    );
  };
  const checkVideo = () => {
    return (
      <>
        <VideoPlayer
          src={`${serverBaseURI}/hariBaba/api/uploads/files/${src}`}
        />
      </>
    );
  };

  const checkDocument = () => {
    if (upload_items !== undefined && upload_items > 5) {
      var tool = "";
    } else {
      var tool = "#toolbar=0";
    }
    return (
      <>
        <div className="docs">
          <object
            className="objectTag"
            height="600px"
            width="100%"
            data={`${serverBaseURI}/hariBaba/api/uploads/files/${src}${tool}`}
          ></object>
        </div>
      </>
    );
  };
  const lastCheck = () => {
    if (checkItem === "Audios") {
      return checkaudio();
    } else if (checkItem === "Videos") {
      return checkVideo();
    } else if (checkItem === "Documents") {
      return checkDocument();
    } else {
      return null;
    }
  };
  const countViews = async (id) => {
    await getApi.post("/hariBaba/api/views", {
      id,
    });
  };

  useEffect(() => {
    getCatTit();
    countViews(id);
    window.scrollTo(0, 0);
  }, [id]);
  const [notFound, setnotFound] = useState("have");

  const getCatTit = async () => {
    await getApi
      .post("/hariBaba/api/showspecific", {
        id,
        type,
      })
      .then((result) => {
        setsingleData(result.data[0]);
        setcheckItem(result.data[0].cat_title);
      })
      .catch((err) => {
        setnotFound("not have");
      });
  };

  const {
    pro_id,
    pro_title,
    pro_desc,
    cat_title,
    owner_name,
    lang_title,
    emo_title,
    uploaded_by,
    pro_img1,
    pro_rating,
    src,
    publish_date,
    referenceurl,
  } = singleData;
  const otherrelatedItem = apiData.filter(
    (data) =>
      data.cat_title === singleData.cat_title &&
      data.pro_id !== singleData.pro_id
  );

  const [toogle, setToggle] = useState(false);
  const [message, setMessage] = useState("");
  const showError = () => {
    setTimeout(() => {
      setMessage(`It seems Content doesn't exist ;(`);
    }, 3500);
  };

  return (
    <>
      <Nav />
      {singleData.length !== 0 ? (
        <>
          <ShowSingleItem
            referenceurl={referenceurl}
            pro_id={pro_id}
            pro_title={pro_title}
            pro_desc={pro_desc}
            cat_title={cat_title}
            owner_name={owner_name}
            lang_title={lang_title}
            emo_title={emo_title}
            uploaded_by={uploaded_by}
            pro_img1={pro_img1}
            pro_rating={pro_rating}
            src={src}
            publish_date={publish_date}
          />
          {width > 800 && (
            <>
              <div
                onClick={(e) => {
                  setToggle(!toogle);
                }}
                className="toggleSRC"
              >
                {toogle ? "Hide File" : "Show File"}
              </div>
              {toogle && lastCheck()}
            </>
          )}
          <Comment pro_id={pro_id} />
          <div className={style.exceptWrapper}>
            <div className={style.exceptHeading}>
              <span>Other Related {cat_title}</span>
            </div>

            <div className={style.holder}>
              {otherrelatedItem.slice(0, 4).map((data, key) => {
                const {
                  cat_title,
                  pro_id,
                  pro_img1,
                  pro_title,
                  owner_name,
                  pro_rating,
                  pro_desc,
                } = data;
                return (
                  <Card
                    key={key}
                    img={pro_img1}
                    title={pro_title}
                    owner={owner_name}
                    rating={pro_rating}
                    desc={pro_desc}
                    cat_title={cat_title}
                    pro_id={pro_id}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <p className="datanotfoundSingle">
          {message === "" && (
            <img
              height="50px"
              width="50px"
              src={`${serverBaseURI}/hariBaba/api/uploads/Images/loading.jpg`}
              alt="not found"
            />
          )}
          {showError()}
          {message}
        </p>
      )}
      <Footer />
    </>
  );
};

export default ItemDetails;
