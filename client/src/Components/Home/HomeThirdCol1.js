import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ContexStore } from "../../ContexStore/ContexStore";
import { serverBaseURI } from "../../Utilities/file.config";
const HomeThirdCol1 = () => {
  const { apiData } = useContext(ContexStore);
  const filterededitor = apiData.filter((data) => data.iseditor === 1);
  const ggg = filterededitor.sort((a, b) => b.editortime - a.editortime);

  return (
    <>
      <div className="homethirdCol1 colums">
        <span className="heading">Editor's Pick</span>
        {ggg.slice(0, 3).map((data, key) => {
          const { pro_title, owner_name, cat_title, pro_img1, pro_id } = data;
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
                  {`${pro_title.substring(0, 10)}...`}
                </span>
                <span className="Author">
                  by {`${owner_name.substring(0, 10)}...`}
                </span>
                <span className="type">
                  <NavLink
                    className="col_type"
                    to={`/details/${pro_id}/${cat_title}`}
                  >
                    View
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

export default HomeThirdCol1;
