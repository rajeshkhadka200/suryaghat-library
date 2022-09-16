import React, { useContext, useState } from "react";
import "../Styles/StoreCSS/Gallery.css";
import Nav from "../Components/Nav/Nav";
import axios from "axios";
import { ContexStore } from "../ContexStore/ContexStore";
import { NavLink } from "react-router-dom";
import ContentOne from "../Utilities/StaticContents/ContentOne";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Utilities/StaticContents/Footer";
import Cookies from "js-cookie";
import MainLoder from "../Utilities/StaticContents/MainLoader";
import { serverBaseURI } from "../Utilities/file.config";
const Gallery = () => {
  document.title = "SuryaGhat Library - Gallery";
  const { userData, images } = useContext(ContexStore);
  const { google_id } = userData;
  const [file, setFile] = useState(null);
  const [heading, setHeading] = useState("");
  const [loading, setloading] = useState(false);

  const us_ckk = Cookies.get("__tcphbl30__");
  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();
    setTimeout(() => {
      if (!us_ckk) {
        toast.info("Please login to upload");
        setloading(false);
      } else {
        if (file !== null) {
          if (file.length === 1) {
            toast.error("only 1 not allowed");
            setloading(false);
          } else if (file.length > 10) {
            toast.error("Maximum 10 images allowed");
            setloading(false);
          } else {
            const formData = new FormData();
            for (let i = 0; i < file.length; i++) {
              formData.append("files", file[i]);
              formData.append("Text", heading);
              formData.append("gid", google_id);
            }
            axios
              .post("/hariBaba/api/img/multipleimages", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .catch((err) => {
                toast.error("Something went wrong!");
              });

            //setloading(false);
            toast.success("Thank you for your contribution!");
          }
        } else {
          toast.warn("Select new images");
        }
      }
    }, 2000);
    setTimeout(() => {
      setloading(false);
      setFile(null);
      window.location.reload();
    }, 5000);
  };
  const verified = images.filter((data) => {
    return data.isverified === 1;
  });
  const img_and_cat = [
    ...new Map(verified.map((data) => [data.img_cate, data])).values(),
  ];
  return (
    <>
      {loading && <MainLoder />}
      <Nav />
      <ContentOne itemLen={img_and_cat.length} itemName={"Categories"} />

      <div className="topHeadingGallery">
        <form onSubmit={handleSubmit}>
          <span className="headingUpload">Upload Images Here : </span>
          <input
            className="categoryInput"
            autoComplete="off"
            required
            type="text"
            name="heading"
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Enter Image Category"
          />

          <input
            className="middleStyle"
            required
            type="file"
            onChange={(e) => setFile(e.target.files)}
            multiple
          />
          <button
            className="button"
            Send
            disabled={loading}
            type="submit"
            style={{
              background: loading ? "grey" : "",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {loading && (
              <img
                height="20px"
                width="20px"
                src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
              />
            )}
            &nbsp; &nbsp;
            {loading ? "Uploading.." : "Upload"}
          </button>
        </form>
        <p className="browseGallery">Browse image categories</p>
      </div>

      <div class="categories">
        {img_and_cat.map((data, key) => {
          const { image_name, img_cate } = data;
          return (
            <div
              key={key}
              class="img_con"
              style={{
                backgroundImage: `url("${serverBaseURI}/hariBaba/api/uploads/ImageUpload/${image_name}")`,
              }}
            >
              <NavLink className="cat_title" to={`/store/gallery/${img_cate}`}>
                <p className="h4">
                  {img_cate !== undefined
                    ? img_cate.substring(0, 10)
                    : img_cate}
                  ..
                </p>
              </NavLink>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
