const db = require("../DataBase/DbConnection");

const getCategory = async (req, res) => {
  try {
    await db.query("SELECT * FROM categories", (err, result) => {
      if (err) {
        console.log("Error Of the Try" + err);
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.log(`The Error Is ${error}`);
  }
};
module.exports = getCategory;
