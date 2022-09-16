const authRouter = require("express").Router();
const {
  userAuthController,
  getuserData,
  getAlluser,
  deleteUser,
} = require("../Controllers/userAuthController");

authRouter.post("/auth", userAuthController);
authRouter.post("/senduserData", getuserData);
authRouter.get("/getalluser", getAlluser);
authRouter.post("/deleteuser", deleteUser);

module.exports = authRouter;
