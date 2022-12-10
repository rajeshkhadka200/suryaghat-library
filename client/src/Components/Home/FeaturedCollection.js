import React, { useEffect, useState } from "react";
import "../../Styles/HomeCSS/HomeFeatured.css";
import { NavLink } from "react-router-dom";
import { getApi } from "../../services";
const FeaturedCollection = () => {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      getApi.get("/hariBaba/api/getcategory").then((result) => {
        setcategory(result.data);
      });
    };
    loadData();
  }, []);
  return (
    <>
      <div className="holderFeatured">
        <span className="fTitle">Featured Collections</span>
        <div className="cardHolder">
          {category.map((data, key) => {
            const { cat_title, cat_desc } = data;
            return (
              <div key={key} className="fCard">
                <div className="fDesc">
                  <span className="cTitle">{cat_title}</span>
                  <p>{cat_desc}</p>
                  <NavLink
                    to={`/showstoredata/${cat_title}/cat_title`}
                    className="fcButton"
                  >
                    See All
                  </NavLink>
                </div>
              </div>
            );
          })}
          <div className="fCard">
            <div className="fDesc">
              <span className="cTitle">Images</span>
              <p>
                There are about 500 + Images available online in our Library.
                Feel free to download Images .
              </p>
              <NavLink to={`/store/gallery`} className="fcButton">
                See All
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCollection;
