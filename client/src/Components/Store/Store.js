import React, { useContext, useState } from "react";
import Card from "../../Utilities/Card/Card";
import store from "../../Styles/StoreCSS/Store.module.css";
import ContentOne from "../../Utilities/StaticContents/ContentOne";
import { ContexStore } from "../../ContexStore/ContexStore";
import Nav from "../Nav/Nav";
import Footer from "../../Utilities/StaticContents/Footer";
const Store = () => {
  document.title = "SuryaGhat Library - Store";
  const { apiData } = useContext(ContexStore);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(8);

  const showMore = () => {
    setPage(page + 4);
  };
  const [isFooter, setisFooter] = useState(false);
  setTimeout(() => {
    setisFooter(true);
  }, 1000);

  return (
    <>
      <Nav />
      <ContentOne itemLen={apiData.length} itemName={"Store Page"} />
      <div className={store.storeWrapper}>
        <div className={store.searchWrapper}>
          <form id={store.search_form_3}>
            <input
              type="text"
              className={store.search_3}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Find contents here ..."
            />
          </form>
        </div>
        <div className={store.mainWrapper}>
          {apiData
            .filter((val) => {
              if (value === "") {
                return val;
              } else if (
                val.pro_title.toLowerCase().includes(value.toLowerCase())
              ) {
                return val;
              }
            })

            .slice(0, page)
            .map((val, key) => {
              const {
                pro_id,
                pro_img1,
                pro_title,
                owner_name,
                pro_rating,
                pro_desc,
                cat_title,
              } = val;
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
        <div className={store.seemore}>
          {page < apiData.length ? (
            <span onClick={showMore}>See More</span>
          ) : (
            ""
          )}
        </div>
      </div>
      {isFooter && <Footer />}
    </>
  );
};

export default Store;
