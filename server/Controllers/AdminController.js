const db = require("../DataBase/DbConnection");
const { sendMail } = require("./MailController");
const fs = require("fs");
const saltRounds = 10;
const bcrypt = require("bcrypt");
const { match } = require("assert");

//get all admin
const getallAdmin = (req, res) => {
  db.query("SELECT * from admin", (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({
        message: "No Data found",
      });
    } else {
      let adminArray = [];
      for (let i = 0; i < result.length; i++) {
        adminArray.push({
          id: result[i].id,
          username: result[i].username,
          email: result[i].email,
          password: result[i].password,
          ad_id: result[i].ad_id,
          is_super: result[i].is_super,
          image: result[i].image,
        });
      }
      res.status(200).json(adminArray);
    }
  });
};
const deleteadmin = (req, res) => {
  const { single, _id } = req.body;
  db.query("DELETE from admin WHERE id = ?", [_id], (err, result) => {
    if (err) {
      return res.status(404).json({
        message: "ID  not found",
      });
    }
    fs.unlink("assets/AdminSRC/" + single, (err) => {
      if (err) {
        throw err;
      }
      return res.status(200).json({
        message: "Admin Deleted",
      });
    });
  });
};

//add admin
const addAdmin = async (req, res) => {
  const is_super = "false";
  const datetime = new Date();
  const dateOnly = datetime.toISOString().slice(0, 10);
  const { email, uid } = req.body;
  console.log(req.body);
  db.query(
    "SELECT email from admin WHERE email = ?",
    [email],
    (err, resultselect) => {
      if (err || resultselect.length === 1) {
        res.status(404).json({
          message: "Email already exist",
        });
      } else {
        db.query(
          "INSERT into admin (email ,ad_id,is_super,joined_on) VALUES(?,?,?,?)",
          [email, uid, is_super, dateOnly],
          async (err, resultinsert) => {
            if (err) {
              throw err;
            } else {
              const today = new Date();
              const date =
                today.getFullYear() +
                "-" +
                (today.getMonth() + 1) +
                "-" +
                today.getDate();
              sendMail({
                to: email,
                subject: `Suryaghat Library Admin Request ${date}`,
                html: `<p>Please click the Link given bellow : </p>
                <a href="http://localhost:3000/verifyyou/${uid}">Click here</a> 
                <br>
                <a href="http://localhost:3000/route/haribabalibrary/admin/login">Here is dashboard</a>
                `,
              });
              res.status(200).json({
                mes: "Inserted",
              });
            }
          }
        );
      }
    }
  );
};
//verification for the token
const verification = async (req, res) => {
  const { token } = req.params;

  await db.query(
    "SELECT password from admin WHERE ad_id= ?  ",
    [token],
    (err, result) => {
      if (err) {
        res.status(400).json("Invalid token");
      } else {
        if (result.length !== 0) {
          if (result[0].password === "") {
            res.status(200).json("True token");
          } else {
            res.status(201).json("already");
          }
        } else {
          res.status(502).json("not admin");
        }
      }
    }
  );
};
//sent password after clicking link
const activation = async (req, res) => {
  const { password, username } = req.body;
  const { queryString } = req.params;
  // const en_password = await bcrypt.hash(password, saltRounds);
  const adminFile = req.files.adminFile;
  const fileName = new Date().getTime() + adminFile.name;
  await db.query(
    `UPDATE  admin SET username=?, image=?, password=?   WHERE ad_id= ?`,
    [username, fileName, password, queryString],
    async (err, resultinsert) => {
      if (err) {
        throw err;
      } else {
        await adminFile.mv("assets/AdminSRC/" + fileName);

        res.status(200).json({
          mes: "Inserted",
        });
      }
    }
  );
};

//lgin
// const AdminAuth = async (req, res) => {
//   const { email, password } = req.body;
//   await db.query(
//     "SELECT * from admin WHERE email=?",
//     [email],
//     async (err, result) => {
//       if (err || result.length === 0) {
//         res.status(404).json({
//           message: "No matching Credintials",
//         });
//       } else if (result.length === 1) {
//         let a = true;
//         // const db_en_pass = Object.values(JSON.parse(JSON.stringify(result)));
//         // let comparison = await bcrypt.compare(password, db_en_pass[0].password);
//         if (a) {
//           db.query(
//             "SELECT * from admin WHERE email=?",
//             [email],
//             (err, result) => {
//               if (err) {
//                 throw err;
//               } else if (result.length === 1) {
//                 const id = Object.values(JSON.parse(JSON.stringify(result)));
//                 const { ad_id } = id[0];
//                 res.status(200).json({
//                   id: ad_id,
//                 });
//               }
//             }
//           );
//         } else {
//           res.status(404).json({
//             message: "No matching Credintials",
//           });
//         }
//       }
//     }
//   );
// };

