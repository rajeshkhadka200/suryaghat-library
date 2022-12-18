import React, { useContext, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../../Styles/HomeCSS/HomeHeroRight.css";
import { ContexStore } from "../../ContexStore/ContexStore";
import { serverBaseURI } from "../../Utilities/file.config";
const HomeHeroRight = () => {
  const { apiData, highlight, color } = useContext(ContexStore);
  const [loading, setloading] = useState(true);
  setTimeout(() => {
    setloading(false);
  }, 1500);

  // number should not be repeated

  const random = [];
  for (let i = 0; i <= 5; i++) {
    // number should not be repeated
    let num = Math.floor(Math.random() * apiData.length);
    if (random.indexOf(num) === -1) {
      random.push(num);
    }
  }

  return (
    <>
      <div className="right_side">
        <div className="imgrightCon">
          <div className="col1">
            {loading ? (
              <SkeletonTheme color={color} highlightColor={highlight}>
                <Skeleton height={150} width={130} />
              </SkeletonTheme>
            ) : (
              <img
                width="130"
                height="200"
                src={`${serverBaseURI}/hariBaba/api/uploads/upload/${
                  apiData[random[0]]?.pro_img1
                }`}
                alt="about us"
              />
            )}
          </div>
          <div className="col2">
            {loading ? (
              <SkeletonTheme color={color} highlightColor={highlight}>
                <Skeleton height={150} width={130} />
              </SkeletonTheme>
            ) : (
              <img
                width="130"
                height="200"
                src={`${serverBaseURI}/hariBaba/api/uploads/upload/${
                  apiData[random[1]]?.pro_img1
                }`}
                alt="not found"
              />
            )}

            {loading ? (
              <SkeletonTheme color={color} highlightColor={highlight}>
                <Skeleton height={150} width={130} />
              </SkeletonTheme>
            ) : (
              <img
                width="130"
                height="200"
                src={`${serverBaseURI}/hariBaba/api/uploads/upload/${
                  apiData[random[2]]?.pro_img1
                }`}
                alt="Loading"
              />
            )}
          </div>
          <div className="col3">
            {loading ? (
              <SkeletonTheme color={color} highlightColor={highlight}>
                <Skeleton height={150} width={130} />
              </SkeletonTheme>
            ) : (
              <img
                width="130"
                height="200"
                src={`${serverBaseURI}/hariBaba/api/uploads/upload/${
                  apiData[random[3]]?.pro_img1
                }`}
                alt="Loading"
              />
            )}
            {loading ? (
              <SkeletonTheme color={color} highlightColor={highlight}>
                <Skeleton height={150} width={130} />
              </SkeletonTheme>
            ) : (
              <img
                width="130"
                height="200"
                src={`${serverBaseURI}/hariBaba/api/uploads/upload/${apiData[3]?.pro_img1}`}
                alt="loading"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroRight;
