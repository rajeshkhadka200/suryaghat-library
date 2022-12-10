import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./style.css";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverBaseURI } from "../file.config";
import { getApi } from "../../services";
// import Item from "./item";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CardSlide = () => {
  const ad_ckk = Cookies.get("__tcphblad__");
  const [imagesAds, setimagesAds] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await getApi.get("/hariBaba/api/img/fetchmulBanner").then((res) => {
        setimagesAds(res.data);
      });
    };
    loadData();
  }, []);

  const deleteInnerBanner = async (id, url) => {
    if (window.confirm("Are you sure?")) {
      await getApi
        .post("/hariBaba/api/img/deleteinnerbanner", { id, url })
        .then((res) => {
          toast.success("Deleted Successfully");
        })
        .catch(() => {
          alert("Something went wrong");
        });
    }
  };

  return (
    <>
      {imagesAds.length !== 0 && (
        <>
          <div style={{ marginTop: "0" }} className="carousel-wrapper">
            <Carousel breakPoints={breakPoints}>
              {imagesAds.map((data, key) => {
                const { image_url, id, http } = data;
                return (
                  <>
                    <div>
                      <div key={key} className="sliderImgHolder">
                        <img
                          style={{ borderRadius: "10px" }}
                          className="img"
                          src={`${serverBaseURI}/hariBaba/api/uploads/ImageUpload/${image_url}`}
                          alt={id}
                        />
                        {ad_ckk && (
                          <div className="dlt_wrapper_inner">
                            <span
                              onClick={(e) => deleteInnerBanner(id, image_url)}
                            >
                              <i class="fas fa-trash-alt fa-3x"></i>
                            </span>
                          </div>
                        )}
                      </div>

                      <center>
                        {http !== "#" && (
                          <a target="_blank" href={http}>
                            Visit
                          </a>
                        )}
                      </center>
                    </div>
                  </>
                );
              })}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
};

export default CardSlide;
