import React, { useState } from "react";
import { CategoryCard, LanguageCard } from "./CategoryCard";
import style from "../../Styles/StoreCSS/Heading.module.css";
import TopRated from "./TopRated";
import Skeleton from "react-loading-skeleton";

const Headings = () => {
  const [loading, setloading] = useState();
  setTimeout(() => {
    setloading(false);
  }, 1500);
  return (
    <>
      <div className={style.heading}>
        <span>Browse Contents By </span>
      </div>

      <div className={style.storeHeadings}>
        <div className={style.Headinglinks}>
          {loading ? <Skeleton count={2} height={180} /> : <CategoryCard />}
        </div>
      </div>
      <TopRated />
      <div className={style.heading}>
        <span>Browse By Language</span>
      </div>
      <div className={style.storeHeadings} style={{ marginBottom: "80px" }}>
        <div className={style.Headinglinks}>
          <LanguageCard />
        </div>
      </div>
    </>
  );
};

export default Headings;
