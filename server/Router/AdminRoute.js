const AdminRoute = require("express").Router();
const {
  AdminAuth,
  changePassword,
  addAdmin,
  sendAdminData,
  getallAdmin,
  deleteadmin,
  addbanner,
  getBanner,
  verification,
  activation,
} = require("../Controllers/AdminController");
AdminRoute.post("/admin/adminauth", AdminAuth);
AdminRoute.post("/admin/changepassword", changePassword);
AdminRoute.post("/admin/addadmin", addAdmin); // add only email by super admin
AdminRoute.post("/admin/sendadmindata", sendAdminData);
AdminRoute.get("/admin/alladmin", getallAdmin);
AdminRoute.post("/admin/deleteadmin", deleteadmin);
AdminRoute.post("/admin/addbanner", addbanner);
AdminRoute.get("/admin/getbanner", getBanner);
AdminRoute.get("/admin/verification/:token", verification); //verify token
AdminRoute.post("/admin/activationclick/:queryString", activation); //save data after link is clicked

module.exports = AdminRoute;
