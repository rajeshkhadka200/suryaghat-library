import React, { useContext, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ContexStore } from "../../ContexStore/ContexStore";
import { serverBaseURI } from "../../Utilities/file.config";
const HomeThirdCol2 = () => {
  const { newRelease, setnewRelease } = useContext(ContexStore);
  useEffect(() => {
    const loadData = async () => {
      await axios
        .get("/hariBaba/api/product")
        .then((res) => setnewRelease(res.data));
    };
    loadData();
  }, []);
  return (
    <>
      <div className="homethirdCol2 colums">
        <span className="heading">New releases</span>
        {newRelease.slice(0, 3).map((data, key) => {
          const { pro_id, pro_title, owner_name, pro_img1, cat_title } = data;
          return (
            <div key={key} className="home3_card">
              <div className="card_img_holder">
                {/* <img src={`/upload/${pro_img1}`} alt="Not Found" /> */}
                <img
                  src={`${serverBaseURI}/hariBaba/api/uploads/upload/${pro_img1}`}
                  alt="Not found"
                />
              </div>
              <div className="homecardDisc">
                <span className="title">
                  {`${pro_title.substring(0, 20)}...`}
                </span>
                <span className="Author">
                  by {`${owner_name.substring(0, 20)}...`}
                </span>
                <span className="type">
                  <NavLink
                    className="col_type"
                    to={`/details/${pro_id}/${cat_title}`}
                  >
                    View{" "}
                  </NavLink>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeThirdCol2;
