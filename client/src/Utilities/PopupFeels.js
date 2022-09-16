import React from "react";
import "./Popup.css";
const PopupFeels = ({ setisPopup, isPopup }) => {
  let show = true;
  const check = () => {
    const location = window.location.href;
    if (location.includes("admin")) {
      show = false;
    }
  };
  check();
  return (
    <>
      {show && (
        <div className="icon_popup">
          <div
            onClick={(e) => {
              setisPopup(!isPopup);
            }}
            className="actualIcons"
          >
            <i className="fas fa-adjust fa-2x"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupFeels;
