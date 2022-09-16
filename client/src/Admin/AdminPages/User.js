import React, { useContext, useState } from "react";
import { ContexStore } from "../../ContexStore/ContexStore";
import AdminNav from "../AdminComponents/AdminNav";
import UserCSS from "../AdminCSS/User.module.css";
import Skeleton from "react-loading-skeleton";
import Check from "../AdminComponents/Check";
const User = () => {
  Check();
  const { alluser } = useContext(ContexStore);
  const [loading, setloading] = useState(true);
  setTimeout(() => {
    setloading(false);
  }, 1500);

  let emailArray = [];
  for (let i = 0; i < alluser.length; i++) {
    emailArray.push(alluser[i].email);
  }
  return (
    <>
      <AdminNav />
      <div style={{ background: "#fff" }}>
        <div className={UserCSS.Userheading}>
          <p>All User Of Suryaghat library</p>
        </div>
        <div className={UserCSS.userWrapper}>
          {alluser.map((data, key) => {
            const { username, user_profile, upload_items } = data;
            return (
              <div key={key} className={UserCSS.userCard}>
                {loading ? (
                  <Skeleton circle={true} height={120} width={120} />
                ) : (
                  <img src={user_profile} alt={username} />
                )}

                <span>
                  {loading ? (
                    <Skeleton height={5} width={100} />
                  ) : (
                    <>
                      {username}&nbsp;({upload_items})
                    </>
                  )}
                </span>

                <div className={UserCSS.buttonGroup}>
                  {loading ? (
                    <Skeleton height={5} width={200} />
                  ) : (
                    <>
                      {/*<button 
                      onClick={(e) => deleteUser(user_id)}
                      >
                        Delete
                      </button>*/}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className={UserCSS.copyCon}>
          <p>
            All the User Emails of Suryaghat Library ({emailArray.length}) Emails
          </p>
          {emailArray.map((data, key) => {
            return <li key={key}> {data}</li>;
          })}
        </div>
      </div>
    </>
  );
};

export default User;
