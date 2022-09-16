import axios from "axios";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { toast, ToastContainer } from "react-toastify";
import { serverBaseURI } from "../../Utilities/file.config";
import UserCSS from "../AdminCSS/User.module.css";

const Card = ({ id, username, email, image, is_super, singleImg }) => {
  const [loading, setloading] = useState(true);
  setTimeout(() => {
    setloading(false);
  }, 1500);

  const handleDeleteAdmin = (_id, single) => {
    if (window.confirm(`Do You want to Delete ${username}`)) {
      axios
        .post("/hariBaba/api/admin/deleteadmin", {
          single,
          _id,
        })
        .then(() => {
          toast.success("Deleted Successfully");
          window.location.reload();
        });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={UserCSS.userCard}>
        {loading ? (
          <Skeleton circle={true} height={120} width={120} />
        ) : (
          <img
            style={{ objectFit: "cover" }}
            src={
              image
                ? image
                : `${serverBaseURI}/hariBaba/api/uploads/Images/user.png`
            }
            alt={"admin"}
          />
        )}
        <span style={{ fontSize: "12px", padding: "10px 0" }}>
          {loading ? (
            <Skeleton height={5} width={100} />
          ) : (
            <>
              id : {id} &nbsp; <br />
              username :{" "}
              {username !== undefined
                ? username.substring(0, 15) + "..."
                : username}
              <br />
              Email : {email} <br />
            </>
          )}
        </span>

        <div className={UserCSS.buttonGroup}>
          {loading ? (
            <Skeleton height={5} width={200} />
          ) : (
            <>
              <button
                style={{
                  background: is_super === "true" ? "grey" : "",
                  cursor: is_super === "true" ? "not-allowed" : "",
                }}
                disabled={is_super === "true"}
                onClick={(e) => {
                  handleDeleteAdmin(id, singleImg);
                }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
