import React, { useState } from "react";
import model from "./model.module.css";
import TextField from "../../node_modules/@material-ui/core/TextField";
import { getApi } from "../services";

const Model = ({ close, initialItem }) => {
  const [updateItem, setUpdateItem] = useState(initialItem);
  const {
    pro_id,
    pro_title,
    owner_name,
    pro_desc,
    sub_cat_title,
    lang_title,
    emo_title,
    genre_title,
  } = updateItem;

  const handleInput = (e) => {
    setUpdateItem({ ...updateItem, [e.target.name]: e.target.value });
  };

  const editItem = async () => {
    await getApi
      .post("/hariBaba/api/editall", {
        pro_id,
        pro_title,
        owner_name,
        pro_desc,
        sub_cat_title,
        lang_title,
        emo_title,
        genre_title,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("data updated");
        } else {
          console.log("no data updated");
        }
      });
  };

  return (
    <>
      <div id={model.myModal} className={model.modal}>
        <div className={model.modal_content}>
          <span className={model.close} onClick={close}>
            &times;
          </span>
          <span className={model.heading}>Edit the details here</span>
          <div className={model.mainWrapper}>
            <div className={model.formControl}>
              <div>
                <p>Product Title</p>
                <TextField
                  required
                  className={model.inputTextField}
                  onChange={handleInput}
                  value={updateItem.pro_title}
                  name="pro_title"
                  label="Enter Product Title"
                  variant="filled"
                  helperText="Please do Insert all new data"
                />
              </div>
              <div>
                <p>Product Description</p>

                <TextField
                  required
                  className={model.inputTextField}
                  onChange={handleInput}
                  value={updateItem.pro_desc}
                  name="pro_desc"
                  label="Enter Product Description"
                  variant="filled"
                  helperText="Please do Insert all new data"
                />
              </div>
            </div>

            <div className={model.formControl}>
              <div>
                <p>Sub Category</p>

                <TextField
                  required
                  className={model.inputTextField}
                  onChange={handleInput}
                  value={updateItem.sub_cat_title}
                  name="sub_cat_title"
                  label="Enter Sub Category"
                  variant="filled"
                  helperText="Please do Insert all new data"
                />
              </div>
              <div>
                <p>Language</p>

                <TextField
                  required
                  className={model.inputTextField}
                  onChange={handleInput}
                  value={updateItem.lang_title}
                  name="lang_title"
                  label="Enter Language Title"
                  variant="filled"
                  helperText="Please do Insert all new data"
                />
              </div>
            </div>

            <div className={model.formControl}>
              <div>
                <p>Emotion</p>

                <TextField
                  required
                  className={model.inputTextField}
                  onChange={handleInput}
                  value={updateItem.emo_title}
                  name="emo_title"
                  label="Enter the Emotion "
                  variant="filled"
                  helperText="Please do Insert all new data"
                />
              </div>
              <div>
                <p>Genre</p>

                <TextField
                  required
                  className={model.inputTextField}
                  onChange={handleInput}
                  value={updateItem.genre_title}
                  name="genre_title"
                  label="Enter genre Title"
                  variant="filled"
                  helperText="Please do Insert all new data"
                />
              </div>
            </div>

            <div className={model.formControl}>
              <div>
                <p>Owner Name</p>

                <TextField
                  required
                  className={model.inputTextField}
                  onChange={handleInput}
                  value={updateItem.owner_name}
                  name="owner_name"
                  label="Enter One name"
                  variant="filled"
                  helperText="Please do Insert all new data"
                />
              </div>
            </div>
          </div>
          <div className={model.btnGrp}>
            <button type="button" onClick={editItem}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
