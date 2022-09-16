const db = require("../DataBase/DbConnection");
const getEmotion = async (req, res) => {
  await db.query("SELECT * FROM emotions", (err, result) => {
    if (err) {
      res.status(404).send({
        message: "No data found",
      });
    } else {
      res.status(200).send(result);
    }
  });
};

const getGenres = async (req, res) => {
  await db.query("SELECT * from genres", (err, result) => {
    if (err) {
      res.status(404).send({
        message: "No data found",
      });
    } else {
      res.status(200).send(result);
    }
  });
};
const getlanguages = async (req, res) => {
  await db.query("SELECT * from languages", (err, result) => {
    if (err) {
      res.status(404).send({
        message: "No data found",
      });
    } else {
      res.status(200).send(result);
    }
  });
};

const getsubcate = async (req, res) => {
  await db.query("SELECT * from sub_categories", (err, result) => {
    if (err) {
      res.status(404).send({
        message: "No data found",
      });
    } else {
      res.status(200).send(result);
    }
  });
};

//top ratings..
const getTopRatingData = async (req, res) => {
  await db.query(
    "SELECT * FROM products WHERE isVerified = '1' ORDER BY pro_rating DESC ",
    (err, result) => {
      if (err) {
        res.status(404).json({
          errorMessage: "Data Not Found ",
        });
      } else {
        res.status(200).json(result);
      }
    }
  );
};

//send all product to frobtend
const getFilterData = async (req, res) => {
  const { title, tablename } = req.body;
  await db.query(
    `SELECT * from products WHERE ${tablename} = ? `,
    [title],
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

module.exports = {
  getEmotion,
  getGenres,
  getlanguages,
  getsubcate,
  getFilterData,
  getTopRatingData,
};
