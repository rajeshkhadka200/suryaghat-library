import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const ContexStore = createContext();

const ContexStoreWrapper = ({ children }) => {
  const [loading, setloading] = useState(true);
  const authID = Cookies.get("__tcphbl30__");
  const ad_ckk = Cookies.get("__tcphblad__");
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    if (authID) {
      axios
        .post("/hariBaba/api/senduserData", {
          googleId: authID,
        })
        .then((response) => {
          setuserData(response.data[0]);
          setTimeout(() => {
            setloading(false);
          }, 1000);
        });
    }
  }, []);

  const [apiData, setApidata] = useState([]); // state for all product api

  useEffect(() => {
    getAllPro();
  }, []);
  const getAllPro = async () => {
    await axios.get("/hariBaba/api/allitems").then((res) => {
      setApidata(res.data);
    });
  };

  //get all the user from the database :)
  const [alluser, setalluser] = useState([]);
  useEffect(() => {
    if (ad_ckk) {
      axios.get("/hariBaba/api/getalluser").then((response) => {
        setalluser(response.data);
      });
    }
  }, []);
  //admin
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    if (ad_ckk) {
      axios
        .post("/hariBaba/api/admin/sendadmindata", {
          ad_ckk: ad_ckk,
        })
        .then((response) => {
          setAdmin(response.data[0]);
        });
    }
  }, []);

  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    await axios
      .get("/hariBaba/api/img/fetchmultipleimages")
      .then((responce) => {
        setImages(responce.data);
      });
  };
  useEffect(() => {
    fetchImages();
  }, []);
  //new Realeae
  const [newRelease, setnewRelease] = useState([]);
  const [notifOpen, setnotifOpen] = useState(false);
  const handleNotif = () => {
    setnotifOpen(!notifOpen);
  };
  const [adminNotif, setadminNotif] = useState(false);
  const handleAdminNotif = () => {
    setadminNotif(!adminNotif);
  };

  const [dataState, setdataState] = useState([]);
  useEffect(() => {
    const getAllSearchData = async () => {
      await axios.get("/hariBaba/api/getAllsearchProduct").then((responce) => {
        setdataState(responce.data);
      });
    };
    getAllSearchData();
  }, []);

  const [popup, setpopup] = useState(true);
  //skeleton function
  let theme = localStorage.getItem("theme");
  let color = "";
  let highlight = "";
  if (theme === "night") {
    color = "#333";
    highlight = " rgba(121, 121, 121, 0.13)";
  }
  return (
    <>
      <ContexStore.Provider
        value={{
          userData,
          apiData,
          alluser,
          setalluser,
          admin,
          images,
          setImages,
          newRelease,
          setnewRelease,
          notifOpen,
          setnotifOpen,
          handleNotif,
          handleAdminNotif,
          adminNotif,
          setadminNotif,
          dataState,
          popup,
          setpopup,
          highlight,
          color,
        }}
      >
        {children}
      </ContexStore.Provider>
    </>
  );
};

export default ContexStoreWrapper;
