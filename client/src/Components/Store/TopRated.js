import React, { useState, useEffect } from "react";
import style from "../../Styles/StoreCSS/TopRated.module.css";
import axios from "axios";
import Card from "../../Utilities/Card/Card";
const TopRated = () => {
  const [data, setdata] = useState([]);
  const [visible, setvisible] = useState(8);
  useEffect(() => {
    const loadData = async () => {
      await axios.get("/hariBaba/api/store/topratings").then((result) => {
        setdata(result.data);
      });
    };
    loadData();
  }, []);
  const loadmore = () => {
    setvisible(visible + 4);
  };

  return (
    <>
      <div className={style.heading}>
        <span>Top Rated Contents</span>
      </div>
      <div className={style.cardContaner}>
        {data.slice(0, visible).map((data, key) => {
          const {
            cat_title,
            pro_id,
            pro_img1,
            pro_title,
            owner_name,
            pro_desc,
            pro_rating,
          } = data;
          return (
            <Card
              key={key}
              img={pro_img1}
              title={pro_title}
              owner={owner_name}
              rating={pro_rating}
              desc={pro_desc}
              cat_title={cat_title}
              pro_id={pro_id}
            />
          );
        })}
      </div>
      {visible < data.length ? (
        <div className={style.buttonsGrp}>
          <span onClick={loadmore}>Show More</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TopRated;
