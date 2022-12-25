import React, { useContext, useEffect, useState } from "react";
import { ContexStore } from "../../ContexStore/ContexStore";
import db from "../firebase";
import "./Notification.css";
import Cookies from "js-cookie";
import { NavLink, useHistory } from "react-router-dom";
import { serverBaseURI } from "../file.config";

const Notification = () => {
  const history = useHistory();
  const g_id = Cookies.get("__tcphbl30__");
  const { setnotifOpen } = useContext(ContexStore);
  const [notif, setnotif] = useState([]);
  const hideNotif = () => {
    setnotifOpen(false);
  };
  const getNotif = () => {
    db.collection("Notif")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setnotif(snapshot.docs.map((data) => data.data()));
      });
  };
  useEffect(() => {
    getNotif();
  }, []);
  const onlymyNotif = notif.filter((data) => {
    return data.user_id === g_id;
  });
  const redirectURL = (id, cat_title) => {
    history.push(`/details/${id}/${cat_title}`);
    setnotifOpen(false);
    window.location.reload();
  };
  return (
    <>
      <div onClick={hideNotif} className="wrapper_notif"></div>
      <div className="_notif_con">
        <p className="notif_heading">Notifications</p>
        <>
          {onlymyNotif.map((data, key) => {
            const {
              admin_name,
              pro_img,
              pro_id,
              cat_title,
              pro_title,
              notifDate,
            } = data;

            return (
              <NavLink
                onClick={(e) => redirectURL(pro_id, cat_title)}
                to={`/details/${pro_id}/${cat_title}`}
                className="_single_notif"
              >
                <div className="_notif_left_">
                  <img src={`${serverBaseURI}/hariBaba/api/uploads/upload/${pro_img}`} alt={"verify__"} />
                </div>
                <div className="_notif_right_">
                  <span>{admin_name}</span> verified your uploaded{" "}
                  <span>{cat_title}</span>.."
                  {pro_title !== undefined
                    ? pro_title.substring(0, 20) + "..."
                    : pro_title}
                  "
                  <p>
                    <small>
                      {notifDate}
                      {key === 0 && <> &nbsp; (new) </>}
                    </small>
                  </p>
                </div>
              </NavLink>
            );
          })}
          {notif.length === 0 && (
            <div className="no_notif">
              <img height="40px" width="40px" src="/Images/loading.jpg" />
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default Notification;
