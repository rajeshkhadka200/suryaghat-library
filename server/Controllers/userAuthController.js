const db = require("../DataBase/DbConnection");
const userAuthController = async (req, res) => {
  const { name, email, imageUrl, googleId } = req.body;

  await db.query(
    "SELECT * FROM users WHERE google_id= ?",
    [googleId],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        if (result.length === 0) {
          db.query(
            "INSERT INTO users  (username,email,user_profile,google_id) VALUES (?,?,?,?) ",
            [name, email, imageUrl, googleId],
            (err, result) => {
              if (err) {
                throw err;
              } else {
                res.status(200).json({
                  message: "Succesfully registered",
                });
              }
            }
          );
        } else {
          res.status(202).json({
            message: "Logged in",
          });
        }
      }
    }
  );
};
//get the user Data.
const getuserData = async (req, res) => {
  const { googleId, key, user_id } = req.body;
  if (key === "update_user_download" && user_id) {
    await db.query(
      "SELECT u_download from users Where user_id=?",
      [user_id],
      async (err, result) => {
        if (err) {
          throw err;
        } else {
          const prevDownload = result[0].u_download;
          await db.query(
            "UPDATE users SET u_download =? Where user_id=?",
            [prevDownload + 1, user_id],
            (err, result) => {
              if (err) {
                throw err;
              } else {
                res.status(200).json({
                  mes: "Updated",
                });
                console.log("updated");
              }
            }
          );
        }
      }
    );
  } else {
    await db.query(
      "SELECT * from users WHERE google_id = ?",
      [googleId],
      (err, result) => {
        if (err || result.length === 0) {
          res.status(404).json({
            message: "Did not get the data",
          });
        } else {
          res.status(200).json(result);
        }
      }
    );
  }
};

//get all the user from database :)
const getAlluser = async (req, res) => {
  await db.query("SELECT *  from users", (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({
        message: "No user found",
      });
    } else {
      res.status(200).json(result);
    }
  });
};
//delete specific user :)
const deleteUser = async (req, res) => {
  const { id } = req.body;
  await db.query("DELETE FROM users where user_id = ?", [id], (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({
        message: "Could not find the user",
      });
    } else {
      res.status(200).json({
        message: "Deleted",
      });
    }
  });
};

module.exports = { userAuthController, getuserData, getAlluser, deleteUser };
