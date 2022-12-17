import React, { useState, useContext } from "react";
import { ContexStore } from "../../ContexStore/ContexStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "../../Utilities/firebase";
import "./Inserting.css";
import ContentOne from "../../Utilities/StaticContents/ContentOne";
import MainLoader from "../../Utilities/StaticContents/MainLoader";
import { getApi } from "../../services";
const Inserting = () => {
  const { userData } = useContext(ContexStore);

  const { user_id, google_id, username, user_profile } = userData;

  const [stateSelect, setstateSelect] = useState("Documents");
  const [productDetails, setproductDetails] = useState({
    productTitle: "",
    productDesc: "",
    subcategory: "",
    language: "",
    emotion: "",
    authorname: "",
    genre: "",
    referenceurl: "",
  });
  const handleChangeInput = (e) => {
    setproductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  //for button loading
  const [loading, setloading] = useState(false);
  //destructure the state to send data
  //const { category } = stateSelect;
  const {
    productTitle,
    productDesc,
    subcategory,
    language,
    emotion,
    authorname,
    genre,
    referenceurl,
  } = productDetails;

  const [imgHolder, setImgHolder] = useState();
  const imgChnage = (e) => {
    setImgHolder(e.target.files[0]);
  };

  const [srcHolder, setSrcHolder] = useState();
  const fileChange = (e) => {
    setSrcHolder(e.target.files[0]);
  };

  //handle files...
  const checkRendering = () => {
    if (stateSelect === "Audios") {
      return (
        <>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Choose the Audio thumbnail</label>
              <input
                required
                onChange={imgChnage}
                type="file"
                accept=".jpeg,.jep,.png"
              />
            </div>
            <div className="uploadIndividual">
              <label>Choose a Audio File</label>
              <input required onChange={fileChange} type="file" accept=".mp3" />
            </div>
          </div>
        </>
      );
    } else if (stateSelect === "Videos") {
      return (
        <>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Choose the Video thumbnail</label>
              <input
                required
                onChange={imgChnage}
                type="file"
                accept=".jpeg,.jep,.png"
              />
            </div>
            <div className="uploadIndividual">
              <label>Choose a video File</label>
              <input
                required
                onChange={fileChange}
                type="file"
                accept=".mp4,.webm"
              />
            </div>
          </div>
        </>
      );
    } else if (stateSelect === "Documents") {
      return (
        <>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Choose the Book thumbnail</label>
              <input
                required
                onChange={imgChnage}
                type="file"
                accept=".jpeg,.jep,.png"
              />
            </div>
            <div className="uploadIndividual">
              <label>Choose a PDF File</label>
              <input required onChange={fileChange} type="file" accept=".pdf" />
            </div>
          </div>
        </>
      );
    }
  };

  const resetData = () => {
    setproductDetails({
      productTitle: "",
      productDesc: "",
      subcategory: "",
      language: "",
      emotion: "",
      authorname: "",
      genre: "",
      referenceurl: "",
    });
    setstateSelect("Document");
  };
  //Upload the Image to the database

  const uploadData = async (e) => {
    e.preventDefault();
    document.querySelector("body").classList.add("hide");
    setloading(true);
    const formData = new FormData();
    formData.append("file", imgHolder);
    formData.append("src", srcHolder);
    formData.append("productTitle", productTitle);
    formData.append("productDesc", productDesc);
    formData.append("subcategory", subcategory);
    formData.append("language", language);
    formData.append("emotion", emotion);
    formData.append("authorname", authorname);
    formData.append("genre", genre);
    formData.append("category", stateSelect);
    formData.append("google_id", google_id);
    formData.append("referenceurl", referenceurl);

    await getApi
      .post("/hariBaba/api/uploadItem", formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const docsId = new Date().getTime().toString();
        const notifDate = new Date().toISOString().slice(0, 10);
        db.collection("AdminNotif").doc(docsId).set({
          username: username,
          user_profile: user_profile,
          pro_title: productTitle,
          timestamp: docsId,
          notifDate: notifDate,
          category: stateSelect,
        });
        toast.success("Sent, wait for verification.");
        resetData();
        setloading(false);
        document.querySelector("body").classList.remove("hide");
      })
      .catch((err) => {
        setloading(false);
        alert("No, insert");
      });
  };

  return (
    <>
      {loading && <MainLoader />}
      <ContentOne />
      <div className="formWrapper">
        <div className="uploadHeader">
          <p>Upload Contents to our online Library</p>
        </div>
        <form onSubmit={uploadData}>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Choose Category</label>
              <select
                disabled={loading}
                required
                name="stateSelect"
                onChange={(e) => {
                  setstateSelect(e.target.value);
                }}
              >
                {/*<option disabled selected value="Audio">
                  Click here
                </option>*/}
                <option selected value="Documents">
                  Document (Click to change)
                </option>
                <option value="Videos">Video</option>
                <option value="Audios">Audio </option>
              </select>
            </div>
            <div className="uploadIndividual">
              <label>Enter the Title</label>
              <input
                disabled={loading}
                name="productTitle"
                required
                value={productDetails.productTitle}
                onChange={handleChangeInput}
                type="text"
                placeholder="munamadan the true love story"
              />
            </div>
          </div>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Enter the Sub category</label>
              <input
                disabled={loading}
                name="subcategory"
                required
                value={productDetails.subcategory}
                onChange={handleChangeInput}
                type="text"
                placeholder="audio clips"
              />
            </div>
            <div className="uploadIndividual">
              <label>Enter the Language</label>
              <input
                name="language"
                required
                disabled={loading}
                value={productDetails.language}
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
                name="authorname"
                required
                value={productDetails.authorname}
                onChange={handleChangeInput}
                type="text"
                placeholder="Laxmi prasad devkota"
              />
            </div>
            <div className="uploadIndividual">
              <label>Enter Publish Date</label>
              <input
                disabled={loading}
                name="emotion"
                required
                value={productDetails.emotion}
                onChange={handleChangeInput}
                type="text"
                placeholder="65 AD/ 2000"
              />
            </div>
          </div>
          <div className="uploadFormControl">
            <div className="uploadIndividual">
              <label>Enter the Genre</label>
              <input
                disabled={loading}
                name="genre"
                required
                value={productDetails.genre}
                onChange={handleChangeInput}
                type="text"
                placeholder="pdf"
              />
            </div>
            <div className="uploadIndividual">
              <label>Enter refrence url</label>
              <input
                disabled={loading}
                name="referenceurl"
                value={productDetails.referenceurl}
                onChange={handleChangeInput}
                type="text"
                placeholder="https://www.youtube.com/watch?v=2P5X4PG"
              />
            </div>
          </div>

          <div className="uploadFormControl">
            <div id="textarea" className="uploadIndividual">
              <label>Enter the Content Description</label>
              <textarea
                disabled={loading}
                name="productDesc"
                required
                value={productDetails.productDesc}
                onChange={handleChangeInput}
                placeholder="munamadan is the great love story..."
              ></textarea>
            </div>
          </div>
          {checkRendering()}
          <div className="btnGrp_upload">
            <button disabled={loading} type="button" onClick={resetData}>
              Reset
            </button>
            <button disabled={loading} type="submit">
              {loading ? (
                <>
                  <img
                    height="20px"
                    width="20px"
                    src="/Images/loading.jpg"
                    alt="loading"
                  />{" "}
                  &nbsp; Sending...
                </>
              ) : (
                "Upload"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Inserting;
