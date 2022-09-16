const db = require("../DataBase/DbConnection");
const fs = require("fs");

const getAllProduct = async (req, res) => {
  try {
    await db.query(
      "SELECT * FROM products WHERE isVerified = 1",
      (err, result) => {
        res.status(200).json(result);
      }
    );
  } catch (err) {
    if (err || result.length === 0) {
      res.status(404).send({
        message: "No data Found",
      });
    }
  }
};
const getAllsearchProduct = async (req, res) => {
  await db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      res.status(404).send({
        message: "No data Found",
      });
    } else {
      res.status(200).json(result);
    }
  });
};

//get all product that are not verified..

const getAllNotifProduct = async (req, res) => {
  const { notiftitle } = req.body;
  await db.query(
    "SELECT * from products Where pro_title=? AND isVerified=0",
    [notiftitle],
    (err, result) => {
      if (err) {
        res.status(400).json({
          err: "Some thing went wrong",
        });
        throw err;
      } else {
        res.status(200).json(result);
      }
    }
  );
};

//get data in admin pannel
const getproductAdmin = async (req, res) => {
  try {
    await db.query("SELECT * FROM products ", (err, result) => {
      res.status(200).json(result);
    });
  } catch (errr) {
    if (errr || result.length === 0) {
      res.status(404).send({
        message: "No data Found",
      });
    }
  }
};

const getNewRelease = async (req, res) => {
  try {
    await db.query(
      "SELECT * FROM products WHERE isVerified = '1' ORDER BY pro_id DESC",
      (err, result) => {
        res.status(200).send(result);
      }
    );
  } catch (error) {
    if (error || result.length === 0) {
      res.status(404).send({
        message: "No data Found",
      });
    }
  }
};

const getspecificItem = async (req, res) => {
  const { id, type } = req.body;

  await db.query(
    `SELECT * from products WHERE  pro_id =  ? AND cat_title=? `,
    [id, type],
    (err, result) => {
      if (err || result.length === 0) {
        res.status(404).json({
          message: "not found",
        });
      } else {
        res.status(200).json(result);
      }
    }
  );
};

const deleteSingleData = async (req, res) => {
  const { id, AuthId, src, pro_img1 } = req.body;
  const userSql = "SELECT upload_items FROM users WHERE google_id = ? ";
  const sql = "DELETE FROM products WHERE pro_id = ?";
  await db.query(sql, [id], (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({
        message: "Not",
      });
    } else {
      res.status(200).json(result);
      db.query(userSql, [AuthId], (err, result) => {
        if (err) {
          throw err;
        } else {
          const resultArray = Object.values(JSON.parse(JSON.stringify(result)));
          const { upload_items } = resultArray[0];
          const resultArrays = upload_items - 1;
          db.query(
            "UPDATE users SET upload_items = ? WHERE google_id = ?",
            [resultArrays, AuthId],
            async (err, result) => {
              if (err) {
                throw err;
              } else {
                const file = `assets/files/${src}`;
                const img = `assets/upload/${pro_img1}`;
                // const file = `../client/public/files/${src}`;
                // const img = `../client/public/upload/${pro_img1}`;

                fs.unlink(file, function (err) {
                  if (err) {
                    throw err;
                  }
                });
                fs.unlink(img, function (err) {
                  if (err) {
                    throw err;
                  }
                });
              }
            }
          );
        }
      });
    }
  });
};

