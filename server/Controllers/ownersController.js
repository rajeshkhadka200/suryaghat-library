const db = require("../DataBase/DbConnection");

const getCreators = async (req, res) => {
  try {
    await db.query("SELECT * FROM owner", (err, result) => {
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

module.exports = getCreators;
