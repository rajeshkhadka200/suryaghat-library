import React, { useState, useContext, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import "../Components/Uploading Items/Inserting.css";
import { ContexStore } from "../ContexStore/ContexStore";
import Nav from "../Components/Nav/Nav";
import Footer from "../Utilities/StaticContents/Footer";
import { Redirect, useHistory, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import MainLoder from "../Utilities/StaticContents/MainLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverBaseURI } from "../Utilities/file.config";
import { getApi } from "../services";
const EditDetails = () => {
  const history = useHistory();
  const { userData } = useContext(ContexStore);
  const { username, google_id } = userData;
  const [loading, setloading] = useState(false);
  const { editId } = useParams();
  const [updatedData, setupdatedData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      getApi
        .post("/hariBaba/api/edit", {
          editId,
          google_id,
        })
        .then((res) => {
          if (res.status === 200) {
            setupdatedData(res.data[0]);
          }
        })
        .catch(() => {
          setRedirect(true);
        });
    };
    loadData();
  }, [editId]);
  const user_ck = Cookies.get("__tcphbl30__");
  const {
    pro_id,
    pro_title,
    owner_name,
    pro_desc,
    sub_cat_title,
    lang_title,
    emo_title,
    genre_title,
    referenceurl,
  } = updatedData;
  const handleChangeInput = (e) => {
    setupdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };
  const resetData = () => {
    setupdatedData({
      pro_title: "",
      owner_name: "",
      pro_desc: "",
      sub_cat_title: "",
      lang_title: "",
      emo_title: "",
      genre_title: "",
      referenceurl: "",
    });
  };
  const editItem = async (e) => {
    document.querySelector("body").classList.add("hide");
    setloading(true);
    e.preventDefault();
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
          setTimeout(() => {
            toast.success("Successfully saved the changes");
            setloading(false);
            document.querySelector("body").classList.remove("hide");
          }, 2000);
        } else {
          setTimeout(() => {
            toast.success("Error while saving the changes.");
            document.querySelector("body").classList.remove("hide");
            setloading(false);
          }, 2000);
        }
      });
  };
  if (!user_ck) {
    history.push("/");
  }
  return (
    <>
      {loading && <MainLoder></MainLoder>}
      {redirect === true && <Redirect to="/profile"></Redirect>}
      <Nav />
      <div style={{ minHeight: "100vh" }} className="formWrapper">
        <div className="uploadHeader">
          <p>Edit the details Here</p>
        </div>
        <form onSubmit={editItem}>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Enter the Title</label>
              <input
                disabled={loading}
                name="pro_title"
                required
                value={pro_title}
                onChange={handleChangeInput}
                type="text"
                placeholder="munamadan the true love story"
              />
            </div>

            <div className="uploadIndividual">
              <label>Enter refrence url</label>
              <input
                disabled={loading}
                name="referenceurl"
                value={referenceurl}
                onChange={handleChangeInput}
                type="text"
                placeholder="https://www.youtube.com/watch?v=2P5X4PG"
              />
            </div>
          </div>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Enter the Sub category</label>
              <input
                disabled={loading}
                name="sub_cat_title"
                required
                value={sub_cat_title}
                onChange={handleChangeInput}
                type="text"
                placeholder="audio clips"
              />
            </div>
            <div className="uploadIndividual">
              <label>Enter the Language</label>
              <input
                name="lang_title"
                required
                disabled={loading}
                value={lang_title}
                onChange={handleChangeInput}
                type="text"
                placeholder="Nepali"
              />
            </div>
          </div>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Enter the Author Name</label>
              <input
                disabled={loading}
                name="owner_name"
                required
                value={owner_name}
                onChange={handleChangeInput}
                type="text"
                placeholder="Laxmi prasad devkota"
              />
            </div>
            <div className="uploadIndividual">
              <label>Enter Emotion</label>
              <input
                disabled={loading}
                name="emo_title"
                required
                value={emo_title}
                onChange={handleChangeInput}
                type="text"
                placeholder="lovely"
              />
            </div>
          </div>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Enter the Genre</label>
              <input
                disabled={loading}
                name="genre_title"
                required
                value={genre_title}
                onChange={handleChangeInput}
                type="text"
                placeholder="pdf"
              />
            </div>
            <div className="uploadIndividual">
              <label>Your Personal Detail</label>
              <input
                disabled="true"
                required
                value={username}
                type="text"
                placeholder="munamadan the true love story"
              />
            </div>
          </div>

          <div className="uploadFormControl">
            <div id="textarea" className="uploadIndividual">
              <label>Enter the Content Description</label>
              <textarea
                disabled={loading}
                name="pro_desc"
                required
                value={pro_desc}
                onChange={handleChangeInput}
                placeholder="munamadan is the great love story..."
              ></textarea>
            </div>
          </div>

          <div className="btnGrp_upload">
            <button disabled={loading} onClick={resetData} type="button">
              Reset
            </button>
            <button disabled={loading} type="submit">
              {loading && (
                <>
                  <img
                    height="20px"
                    width="20px"
                    src={`${serverBaseURI}/hariBaba/api/uploads/Images/loading.jpg`}
                    alt=""
                  />{" "}
                </>
              )}
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default EditDetails;
