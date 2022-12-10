import React, { useContext } from "react";
import { ContexStore } from "../../ContexStore/ContexStore";
import "../AdminCSS/verImg.css";
import AdminNav from "../AdminComponents/AdminNav";
import Check from "../AdminComponents/Check";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverBaseURI } from "../../Utilities/file.config";
import { useHistory } from "react-router-dom";
import { getApi } from "../../services";

const VerifyImages = () => {
  const { images } = useContext(ContexStore);
  // Check();
  const unverified = images.filter((data) => {
    return data.isverified === 0;
  });

  const fireverify = (id, image_name) => {
    getApi
      .post("/hariBaba/api/img/deleteimg", {
        id,
        image_name,
        key: "verify",
      })
      .then((response) => {
        toast.success("Images Verified Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
  };
  const verifyAll = () => {
    getApi
      .post("/hariBaba/api/img/deleteimg", {
        key: "verifyall",
      })
      .then((res) => {
        toast.success("All Images Verified Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
  };
  const deleteIMG = (id, image_name) => {
    getApi
      .post("/hariBaba/api/img/deleteimg", {
        id,
        image_name,
      })
      .then((res) => {
        toast.success("Image Deleted");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
  };
  let disabled = false;
  if (unverified.length === 0) {
    disabled = true;
  }
  return (
    <>
      <ToastContainer />
      <AdminNav />
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        <div className="veriBlok">
          <span>All the unverified Images Uploaded by users.</span>
          <div className="ver_blk_grp">
            <button
              style={{
                background: disabled ? "grey" : "",
                cursor: disabled ? "not-allowed" : "",
              }}
              disabled={disabled}
              onClick={verifyAll}
              className="button"
            >
              Verify All
            </button>
          </div>
        </div>
        {unverified.length === 0 && (
          <p className="no_mesg">No Images to verify</p>
        )}
        <div className="holderV_i">
          {unverified.map((data, key) => {
            const { image_name, id } = data;
            return (
              <div className="i_card">
                <div className="i_holder_ver">
                  <img
                    src={`${serverBaseURI}/hariBaba/api/uploads/ImageUpload/${image_name}`}
                    alt="verify"
                  />
                  {/* <img src={`/ImagesUpload/${image_name}`} alt="verify" /> */}
                </div>
                <div className="btnVer_grp">
                  <button
                    className="button"
                    onClick={(e) => fireverify(id, image_name)}
                  >
                    Verify
                  </button>
                  <button
                    style={{
                      background: "rgba(255, 0, 0, 0.459)",
                    }}
                    className="button"
                    onClick={(e) => deleteIMG(id, image_name)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VerifyImages;
