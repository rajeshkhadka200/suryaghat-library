const topCreatorRouter = require("express").Router();
const getCreators = require("../Controllers/ownersController");
topCreatorRouter.get("/owner", getCreators);

module.exports = topCreatorRouter;
