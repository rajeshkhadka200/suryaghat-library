import React, { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import "./InfoModel.css";

const InfoModel = ({
  url,
  heading,
  message,
  buttontextone,
  buttontexttwo,
  methodControl,
  neverMesg,
}) => {
  const history = useHistory();
  //document.querySelector(".actualModel").classList.remove("close");
  const hide = () => {
    document.querySelector("body").classList.remove("hide");
    methodControl();
    document.querySelector(".actualModel").classList.add("close");
  };
  const redirect = (url) => {
    history.push(url);
    hide();
  };
  const [checked, setchecked] = useState(false);
  let modelStatus = localStorage.getItem("model");
  const handleCheck = () => {
    setchecked(!checked);
    if (modelStatus === "true") {
      localStorage.setItem("model", false);
    } else {
      localStorage.setItem("model", true);
    }
  };
  return (
    <>
      <div className="modelInfoWrapper">
        <div className="actualModel">
          <div className="modelHeader">
            <p className="modelTitle">{heading}</p>
            <div onClick={hide} className="cross">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <div className="modelBody">
            <p className="modelMessage">{message}</p>
            <div className="buttonGrpModel">
              <div className="modelB_N">
                <input
                  defaultChecked={checked}
                  onChange={handleCheck}
                  type="checkbox"
                />{" "}
                <small>{neverMesg}</small> <br />
              </div>
              <div>
                <button className="btn2" onClick={hide}>
                  {buttontexttwo}
                </button>
                <button onClick={(e) => redirect(url)}>{buttontextone}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(InfoModel);
