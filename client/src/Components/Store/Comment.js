import React, { useState, useContext, useEffect } from "react";
import { ContexStore } from "../../ContexStore/ContexStore";
import "../../Styles/StoreCSS/Comment.css";
import db from "../../Utilities/firebase";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Comment = ({ pro_id }) => {
  const ad_ck = Cookies.get("__tcphblad__");
  const us_ck = Cookies.get("__tcphbl30__");
  const { userData } = useContext(ContexStore);
  const { user_profile, username } = userData;
  const [input, setInput] = useState("");
  const [triggerUpdate, settriggerUpdate] = useState(false);
  const [realComment, setrealComment] = useState([]);
  const [ID, setID] = useState("");
  const [Edit, setEdit] = useState();

  const fireComment = (e) => {
    e.preventDefault();
    if (us_ck) {
      if (input) {
        const docsId = new Date().getTime().toString();
        db.collection("Feedback").doc(docsId).set({
          timestamp: docsId,
          pro_id: pro_id,
          username: username,
          user_profile: user_profile,
          feedback: input,
        });
        toast.success("Thanks for your feedback");
        setInput("");
      }
    }
  };
  const getComment = () => {
    db.collection("Feedback")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setrealComment(snapshot.docs.map((data) => data.data()));
      });
  };

  const actual = () => {
    if (Edit) {
      db.collection("Feedback").doc(ID).update({
        feedback: Edit,
      });
    }

    setEdit("");
    settriggerUpdate(!triggerUpdate);
  };
  const editComment = (id) => {
    settriggerUpdate(!triggerUpdate);
    const wantsEdit = realComment.find((elm) => {
      return elm.timestamp === id;
    });
    setID(id);
    setEdit(wantsEdit.feedback);
  };
  const deleteComment = (timestamp) => {
    db.collection("Feedback").doc(timestamp).delete();
  };
  useEffect(() => {
    getComment();
  }, []);
  const check = () => {
    if (!us_ck) {
      toast.info("Please Login to comment");
    }
  };

  return (
    <>
      <div className="cmt_wrapper">
        <p>Leave a Comment :</p>
        {triggerUpdate ? (
          <>
            <div className="form">
              <input
                type="text"
                value={Edit}
                onChange={(e) => setEdit(e.target.value)}
              />
              <button onClick={actual}>update</button>
            </div>
          </>
        ) : (
          <form onSubmit={fireComment}>
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onClick={check}
              required
              placeholder="This content is good.."
              type="text"
              value={input}
            />
            <button required onClick={fireComment} type="submit">
              Post
            </button>
          </form>
        )}

        {realComment
          .filter((filtered) => {
            return filtered.pro_id === pro_id;
          })
          .map((data, key) => {
            const { user_profile, username, feedback, timestamp } = data;
            return (
              <>
                <div key={key} className="singleComment">
                  <div className="lftrghthold">
                    <div className="leftCmt">
                      <img src={user_profile} alt="userPic" />
                    </div>
                    <div className="rightCmt">
                      <p>{username}</p>
                      <p className="actualcmt">{feedback} </p>
                    </div>
                  </div>

                  {userData.username === data.username || ad_ck ? (
                    <div className="Cmtaction">
                      <span className="commentEdit">
                        <i
                          onClick={(e) => editComment(timestamp)}
                          className="fas fa-edit"
                        ></i>
                      </span>
                      <span className="commentEdit">
                        <i
                          onClick={(e) => deleteComment(timestamp)}
                          class="fas fa-trash-alt"
                        ></i>
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <hr className="hrClass" />
              </>
            );
          })}
        {!realComment === 0 ? (
          <img src={"/Images/loder.gif"} alt="sdsadasd" />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Comment;