const deletebyadmin = async (req, res) => {
  const { id, src, pro_img1, google_id, isVerified } = req.body;
  await db.query(
    "DELETE from products WHERE pro_id = ?",
    [id],
    async (err, result) => {
      if (err || result.length === 0) {
        res.status(400).json({
          message: "Not found",
        });
      } else {
        const file = `assets/files/${src}`;
        const img = `assets/upload/${pro_img1}`;
        // const file = `../client/public/files/${src}`;
        // const img = `../client/public/upload/${pro_img1}`;
        fs.unlink(file, function (err) {
          if (err) {
            throw err;
          }
        });
        fs.unlink(img, function (err) {
          if (err) {
            throw err;
          }
        });
        res.status(200).json({
          mes: "deleted",
        });
        if (isVerified === 1) {
          await db.query(
            "SELECT upload_items from users WHERE google_id=?",
            [google_id],
            async (err, result) => {
              if (err) {
                throw err;
              } else {
                var upload_count = result[0].upload_items;
                db.query(
                  "UPDATE users set upload_items=? WHERE google_id=? ",
                  [upload_count - 1, google_id],
                  (err, result) => {
                    if (err) {
                      throw err;
                    } else {
                      console.log("updated and deleted");
                      res.status(200).json({
                        message: "Deleted",
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    }
  );
};
//verify the product :)
const verifyProduct = async (req, res) => {
  const { id, google_id } = req.body;
  await db.query(
    "UPDATE  products SET isVerified = 1 WHERE pro_id = ?",
    [id],
    async (err, result) => {
      if (err || result.length === 0) {
        res.status(400).json({
          message: "Product Not Found",
        });
      } else {
        await db.query(
          "SELECT upload_items from users WHERE google_id=?",
          [google_id],
          async (err, result) => {
            if (err) {
              throw err;
            } else {
              var upload_count = result[0].upload_items;
              db.query(
                "UPDATE users set upload_items=? WHERE google_id=?",
                [upload_count + 1, google_id],
                (err, result) => {
                  if (err) {
                    throw err;
                  } else {
                    res.status(200).json({
                      message: "Verified",
                    });
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};
//edit product
const editItem = async (req, res) => {
  const { editId, google_id } = req.body;

  const itemDetail = "SELECT * FROM products WHERE pro_id = ?";
  await db.query(itemDetail, [editId], (err, result) => {
    if (err || result.length === 0) {
      res.status(404).json({
        message: "Not",
      });
    } else {
      const pro_g_id = result[0].google_id;
      if (google_id === pro_g_id) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Not",
        });
      }
    }
  });
};

const editItemFull = async (req, res) => {
  const {
    pro_id,
    pro_title,
    owner_name,
    pro_desc,
    sub_cat_title,
    lang_title,
    emo_title,
    genre_title,
  } = req.body;

  const itemDetail =
    "UPDATE products SET pro_title = ?, pro_desc = ?, sub_cat_title = ? , owner_name = ?, genre_title = ?, lang_title = ?, emo_title = ? WHERE pro_id = ?";
  await db.query(
    itemDetail,
    [
      pro_title,
      pro_desc,
      sub_cat_title,
      owner_name,
      genre_title,
      lang_title,
      emo_title,
      pro_id,
    ],
    (err, result) => {
      if (err || result.length === 0) {
        res.status(404).json({
          message: "Not",
        });
      } else {
        res.status(200).json({
          message: "Product Updated",
        });
      }
    }
  );
};
const ratingItem = async (req, res) => {
  const { pro_id, rating } = req.body;
  await db.query(
    "UPDATE products SET pro_rating = ? WHERE pro_id=?",
    [rating, pro_id],
    (err, result) => {
      if (err) {
        res.status(404).json({
          mes: "Something went Wrong",
        });
        throw err;
      } else {
        res.status(200).json({
          mes: "rated successfully",
        });
      }
    }
  );
};

const trackViews = async (req, res) => {
  const { id } = req.body;
  await db.query(
    "SELECT views FROM products WHERE pro_id= ? ",
    [id],
    (err, result) => {
      if (!err || result.length > 0) {
        const pastView = Object.values(JSON.parse(JSON.stringify(result)));
        const { views } = pastView[0];
        if (views) {
          db.query(
            "UPDATE products SET views = ? WHERE pro_id = ?",
            [views + 1, id],
            (err, result) => {
              if (!err) {
                res.status(200).json({
                  message: "Increased",
                });
              } else {
                throw err;
              }
            }
          );
        }
      } else {
        throw err;
      }
    }
  );
};

const verifyeditor = (req, res) => {
  const date = new Date();
  const second = date.getTime();
  const { pro_id, checkQuery } = req.body;
  if (checkQuery === "firstset") {
    db.query(
      "UPDATE products SET iseditor = 1, editortime = ? WHERE pro_id = ?",
      [second, pro_id],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          res.status(200).json({
            message: "successfully updated",
          });
        }
      }
    );
  } else {
    db.query(
      "UPDATE products SET iseditor = 0,editortime = '' WHERE pro_id = ? ",
      [pro_id],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          res.status(200).json({
            message: "successfully updated",
          });
        }
      }
    );
  }
};

module.exports = {
  getAllsearchProduct,
  getAllNotifProduct,
  getNewRelease,
  getspecificItem,
  getAllProduct,
  deleteSingleData,
  deletebyadmin,
  verifyProduct,
  getproductAdmin,
  editItemFull,
  editItem,
  ratingItem,
  trackViews,
  verifyeditor,
};
