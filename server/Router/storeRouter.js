const storeRouter = require("express").Router();
const {
  getGenres,
  getEmotion,
  getlanguages,
  getsubcate,
  getFilterData,
  getTopRatingData,
} = require("../Controllers/storeContoller");
storeRouter.get("/store/emotion", getEmotion);
storeRouter.get("/store/genre", getGenres);
storeRouter.get("/store/language", getlanguages);
storeRouter.get("/store/subcate", getsubcate);
storeRouter.post("/store/sendall", getFilterData);
storeRouter.get("/store/topratings", getTopRatingData);

module.exports = storeRouter;
