import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeHero from "../Components/Home/HomeHero";
import Nav from "../Components/Nav/Nav";
import { VideoPlayer } from "../Components/Store/Source";
import { serverBaseURI } from "../Utilities/file.config";
import Footer from "../Utilities/StaticContents/Footer";
import Map from "../Utilities/StaticContents/Map";
import Membership from "../Utilities/StaticContents/Membership";
const About = () => {
  const [video, setVideo] = useState([]);
  document.title = "SuryaGhat Library - About Us";

  useEffect(() => {
    const loadData = async () => {
      await axios.get("hariBaba/api/img/getVedio").then((res) => {
        setVideo(res.data);
      });
    };
    loadData();
  }, []);
  return (
    <>
      <Nav />
      <HomeHero />
      <Membership />
      <Map />
      {video.slice(0, 1).map((data, key) => {
        return (
          <VideoPlayer
            src={`${serverBaseURI}/hariBaba/api/uploads/AdminSRC/${data.video}`}
            key={key}
            id="aboutVideo"
          />
        );
      })}
      <Footer />
    </>
  );
};

export default About;
