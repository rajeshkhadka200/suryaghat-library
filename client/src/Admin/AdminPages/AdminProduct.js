import React, { useEffect, useState } from "react";
import productCSS from "../AdminCSS/AdminProduct.module.css";
import AdminNav from "../AdminComponents/AdminNav";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminSingleComp from "../AdminComponents/AdminSingleComp";
const AdminProduct = () => {
  let history = useHistory();
  const isAdmin = Cookies.get("__tcphblad__");
  if (!isAdmin) {
    history.push("/route/haribabalibrary/admin/login");
  }
  const [apiData, setapiData] = useState([]);

  useEffect(() => {
    axios.get("/hariBaba/api/productadmin").then((response) => {
      setapiData(response.data);
    });
  }, []);

  const [one, setone] = useState(true);
  const [two, settwo] = useState(false);
  const [three, setthree] = useState(false);
  const [four, setfour] = useState(false);
  const [verified, setverified] = useState(false);
  const [notverified, setnotverified] = useState(false);
  const [editor, seteditor] = useState(false);
  const filterverified = () => {
    setnotverified(false);
    setverified(true);
    settwo(true);
    setone(false);
    setthree(false);
    setfour(false);
    seteditor(false);
  };

  const filternotverified = () => {
    setverified(false);
    setnotverified(true);
    setthree(true);
    setone(false);
    settwo(false);
    setfour(false);
    seteditor(false);
  };

  const filterallProduct = () => {
    setverified(false);
    setnotverified(false);
    setone(true);
    setthree(false);
    settwo(false);
    setfour(false);
    seteditor(false);
  };
  const filtereditor = () => {
    seteditor(true);
    setnotverified(false);
    setverified(false);
    settwo(false);
    setone(false);
    setthree(false);
    setfour(true);
  };
  const [searchvalue, setsearchvalue] = useState("");
  //const redirectSearch = (e) => {
  //  e.preventDefault();
  //  history.push(
  //    `/route/haribabalibrary/admin/dashboard/search?search_query=${searchvalue}`
  //  );
  //};
  var a = false;
  return (
    <>
      <AdminNav />
      <div>
        <div className={productCSS.filterheader}>
          <span
            style={{ borderBottom: one ? "3px solid red" : "" }}
            onClick={filterallProduct}
          >
            All Products
          </span>
          <span
            style={{ borderBottom: two ? "3px solid red" : "" }}
            onClick={filterverified}
          >
            Verified
          </span>
          <span
            style={{ borderBottom: three ? "3px solid red" : "" }}
            onClick={filternotverified}
          >
            Non Verified
          </span>
          <span
            style={{ borderBottom: four ? "3px solid red" : "" }}
            onClick={filtereditor}
          >
            Editor's Pick
          </span>
        </div>
        <div className={productCSS.inpWrapper}>
           
            <input
              placeholder="Search goes here"
              value={searchvalue}
              onChange={(e) => {
                setsearchvalue(e.target.value);
              }}
              type="text"
            />
            <button type="submit">Search</button>
        </div>
        <div className={productCSS.productWrapper}>
          {apiData
            .sort((a, b) => a.pro_title.localeCompare(b.pro_title))
            .filter((data) => {
              if (!verified) {
                return data;
              } else {
                return data.isVerified === 1;
              }
            })
            .filter((data) => {
              if (!notverified) {
                return data;
              } else {
                return data.isVerified === 0;
              }
            })
            .filter((data) => {
              if (!editor) {
                return data;
              } else {
                return data.iseditor === 1;
              }
            })
            .filter((data) => {
              if (searchvalue === "") {
                return data;
              } else {
                a = true;
                return data.pro_title.toLowerCase().includes(searchvalue);
              }
            })
            .map((data, key) => {
              const {
                pro_id,
                pro_title,
                pro_img1,
                pro_desc,
                cat_title,
                sub_cat_title,
                owner_name,
                genre_title,
                lang_title,
                emo_title,
                publish_date,
                isVerified,
                src,
                iseditor,
                pro_rating,
                google_id,
              } = data;

              return (
                <>
                  {/*{myArray.fill(pro_rating)}*/}
                  <ToastContainer />
                  <AdminSingleComp
                    pro_id={pro_id}
                    pro_title={pro_title}
                    pro_img1={pro_img1}
                    pro_desc={pro_desc}
                    cat_title={cat_title}
                    sub_cat_title={sub_cat_title}
                    owner_name={owner_name}
                    genre_title={genre_title}
                    lang_title={lang_title}
                    emo_title={emo_title}
                    publish_date={publish_date}
                    isVerified={isVerified}
                    src={src}
                    iseditor={iseditor}
                    pro_rating={pro_rating}
                    google_id={google_id}
                    keys={key}
                    apiData={apiData.length}
                  />
                </>
              );
            })}
        </div>
        {/*{isFooter && <Footer />}*/}
      </div>
    </>
  );
};

export default AdminProduct;
