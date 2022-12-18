import React, { useContext, useState } from "react";
import ContentOne from "../Utilities/StaticContents/ContentOne";
import { useParams } from "react-router";
import Nav from "../Components/Nav/Nav";
import "../Styles/StoreCSS/ShowImg.css";
import { ContexStore } from "../ContexStore/ContexStore";
import Cookies from "js-cookie";

import Footer from "../Utilities/StaticContents/Footer";
import ImagesModel from "../Utilities/StaticContents/ImagesModel";
import { serverBaseURI } from "../Utilities/file.config";
import { getApi } from "../services";

const ShowImg = () => {
  const ad_ckk = Cookies.get("__tcphblad__");
  const { images } = useContext(ContexStore);
  let param = useParams();
  const { category } = param;
  const specificImg = images.filter((data) => {
    return data.img_cate === category && data.isverified === 1;
  });
  document.title = "Images-" + category;
  const deletePic = (id, image_name) => {
    if (window.confirm("Are you sure to delete this image?")) {
      getApi
        .post("/hariBaba/api/img/deleteimg", {
          id,
          image_name,
        })
        .then((res) => {
          window.location.reload();
        });
    }
  };
  //goes to contex
  let onlyImg = [];
  for (let i = 0; i < specificImg.length; i++) {
    onlyImg.push(specificImg[i].image_name);
  }

  const [bigimg, setbigImg] = useState(false);
  const toggleBanner = () => {
    setbigImg(!bigimg);
  };

  return (
    <>
      <Nav />
      <ContentOne itemLen={specificImg.length} itemName={category} />
      <div className="show_heading">
        <div className="header_btn_grp">
          <span className="title__imgs">Result : {category} </span>
          <button onClick={toggleBanner} className="button">
            {bigimg ? "Hide Baner" : "Show Baner"}
          </button>
        </div>
        {bigimg && <ImagesModel onlyImg={onlyImg} />}

        <div class="categories__">
          {specificImg.map((data, key) => {
            const { image_name, id } = data;
            return (
              <div
                class="img_con__"
                style={{
                  backgroundImage: `url("${serverBaseURI}/hariBaba/api/uploads/ImageUpload/${image_name}")`,
                }}
              >
                {ad_ckk && (
                  <div className="dltHolder">
                    <span onClick={(e) => deletePic(id, image_name)}>
                      <i class="fas fa-trash-alt fa-3x"></i>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowImg;
