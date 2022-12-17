import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContexStore } from "../../ContexStore/ContexStore";
import { serverBaseURI } from "../../Utilities/file.config";
const HomeThirdCol3 = () => {
  const { apiData } = useContext(ContexStore);

  const mostWatched = apiData.sort((a, b) => {
    return b.views - a.views;
  });

  return (
    <>
      <div className="homethirdCol3 colums">
        <span className="heading">Trending</span>
        {mostWatched.slice(0, 3).map((data) => {
          const { pro_title, cat_title, owner_name, pro_img1, pro_id } = data;
          return (
            <div className="home3_card">
              <div className="card_img_holder">
                {/* <img src={`/upload/${pro_img1}`} alt="Not Found" /> */}
                <img
                  src={`${serverBaseURI}/hariBaba/api/uploads/upload/${pro_img1}`}
                  alt="Not found"
                />
              </div>
              <div className="homecardDisc">
                <span className="title">
                {`${pro_title && pro_title.length > 25 ? pro_title.substring(0, 25)+" "+'...' : pro_title}`}
                </span>
                <span className="Author">
                by {`${owner_name && owner_name.length> 25 ? owner_name.substring(0, 25)+" "+"..." : owner_name}`}
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

export default HomeThirdCol3;
