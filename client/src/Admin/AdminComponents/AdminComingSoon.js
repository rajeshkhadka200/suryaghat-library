
import React, { useState } from "react";
import { getApi } from "../../services";

const AdminComingSoon = () => {
  //Upload the Image to the database
  const [imgHolder, setImgHolder] = useState();
  const [inputData, setInputData] = useState({
    pro_title: "",
    owner_name: "",
    cat_title: "",
  });

  const imgChnage = (e) => {
    setImgHolder(e.target.files[0]);
  };
  const inputHandler = async () => {
    const formData = new FormData();
    formData.append("file", imgHolder);

    await getApi
      .post("/hariBaba/api/comingImg", formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("done");
      });
  };

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <label for="">Choose a Upcoming items</label>
      <input
        className="dsdsad"
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={imgChnage}
      />

      <input
        className="dsdsad"
        placeholder=""
        type="text"
        onChange={handleInput}
      />

      <input
        className="dsdsad"
        placeholder=""
        type="text"
        onChange={handleInput}
      />

      <input
        className="dsdsad"
        placeholder=""
        type="text"
        onChange={handleInput}
      />

      <input type="button" onClick={inputHandler} />
    </>
  );
};

export default AdminComingSoon;
