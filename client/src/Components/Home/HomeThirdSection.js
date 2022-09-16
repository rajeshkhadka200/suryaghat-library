import React from "react";
import "../../Styles/HomeCSS/HomeThird.css"; 
import HomeThirdCol1 from "./HomeThirdCol1";
import HomeThirdCol2 from "./HomeThirdCol2";
import HomeThirdCol3 from "./HomeThirdCol3";

const HomeThirdSection = () => {
  return (
    <>
      <div className="homeThird">
        <HomeThirdCol1 />
        <HomeThirdCol2 />
        <HomeThirdCol3 />
      </div>
    </>
  );
};

export default HomeThirdSection;
