import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLoginStyle from "../AdminCSS/AdminLogin.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Utilities/StaticContents/Footer";
import AdminNav from "../AdminComponents/AdminNav";
import { useHistory } from "react-router-dom";
import { serverBaseURI } from "../../Utilities/file.config";
const Comingsoon = () => {
  const [adminBanner, setadminBanner] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get("/hariBaba/api/admin/getbanner").then((response) => {
      setadminBanner(response.data);
    });
  }, []);

  //state management for the inner banner
  const [multipleAds, setmultipleAds] = useState(null);
  const [inpDatatMulAds, setinpDatatMulAds] = useState("#");
  const handlemulAds = (e) => {
    setmultipleAds(e.target.files[0]);
  };

  //Upload the Image to the database
  const [imgHolder, setImgHolder] = useState();
  const [videoHolder, setvideoHolder] = useState();
  const [inputData, setInputData] = useState({
    heading: "",
    desc: "",
  });

  const { heading, desc } = inputData;
  const imgChnage = (e) => {
    setImgHolder(e.target.files[0]);
  };
  const videoChange = (e) => {
    setvideoHolder(e.target.files[0]);
  };
  const [uploadCate, setuploadCate] = useState("banner");
  const [loading, setloading] = useState(false);
  const inputHandler = async (e) => {
    e.preventDefault();
    if (uploadCate === "banner") {
      setloading(true);
      const formData = new FormData();
      formData.append("file", imgHolder);
      formData.append("heading", heading);
      formData.append("desc", desc);
      formData.append("addbanner", "adding");
      formData.append("extrakey", "banneroperation");

      await axios
        .post("/hariBaba/api/admin/addbanner", formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setloading(false);
          toast.success("Data Added Successfully");
          setInputData({
            heading: "",
            desc: "",
          });
          window.location.reload();
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    } else if (uploadCate === "video") {
      setloading(true);
      const formDataVideo = new FormData();
      formDataVideo.append("videofile", videoHolder);
      await axios
        .post("/hariBaba/api/admin/addbanner", formDataVideo, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setloading(false);
            toast.success("Video Uploaded");
            window.location.reload();
          }
        })
        .catch((err) => {
          if (err.response.status === 500) {
            setloading(false);
            toast.error("Internal Server Error");
          }
        });
    } else {
      setloading(true);
      // upload the inner banner
      const formDataAds = new FormData();
      formDataAds.append("imgData", multipleAds);
      formDataAds.append("inpDatatMulAds", inpDatatMulAds);
      console.log(multipleAds);
      await axios
        .post("/hariBaba/api/img/uploadmultipleAds", formDataAds, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.success("Successfully Added");
          window.location.reload();

          setloading(false);
        });
    }
  };
  const deletebanner = async (id, banner_img) => {
    if (window.confirm("Do you want to delete")) {
      axios
        .post("/hariBaba/api/admin/addbanner", {
          id,
          addbanner: "deleting",
          banner_img,
          extrakey: "banneroperation",
        })
        .then((response) => {
          alert("DELETED");
          window.location.reload();

          <Comingsoon />;
        });
    }
  };

  const handleOnchange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  //handle state for select tag..
  const handleSelect = (e) => {
    setuploadCate(e.target.value);
  }; //

  const checkRender = () => {
    if (uploadCate === "banner") {
      return (
        <>
          <div className={AdminLoginStyle.formControl}>
            <label>Product Title</label>
            <input
              name="heading"
              value={inputData.heading}
              onChange={handleOnchange}
              placeholder="Heading goes here"
              type="text"
              required
            />
          </div>
          <div className={AdminLoginStyle.formControl}>
            <label>Description</label>
            <textarea
              name="desc"
              value={inputData.desc}
              onChange={handleOnchange}
              placeholder="Description goes here"
              type="text"
              required
            />
          </div>

          <div className={AdminLoginStyle.formControl}>
            <label>Banner Image</label>
            <input
              accept=".jpg,.png,.jpeg,.gif"
              onChange={imgChnage}
              type="file"
              required
            />
          </div>
        </>
      );
    } else if (uploadCate === "video") {
      return (
        <>
          <div className={AdminLoginStyle.formControl}>
            <label>Choose a video File</label>
            <input
              accept=".mp4,.webm"
              onChange={videoChange}
              type="file"
              required
            />
          </div>
        </>
      );
    } else if (uploadCate === "innerBanner") {
      return (
        <>
          <div className={AdminLoginStyle.formControl}>
            <label>Choose Single Image</label>
            <input
              onChange={handlemulAds}
              accept=".jpg,.png,jpeg"
              type="file"
              required
            />
          </div>

          <div className={AdminLoginStyle.formControl}>
            <label>Enter the URl</label>
            <input
              placeholder="Enter any URL if it is, advertisement"
              onChange={(e) => {
                setinpDatatMulAds(e.target.value);
                console.log(inpDatatMulAds);
              }}
              type="text"
            />
          </div>
        </>
      );
    }
  };
  return (
    <>
      <AdminNav />
      <form onSubmit={inputHandler}>
        <div className={AdminLoginStyle.loginWrapper}>
          <div className={AdminLoginStyle.loginBox}>
            <span>Add {uploadCate} </span>
            <div className={AdminLoginStyle.formControl}>
              <label>Which you want to upload ?</label>
              <select onChange={handleSelect} required name="uploadcate">
                <option value="banner">Banner</option>
                <option value="video">Video</option>
                <option value="innerBanner">Inner Banner</option>
              </select>
            </div>
            {checkRender()}
            <div className={AdminLoginStyle.btnGroup}>
              <button
                style={{
                  background: loading && "grey",
                  cursor: loading && "not-allowed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <>
                    {" "}
                    <img
                      height="20px"
                      width="20px"
                      src={`${serverBaseURI}/hariBaba/api/uploads/Images/loading.jpg`}
                      alt="gif"
                    />{" "}
                    &nbsp; Uploading...
                  </>
                ) : (
                  "Upload"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className={AdminLoginStyle.banner}>
        {adminBanner.map((data, key) => {
          const { banner_img, id } = data;
          return (
            <div className={AdminLoginStyle.imgHolderBanner}>
              <img
                src={`${serverBaseURI}/hariBaba/api/uploads/AdminSRC/${banner_img}`}
                alt="banner"
              />
              <button
                onClick={(e) => deletebanner(id, banner_img)}
                className={AdminLoginStyle.buttonSlider}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Comingsoon;
