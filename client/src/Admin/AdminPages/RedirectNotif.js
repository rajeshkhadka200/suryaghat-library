import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../services";
import { serverBaseURI } from "../../Utilities/file.config";
import AdminNav from "../AdminComponents/AdminNav";
import AdminSingleComp from "../AdminComponents/AdminSingleComp";
import productCSS from "../AdminCSS/AdminProduct.module.css";
const RedirectNotif = () => {
  const { notiftitle } = useParams();
  const [data, setdata] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    queryData();
  }, []);
  const queryData = () => {
    getApi
      .post("/hariBaba/api/allnotifproduct", {
        notiftitle,
      })
      .then((res) => {
        if (res.status === 200) {
          setdata(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status !== 404) {
          // alert("Something went wrong");
          console.log(err);
        }
      });
  };
  const showError = () => {
    setTimeout(() => {
      setError(`No data Found or content is already verified ;(`);
    }, 2000);
  };
  return (
    <>
      <AdminNav />
      <br /> <br />
      <div className={productCSS.productWrapper}>
        {data.length !== 0 ? (
          data.map((data, key) => {
            const {
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
            } = data;

            return (
              <>
                <AdminSingleComp
                  pro_id={pro_id}
                  pro_title={pro_title}
                  pro_img1={pro_img1}
                  pro_desc={pro_desc}
                  cat_title={cat_title}
                  sub_cat_title={sub_cat_title}
                  owner_name={owner_name}
                  genre_title={genre_title}
                  lang_title={lang_title}
                  emo_title={emo_title}
                  publish_date={publish_date}
                  isVerified={isVerified}
                  src={src}
                  iseditor={iseditor}
                  pro_rating={pro_rating}
                  google_id={google_id}
                  keys={key}
                  apiData={20}
                />
              </>
            );
          })
        ) : (
          <p className="datanotfoundSingle">
            {error === "" && (
              <img
                height="50px"
                width="50px"
                src={`${serverBaseURI}/hariBaba/api/uploads/Images/loading.jpg`}
                alt="pl"
              />
            )}
            {showError()}
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default RedirectNotif;
