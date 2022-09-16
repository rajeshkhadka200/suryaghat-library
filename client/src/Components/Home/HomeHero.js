import React from "react";
import Homeheroleft from "./HomeHeroLeft";
import HomeHeroRight from "./HomeHeroRight";
import "../../Styles/Global/MainHero.css";
const Homehero = () => {
  return (
    <>
      <div className="hero_content">
        <Homeheroleft />
        <HomeHeroRight />
      </div>
    </>
  );
};

export default Homehero;
