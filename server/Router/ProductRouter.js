const ProductRouter = require("express").Router();
const {
  getNewRelease,
  getspecificItem,
  getAllProduct,
  deleteSingleData,
  deletebyadmin,
  verifyProduct,
  getproductAdmin,
  editItem,
  editItemFull,
  ratingItem,
  trackViews,
  verifyeditor,
  getAllNotifProduct,
  getAllsearchProduct,
} = require("../Controllers/ProductController");
ProductRouter.get("/product", getNewRelease);
ProductRouter.get("/productadmin", getproductAdmin);
ProductRouter.post("/showspecific", getspecificItem);
ProductRouter.get("/allitems", getAllProduct);
ProductRouter.post("/delete", deleteSingleData);
ProductRouter.post("/deletebyadmin", deletebyadmin);
ProductRouter.post("/verifyproduct", verifyProduct);
ProductRouter.post("/edit", editItem);
ProductRouter.post("/editall", editItemFull);
ProductRouter.post("/itemrating", ratingItem);
ProductRouter.post("/views", trackViews);
ProductRouter.post("/verifyeditor", verifyeditor);
ProductRouter.post("/allnotifproduct", getAllNotifProduct);
ProductRouter.get("/getAllsearchProduct", getAllsearchProduct);

module.exports = ProductRouter;
