import React, { useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ContexStore } from "../../ContexStore/ContexStore";
import { serverBaseURI } from "../../Utilities/file.config";
import db from "../../Utilities/firebase";
import "../../Utilities/StaticContents/Notification.css";

const AdminNotif = () => {
  const { setadminNotif } = useContext(ContexStore);
  const [adminNoti, setadminNoti] = useState([]);
  const getadminNotif = () => {
    db.collection("AdminNotif")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setadminNoti(snapshot.docs.map((data) => data.data()));
      });
  };

  useEffect(() => {
    getadminNotif();
  }, []);
  const hideNotifAdmin = () => {
    setadminNotif(false);
  };
  return (
    <>
      <div
        id="wrapper_admin_notif"
        onClick={hideNotifAdmin}
        className="wrapper_notif"
      ></div>
      <div className="_notif_con">
        <p className="notif_heading">Notifications</p>

        {adminNoti.map((data, key) => {
          const { category, notifDate, pro_title, user_profile, username } =
            data;
          return (
            <a
              onClick={hideNotifAdmin}
              href={`/route/haribabalibrary/admin/dashboard/notifredirect/${pro_title}`}
              className="_single_notif"
            >
              <div className="_notif_left_">
                <img src={user_profile} alt={"verify__"} />
              </div>
              <div className="_notif_right_">
                <span>{username}</span> uploaded a new &nbsp;{" "}
                <span>{category}</span>.."
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
            </a>
          );
        })}
        {adminNoti.length === 0 && (
          <div className="no_notif">
            <img
              height="40px"
              width="40px"
              src={`${serverBaseURI}/hariBaba/api/uploads/Images/loading.jpg`}
              alt="Not found"
            />
            {/* /hariBaba/api/ */}
            {/* <img height="40px" width="40px" src="/Images/loading.jpg" /> */}
          </div>
        )}
      </div>
    </>
  );
};
export default AdminNotif;
