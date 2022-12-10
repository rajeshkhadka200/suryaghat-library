import React, { useState, useEffect, useContext } from "react";
import "../../Styles/HomeCSS/HomeAuthor.css";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ContexStore } from "../../ContexStore/ContexStore";
import { getApi } from "../../services";
const HomeAuthors = () => {
  const { highlight, color } = useContext(ContexStore);
  const [creator, setCreator] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await getApi.get("/hariBaba/api/owner").then((result) => {
        setCreator(result.data);
        if (result.data !== "") {
          setTimeout(() => {
            setloading(false);
          }, 1500);
        }
      });
    };
    loadData();
  }, []);

  return (
    <>
      <div className="topCategories">
        <span className="heading">Our Top Creators</span>
        <div className="topHolder">
          {creator.map((data) => {
            const { owner_name, owner_img, owner_id } = data;
            return !loading ? (
              <div key={owner_id} className="item cardtopCollection ">
                <div className="topcllectioncardImg">
                  <img src={owner_img} alt="Hero" />
                </div>
                <span className="topllectionTitle">{owner_name}</span>
              </div>
            ) : (
              <SkeletonTheme color={color} highlightColor={highlight}>
                <Skeleton key={owner_id} circle={true} height={90} width={90} />
              </SkeletonTheme>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeAuthors;
