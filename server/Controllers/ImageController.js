const db = require("../DataBase/DbConnection");
const fs = require("fs");

const imageUploader = async (req, res) => {
  var array = [];
  const file = req.files.files;
  const text = req.body.Text[0].toLowerCase();
  const g_id = req.body.gid[0];
  if (file) {
    for (let i = 0; i < file.length; i++) {
      const date = new Date().getTime();
      var x = date + file[i].name;
      const newText = x.split(/\s/).join(""); //remove whitespaces
      await db.query(
        "INSERT INTO image (image_name,img_cate,userg_id) VALUES (?,?,?)",
        [newText, text, g_id],
        async (err1, result) => {
          if (err1) {
            throw err1;
          } else {
            await file[i].mv("assets/ImageUpload/" + newText, function (err) {
              if (err) {
                throw err;
              }
            });
          }
        }
      );
    }
  }
};

const fetchimageUploader = async (req, res) => {
  await db.query("SELECT * from image", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
};

const deleteimg = async (req, res) => {
  const { id, image_name, key } = req.body;
  if (key === "verifyall") {
    var sql = "UPDATE image SET isverified=1";
  } else {
    var sql = `UPDATE image SET isverified=1 WHERE id=${id}`;
  }

  if (key === "verify" || key === "verifyall") {
    await db.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json({
          mes: "Verified Images",
        });
      }
    });
  } else {
    await db.query("DELETE from image WHERE id =?", [id], (err, result) => {
      if (err) {
        throw err;
      } else {
        fs.unlink(`assets/ImageUpload/${image_name}`, (err) => {
          if (err) {
            throw err;
          } else {
            res.status(200).json({
              mes: "Deleted",
            });
          }
        });
      }
    });
  }
};
//throw the video in about page..

const getVedio = async (req, res) => {
  await db.query("SELECT * from video ORDER BY id DESC", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
};

//upload multiple images ads in the content page..

const uploadmultipleAds = async (req, res) => {
  const file = await req.files.imgData;
  const { inpDatatMulAds } = await req.body;
  if (file) {
    const name = new Date().getTime() + file.name;
    const newfileName = name.split(/\s/).join("");
    console.log(newfileName);
    await db.query(
      "INSERT INTO adsbanner (image_url,http) VALUES (?,?)",
      [newfileName, inpDatatMulAds],
      async (err, result) => {
        if (err) {
          throw err;
        } else {
          await file.mv("assets/ImageUpload/" + newfileName, function (err) {
            if (err) {
              throw err;
            } else {
              res.status(200).json({
                mes: "Inserted",
              });
            }
          });
        }
      }
    );
  } else throw new Error("NO Images Found");
};

//throw all the ads banner..

const fetchmulBanner = async (req, res) => {
  await db.query("SELECT * from adsbanner", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
};

const deleteinnerBanner = async (req, res) => {
  const { id, url } = req.body;
  await db.query("DELETE from adsbanner WHERE id=?", [id], (err, result) => {
    if (err) {
      res.status(404).json({
        err: "Someting went wrong",
      });
      throw err;
    } else {
      // console.log(url);
      const file = `assets/ImageUpload/${url}`;
      fs.unlink(file, function (err) {
        if (err) {
          throw err;
        } else
          res.status(200).json({
            mes: "Deleted successfully",
          });
      });
    }
  });
};

module.exports = {
  imageUploader,
  fetchimageUploader,
  deleteimg,
  getVedio,
  uploadmultipleAds,
  fetchmulBanner,
  deleteinnerBanner,
};
