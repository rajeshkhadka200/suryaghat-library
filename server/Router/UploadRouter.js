const UploadRouter = require("express").Router();
const {
  UploadItem,
  UploadImages,
} = require("../Controllers/UploadItemsControllers");
UploadRouter.post("/uploadItem", UploadItem);
UploadRouter.post("/uploadimages", UploadImages);
module.exports = UploadRouter;
