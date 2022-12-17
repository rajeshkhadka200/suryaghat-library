import React from "react";
import "./feelingCard.css";
const FeelingCard = ({ setisPopup, changeEmo }) => {
  return (
    <>
      <div
        className="wrapperfeel"
        onClick={(e) => {
          setisPopup(false);
        }}
      ></div>
      <div className="popupCard">
        <li onClick={(e) => changeEmo("happy")}>
          <span>
            <i className="far fa-smile"></i>
          </span>
          Cool
        </li>

        {/* <li onClick={(e) => changeEmo("love")}>
          <span>
            <i className="far fa-grin-hearts"></i>
          </span>
          Crazy
        </li> */}

        <li onClick={(e) => changeEmo("normal")}>
          <span>
            <i class="far fa-sun"></i>
          </span>
          Light
        </li>
        <li onClick={(e) => changeEmo("night")}>
          <span>
            <i class="far fa-moon"></i>
          </span>
          Night
        </li>
      </div>
    </>
  );
};

export default FeelingCard;
