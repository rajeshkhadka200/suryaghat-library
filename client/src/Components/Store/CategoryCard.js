import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "../../Styles/StoreCSS/cateCard.module.css";
import { ContexStore } from "../../ContexStore/ContexStore";
import { serverBaseURI } from "../../Utilities/file.config";
import { getApi } from "../../services";
const CategoryCard = () => {
  const [fetchcate, setfetchcate] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await getApi.get("/hariBaba/api/getcategory").then((result) => {
        setfetchcate(result.data);
      });
    };
    loadData();
  }, []);
  return (
    <>
      {fetchcate.map((data, key) => {
        const { cat_title, cat_img } = data;
        const tablename = "cat_title";
        return (
          <NavLink key={key} to={`showstoredata/${cat_title}/${tablename}`}>
            <div className={style.mainCateCard}>
              <div id="circle" className={style.StorecateCard}>
                <div className={style.img}>
                  <img
                    src={`${serverBaseURI}/hariBaba/api/uploads/Images/${cat_img}`}
                    height="50px"
                    width="50px"
                    alt=""
                  />
                </div>
              </div>
              <div className={style.action}>{cat_title}</div>
            </div>
          </NavLink>
        );
      })}
      <NavLink to={`/store/gallery`}>
        <div className={style.mainCateCard}>
          <div id="circle" className={style.StorecateCard}>
            <div className={style.img}>
              <img
                src={`${serverBaseURI}/hariBaba/api/uploads/Images/art.gif`}
                height="50px"
                width="50px"
                alt=""
              />
            </div>
          </div>
          <div className={style.action}>Images</div>
        </div>
      </NavLink>
    </>
  );
};
const LanguageCard = () => {
  const { apiData } = useContext(ContexStore);

  const uniqueLang = [
    ...new Set(
      apiData.map((data) => {
        return data.lang_title;
      })
    ),
  ];

  return (
    <>
      {uniqueLang.map((data, key) => {
        const tablename = "lang_title";
        return (
          <>
            <NavLink to={`showstoredata/${data}/${tablename}`} key={key}>
              <div className={style.mainCateCard}>
                <div id="circle" className={style.StorecateCard}>
                  {data}
                </div>
              </div>
            </NavLink>
          </>
        );
      })}
    </>
  );
};

export { LanguageCard, CategoryCard };
