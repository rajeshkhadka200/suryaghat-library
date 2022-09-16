import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import style from "../Styles/StoreCSS/ShowStoreData.module.css";
import Card from "../Utilities/Card/Card";
import ContentOne from "../Utilities/StaticContents/ContentOne";
import Nav from "../Components/Nav/Nav";
import Footer from "../Utilities/StaticContents/Footer";
import { ContexStore } from "../ContexStore/ContexStore";

const ShowStoreData = () => {
  const { apiData } = useContext(ContexStore);
  const [isFooter, setisFooter] = useState(false);
  setTimeout(() => {
    setisFooter(true);
  }, 2000);
  const { title, tablename } = useParams();
  const [error, seterror] = useState("");
  const [data, setdata] = useState([]);
  document.title = "SuryaGhat Library - " + title;

  useEffect(() => {
    const loaded = async () => {
      axios
        .post("/hariBaba/api/store/sendall", {
          title: title,
          tablename: tablename,
        })
        .then((response) => {
          setdata(response.data);
          seterror("");
        })
        .catch((err) => {
          if (err.response) {
            seterror("Data not found");
          }
        });
    };
    loaded();
  }, []);

  const thisExcept = apiData.filter((data) => {
    return data.cat_title !== title;
  });

  let itemLen = data.length;
  let itemname = title;
  let naya = [];
  for (let i = 1; i <= 4; i++) {
    const random = Math.floor(Math.random() * thisExcept.length);
    naya.push(thisExcept[random]);
  }

  return (
    <>
      <Nav />
      <ContentOne itemLen={itemLen} itemName={itemname} />
      <div className={style.smallIndi}>Results : {title} </div>
      <div className={style.ShowDataholder}>
        {error !== "" ? <div className={style.error}>{error}</div> : null}
        {data.map((data, key) => {
          const {
            pro_id,
            pro_img1,
            pro_title,
            owner_name,
            pro_rating,
            pro_desc,
            cat_title,
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
      {thisExcept.length > 0 && (
        <div className={style.exceptWrapper}>
          <div className={style.exceptHeading}>
            <span>Other title you may like</span>
          </div>

          <div className={style.holder}>
            {naya.map((data, key) => {
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
      )}
      {isFooter && <Footer />}
    </>
  );
};

export default ShowStoreData;
