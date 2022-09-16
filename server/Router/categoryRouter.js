const categoryRouter = require("express").Router();
const getCategory = require("../Controllers/categoryController");
categoryRouter.get("/getcategory", getCategory);

module.exports = categoryRouter;
