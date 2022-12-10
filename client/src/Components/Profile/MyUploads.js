import React, { useContext } from "react";
import { ContexStore } from "../../ContexStore/ContexStore";
import profileCSS from "../../Styles/ProfileCSS/Profile.module.css";
import Cookies from "js-cookie";

import ReactStars from "react-stars";
import productCSS from "../../Admin/AdminCSS/AdminProduct.module.css";
import { NavLink } from "react-router-dom";
import { serverBaseURI } from "../../Utilities/file.config";
import { useHistory } from "react-router-dom";
import { getApi } from "../../services";

const MyUploads = () => {
  const AuthId = Cookies.get("__tcphbl30__");
  const { apiData } = useContext(ContexStore);
  console.log(apiData);

  const myProduct = apiData.filter((data) => {
    return data.google_id === AuthId;
  });

  const history = useHistory();

  const handleDelete = async (id, src, pro_img1) => {
    if (window.confirm("Are you sure")) {
      await getApi
        .post("/hariBaba/api/delete", {
          id,
          AuthId,
          src,
          pro_img1,
        })
        .then((res) => {
          if (res.status === 200) {
            history.push("profile");
            window.location.reload();
          }
        });
    }
  };

  return (
    <>
      <div className={productCSS.productWrapper}>
        {myProduct.length > 0 ? (
          myProduct.map((data, key) => {
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
              src,
              pro_rating,
              user_id,
            } = data;
            return (
              <>
                <div
                  id={profileCSS.contentID}
                  key={key}
                  className={productCSS.content}
                >
                  <div className={productCSS.left}>
                    <img
                      src={`${serverBaseURI}/hariBaba/api/uploads/upload/${pro_img1}`}
                      alt="upload docx"
                    />
                    {/* <img src={`/upload/${pro_img1}`} alt="upload docx" /> */}
                  </div>
                  <div className={productCSS.right}>
                    <div
                      id={profileCSS.detailsID}
                      className={productCSS.details}
                    >
                      <p id={profileCSS.titleID} className={productCSS.title}>
                        <span
                          style={{
                            fontWeight: "500",
                          }}
                        >
                          {key + 1})
                        </span>
                        &nbsp; {pro_title}
                      </p>
                      <div id={profileCSS.otherID} className={productCSS.other}>
                        <p>Author : {owner_name} </p>
                        <p>Category : {cat_title}</p>
                        <p>Sub category : {sub_cat_title}</p>
                        <p>Uploaded on : {publish_date}</p>
                        <p>Genre title : {genre_title}</p>
                        <p>Language : {lang_title}</p>
                        <p>Emotion : {emo_title}</p>
                      </div>
                      <ReactStars
                        count={pro_rating}
                        size={24}
                        color1={"#f79028"}
                        color2={"#f79028"}
                      />
                    </div>
                    <div className={productCSS.othersDetails}>
                      <p id={profileCSS.descID} className={productCSS.desc}>
                        {pro_desc !== undefined && pro_desc.substring(0, 200)}
                      </p>
                      <p>
                        <a
                          id={profileCSS.viewfiles}
                          target="_blank"
                          rel="noreferrer"
                          href={`${serverBaseURI}/hariBaba/api/uploads/files/${src}`}
                        >
                          View Files
                        </a>
                      </p>
                      <div id={profileCSS.grpID} className={productCSS.grp}>
                        <NavLink
                          className="button"
                          to={`/edit/v1/type=contents/${pro_id}/edits&&req=edit_data/${pro_title}`}
                        >
                          Edit
                        </NavLink>
                        <button
                          onClick={(e) => handleDelete(pro_id, src, pro_img1)}
                        >
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p className={profileCSS.errorNoupload}>
            You haven't uploaded anything ;(
            <small>All the content you upload, appears here</small>
            <NavLink to="/upload">
              <i class="fas fa-cloud-upload-alt fa-3x"></i>
            </NavLink>
          </p>
        )}
      </div>
    </>
  );
};

export default MyUploads;
