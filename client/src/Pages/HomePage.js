import React, { useEffect, useState } from "react";
import HomeAuthors from "../Components/Home/HomeAuthors";
import HomeThirdSection from "../Components/Home/HomeThirdSection";
import FeaturedCollection from "../Components/Home/FeaturedCollection";
import HomeSmallData from "../Components/Home/HomeSmallData";
import HomeSlider from "../Components/Home/HomeSlider";

import {
  SortingRatingDocument,
  SortingRatingVideo,
  SortingRatingAudio,
} from "../Components/Home/SortingRating";
import Nav from "../Components/Nav/Nav";
import Footer from "../Utilities/StaticContents/Footer";
import Cookies from "js-cookie";
import InfoModel from "../Utilities/StaticContents/InfoModel";

const HomePage = (props) => {
  const user_ck = Cookies.get("__tcphbl30__");
  const [modelCon, setmodelCon] = useState(false); // define that model should show or hide..individually
  const [ismodelUI, setismodelUI] = useState(true); // defines that model comp is always true..
  let modelStatus = localStorage.getItem("model");
  //if (modelStatus === null) {
  //  localStorage.setItem("model", "true");
  //}
  useEffect(() => {
    setTimeout(() => {
      if (
        !user_ck &&
        window.location.pathname === "/" &&
        modelStatus === "true"
      ) {
        document.querySelector("body").classList.add("hide");
        setmodelCon(true);
      }
    }, 5000);
  }, []);
  const methodControl = () => {
    setismodelUI(false);
  };

  document.title = "Suryaghat Library - Home";

  // set this to the value of
  return (
    <>
      <Nav />
      {modelCon && ismodelUI === true && modelStatus === "true" && (
        <InfoModel
          url={"/login"}
          heading={"You are not loged in yet."}
          message={"Do you want to login in to our website ?"}
          buttontextone={"Yes"}
          buttontexttwo={"Cancel"}
          methodControl={methodControl}
          neverMesg="Never ask me again"
        />
      )}
      <HomeSlider />
      <HomeAuthors />
      <HomeThirdSection />
      <SortingRatingDocument />
      <SortingRatingVideo />
      <SortingRatingAudio />
      <FeaturedCollection />
      {/* <HomeSmallData /> */}
      <Footer />
    </>
  );
};

export default HomePage;
