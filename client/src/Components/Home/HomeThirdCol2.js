import React, { useContext, useEffect } from "react";

import { NavLink, useHistory } from "react-router-dom";
import { ContexStore } from "../../ContexStore/ContexStore";
import { getApi } from "../../services";
import { serverBaseURI } from "../../Utilities/file.config";
const HomeThirdCol2 = () => {
  const { newRelease, setnewRelease } = useContext(ContexStore);
  const history = useHistory()
  useEffect(() => {
    const loadData = async () => {
      await getApi
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
            <div key={key} className="home3_card" onClick={()=> history.push(`/details/${pro_id}/${cat_title}`)}>
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
