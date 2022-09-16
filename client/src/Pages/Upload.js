import React from "react";
import Cookies from "js-cookie";
import Inserting from "../Components/Uploading Items/Inserting";
import Nav from "../Components/Nav/Nav";
import Footer from "../Utilities/StaticContents/Footer";
import { Redirect } from "react-router-dom";

const Upload = () => {
  const AuthId = Cookies.get("__tcphbl30__");
  document.title = "SuryaGhat Library - Uploads";
  return (
    <>
      <Nav />
      {AuthId ? <Inserting /> : <Redirect to="/" />}

      <Footer />
    </>
  );
};

export default Upload;
