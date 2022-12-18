import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../../../node_modules/swiper/components/pagination/pagination.min.css";
import "../../Styles/HomeCSS/HomeSlider.css";
import SwiperCore, {
  Pagination,
  Autoplay,
} from "../../../node_modules/swiper/core";
import { serverBaseURI } from "../../Utilities/file.config";
import { getApi } from "../../services";
SwiperCore.use([Pagination, Autoplay]);
const HomeSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      await getApi.get("/hariBaba/api/admin/getbanner").then((response) => {
        setData(response.data);
      });
    };
    loadData();
  }, []);

  return (
    <>
      <div className="mainContainer">
        <div className={"sliderWrapper"}>
          <Swiper
            loop={true}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
              loop: true,
            }}
            className={"mySwiper"}
          >
            {data.map((datas, key) => {
              const { heading, banner_img, banner_desc } = datas;
              return (
                <SwiperSlide key={key}>
                  <div className={"sliderText"}>
                    <span className={"sliderHeading"}>{heading}</span>
                    <span className={"sliderdesc"}>{banner_desc}</span>
                  </div>
                  <img
                    className={"img"}
                    src={`${serverBaseURI}/hariBaba/api/uploads/AdminSRC/${banner_img}`}
                    alt={heading}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default HomeSlider;
