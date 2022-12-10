// Import dependencies
// const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
require("dotenv").config();
const app = express();
// db();
app.use(express.static("../client/public"));
// app.use(
//   "/hariBaba/api/uploads",
//   express.static(path.join(__dirname, "assets"))
// );

app.use("/hariBaba/api/uploads", express.static("assets"));
const port = process.env.PORT || 3001; //set port
app.use(cors()); //cors is used to access the data sent from frontend in backend :)
app.use(express.json({ extented: false }));
app.use(fileUpload());
//app.use(bcrypt());

//route for top owners
app.use("/hariBaba/api/", require("./Router/ownerRouter"));
//route for the categories
app.use("/hariBaba/api/", require("./Router/categoryRouter"));
//route for the store Navigation.
app.use("/hariBaba/api/", require("./Router/storeRouter"));
app.use("/hariBaba/api/", require("./Router/ProductRouter"));
app.use("/hariBaba/api/", require("./Router/authRouter"));
//upload data in the product table

app.use("/hariBaba/api/", require("./Router/UploadRouter"));

//admin Auth..
app.use("/hariBaba/api/", require("./Router/AdminRoute"));
//multiple images
app.use("/hariBaba/api/", require("./Router/ImageRouter"));

app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`)); //listen to the port
