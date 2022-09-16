import React from "react";
import "./Imagesmodel.css";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import { serverBaseURI } from "../file.config";
const ImagesModel = ({ onlyImg }) => {
  return (
    <>
      <div className="ImgmodelCon">
        <div className="slide-container">
          <Zoom scale={0.4}>
            {onlyImg.map((each, index) => (
              <img
                key={index}
                style={{ width: "100%" }}
                src={`${serverBaseURI}/hariBaba/api/uploads/ImageUpload/${each}`}
                alt="Not found"
              />
            ))}
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default ImagesModel;
