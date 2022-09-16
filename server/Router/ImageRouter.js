const ImageRouter = require("express").Router();
const {
  imageUploader,
  fetchimageUploader,
  deleteimg,
  getVedio,
  uploadmultipleAds,
  fetchmulBanner,
  deleteinnerBanner,
} = require("../Controllers/ImageController");

ImageRouter.post("/img/multipleimages", imageUploader);
ImageRouter.get("/img/fetchmultipleimages", fetchimageUploader);
ImageRouter.post("/img/deleteimg", deleteimg);
ImageRouter.get("/img/getVedio", getVedio);
ImageRouter.post("/img/uploadmultipleAds", uploadmultipleAds);
ImageRouter.get("/img/fetchmulBanner", fetchmulBanner);
ImageRouter.post("/img/deleteinnerbanner", deleteinnerBanner);

module.exports = ImageRouter;
