const db = require("../DataBase/DbConnection");
const UploadItem = async (req, res) => {
  const file = req.files.file;
  const filename = file.name;
  const date = new Date();
  const second = date.getTime();
  const newFilename = second + filename;

  const src = req.files.src;
  const srcName = src.name;
  const fsrc = second + srcName;

  const {
    category,
    productTitle,
    productDesc,
    subcategory,
    language,
    emotion,
    authorname,
    genre,
    google_id,
    referenceurl,
  } = req.body;

  var reference;
  if (referenceurl !== "") {
    reference = referenceurl;
  } else {
    reference = "";
  }
  var datetime = new Date();
  const dateOnly = datetime.toISOString().slice(0, 10);
  var sql =
    "INSERT INTO products (pro_title, pro_desc,cat_title,sub_cat_title,owner_name,genre_title,lang_title,emo_title,publish_date,pro_img1,src,google_id,referenceurl) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
  await db.query(
    sql,
    [
      productTitle,
      productDesc,
      category,
      subcategory,
      authorname,
      genre,
      language,
      emotion,
      dateOnly,
      newFilename,
      fsrc,
      google_id,
      reference,
    ],
    async (err, result) => {
      if (err || result.length === 0) {
        res.status(404).json({
          message: "Data not inserted",
        });
      } else {
        await file.mv("assets/upload/" + `${newFilename}`);
        await src.mv("assets/files/" + `${fsrc}`);
        res.status(200).json({
          message: "Insert Successfully",
        });
      }
    }
  );
};

const UploadImages = (req, res) => {
  const data = req.files;
  // console.log(data);
};

module.exports = { UploadItem, UploadImages };
