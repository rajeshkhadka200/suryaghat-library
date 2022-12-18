import React, { useState } from "react";
import CardSlide from "../Utilities/Slider/CardSlide";
import Headings from "../Components/Store/Headings";
import Nav from "../Components/Nav/Nav";
import Footer from "../Utilities/StaticContents/Footer";

const StorePage = () => {
  document.title = "SuryaGhat Library- Collections";
  const [isFooter, setisFooter] = useState(false);
  setTimeout(() => {
    setisFooter(true);
  }, 2000);
  return (
    <>
      <Nav />
      <CardSlide />
      <Headings />
      <Footer />
    </>
  );
};

export default StorePage;
