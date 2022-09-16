import React from "react";
import "../../Styles/HomeCSS/HomeSmallData.css";
const HomeSmallData = () => {
  return (
    <>
      <div className="HomesmallData">
        <div className="smallCard firstCol">
          <div className="smallCardDesc">
            <span className="smallTittle">Free of cost Books</span>
            <p className="small">available online</p>
          </div>
          <div className="smallcardIcons">
            <i className="fas fa-book-open fa-2x iconSmall"></i>
          </div>
        </div>

        <div className="smallCard secCol">
          <div className="smallCardDesc">
            <span className="smallTittle">over 5 hundred Audio</span>
            <p className="small">available online</p>
          </div>
          <div className="smallcardIcons">
            <i className="fas fa-file-audio fa-2x iconSmall"></i>
          </div>
        </div>

        <div className="smallCard thirdCol">
          <div className="smallCardDesc">
            <span className="smallTittle">over 5 hundred Docs</span>
            <p className="small">available online</p>
          </div>
          <div className="smallcardIcons">
            <i className="fas fa-file-alt fa-2x iconSmall"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSmallData;
