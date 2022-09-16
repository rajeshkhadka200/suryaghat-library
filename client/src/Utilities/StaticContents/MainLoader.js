import React from "react";
import "./mainLoader.css";
const MainLoader = () => {
  return (
    <>
      <div className="mainLoader">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MainLoader;
