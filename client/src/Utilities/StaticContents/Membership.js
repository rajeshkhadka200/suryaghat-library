import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { serverBaseURI } from "../file.config";
import "../StaticContents/Membership.css";
const Membership = () => {
  const [membershipData, setmembershipData] = useState([
    {
      image: `${serverBaseURI}/hariBaba/api/uploads/Images/silver.png`,
      name: "Silver",
      desc: "To achieve the  Silver membership of our Library, contibute at least 1 contents in our website",
    },
    {
      image: `${serverBaseURI}/hariBaba/api/uploads/Images/gold.png`,
      name: "Gold",
      desc: "To achieve the  Gold membership of our Library, contibute at least 3 contents in our website",
    },
    // {
    //   image: `${serverBaseURI}/hariBaba/api/uploads/Images/platinum.png`,
    //   name: "Platinum",
    //   desc: "To achieve the  Platinum membership of our Library, contibute at least 15 contents in our website",
    // },
  ]);
  return (
    <>
      <div className="mebbCont">
        <p className="mbmHeading">Our Membership Plan</p>
        <div className="memCardCon">
          {membershipData.map((data, key) => {
            const { name, image, desc } = data;
            return (
              <>
                <div className="memcard">
                  <img src={image} alt={name} />
                  <p className="memName">{name}</p>
                  <p className="memDesc">{desc}</p>
                  <div className="buttonGrp">
                    <NavLink className="button" to="/upload">
                      Upload
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Membership;
