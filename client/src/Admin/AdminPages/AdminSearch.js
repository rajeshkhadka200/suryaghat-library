import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContexStore } from "../../ContexStore/ContexStore";
import AdminNav from "../AdminComponents/AdminNav";
import AdminSingleComp from "../AdminComponents/AdminSingleComp";
import productCSS from "../AdminCSS/AdminProduct.module.css";

const AdminSearch = () => {
  const url = window.location.search;
  const actualQuery = url.split("=")[1];
  const q = actualQuery.replace(/%20/g, " ").toLowerCase();
  const { dataState } = useContext(ContexStore);
  const matchTitle = dataState.filter((data) => {
    return data.pro_title.toLowerCase().includes(q);
  });

  return (
    <>
      <AdminNav />
      <br />
      <br />
      <br />
      <div className={productCSS.productWrapper}>
        <p>
          {matchTitle.length} results found in {actualQuery}
        </p>
        {matchTitle.map((data, key) => {
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
                apiData={14}
              />
            </>
          );
        })}
        {matchTitle.length === 0 && (
          <div className={productCSS.errormatchno}>
            <i class="far fa-times-circle fa-3x"></i>
            <p>No result found</p>
            <div className={productCSS.grpBtn}>
              <NavLink
                to="/route/haribabalibrary/admin/dashboard/products"
                className="button"
              >
                Go Back to search
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminSearch;