// login for admin
const AdminAuth = async (req, res) => {
  const { email, password } = req.body;
  await db.query(
    "SELECT * from admin WHERE email=? AND password = ?",
    [email, password],
    (err, result) => {
      if (err || result.length == 0) {
        return res.status(404).json({
          message: "No matching Credintials",
        });
      }
      const id = Object.values(JSON.parse(JSON.stringify(result)));
      const { ad_id } = id[0];
      res.status(200).json({
        id: ad_id,
      });
    }
  );
};

// const changePassword = async (req, res) => {
//   const { email, password, adminid } = req.body;
//   console.log({ email, password, adminid });
//   const en_password = await bcrypt.hash(password, saltRounds);
//   db.query("SELECT email from admin Where id=?", [adminid], (err, result) => {
//     if (err) {
//       throw err;
//     } else if (result.length === 1 && result[0].email === email) {
//       db.query(
//         "UPDATE admin SET password = ? WHERE id = ? ",
//         [en_password, adminid],
//         (err, result) => {
//           if (err) {
//             res.status(404).json({
//               message: "Failed Changing password",
//             });
//           } else {
//             res.status(200).json({
//               message: "updated",
//             });
//           }
//         }
//       );
//     } else {
//       res.status(401).json({
//         message: "Credintiald not matching",
//       });
//     }
//   });
// };
const changePassword = (req, res) => {
  const { email, password, adminid } = req.body;
  db.query("SELECT email from admin WHERE id = ?", [adminid], (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).json({
        message: "Credintial not matching",
      });
    }
    if (result[0].email == email) {
      db.query(
        "UPDATE admin SET password = ? WHERE id = ? ",
        [password, adminid],
        (err, result) => {
          if (err) {
            return res.status(404).json({
              message: "Failed Changing password",
            });
          }
          return res.status(200).json({
            message: "updated",
          });
        }
      );
    }
  });
};

//send admin data..
const sendAdminData = async (req, res) => {
  const { ad_ckk } = req.body;
  const sql =
    "SELECT username,is_super, ad_id,image,email,joined_on from admin WHERE ad_id = ?";
  await db.query(sql, [ad_ckk], (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({
        message: "No admin data found",
      });
    } else {
      res.status(200).json(result);
    }
  });
};
//add banner..
const addbanner = async (req, res) => {
  const { extrakey } = req.body;
  //extrakey for deleting
  if (extrakey === "banneroperation") {
    const { addbanner, id, banner_img } = req.body;
    if (addbanner === "adding") {
      const file = req.files.file;

      const filename = new Date().getTime() + file.name;
      const { heading, desc } = req.body;
      db.query(
        "INSERT INTO banner (heading,banner_desc,banner_img) VALUES(?,?,?) ",
        [heading, desc, filename],
        async (err, result) => {
          if (err) {
            throw err;
          } else {
            file.mv("assets/AdminSRC/" + filename);
            res.status(200).json({
              mes: "Inserted",
            });
          }
        }
      );
    } else {
      db.query("DELETE from banner WHERE id=?", [id], (err, result) => {
        if (err) {
          throw err;
        } else {
          res.status(200).json(result);
          const img = `assets/AdminSRC/${banner_img}`;
          if (banner_img) {
            fs.unlink(img, function (err) {
              if (err) {
                throw err;
              } else {
                console.log("delted");
              }
            });
          }
        }
      });
    }
  } else {
    const video = req.files.videofile;
    const filenameVideo = new Date().getTime() + video.name;
    db.query(
      "INSERT into video (video) VALUES(?) ",
      [filenameVideo],
      async (err, resulvideo) => {
        if (err) {
          res.status(500).json({ mes: "Something" });
          throw err;
        } else {
          await video.mv("assets/AdminSRC/" + filenameVideo);
          res.status(200).json(resulvideo);
        }
      }
    );
  }
};

const getBanner = (req, res) => {
  db.query("SELECT * from banner", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = {
  AdminAuth,
  changePassword,
  addAdmin,
  sendAdminData,
  getallAdmin,
  deleteadmin,
  addbanner,
  getBanner,
  verification,
  activation,
};
