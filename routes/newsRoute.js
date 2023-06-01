const express = require("express");
const {
  addNewsController,
  getNewsController,
  getNewsByIdController,
  editNewsByIdController,
} = require("../controllers/newsController");
const uploadImageMiddleware = require("../middleware/uploadImageMiddleware");

const newsRoute = express.Router();

newsRoute.post(
  "/api/news",
  uploadImageMiddleware.single("gambar"),
  addNewsController
);
newsRoute.get("/api/news", getNewsController);
newsRoute.get("/api/news/:id", getNewsByIdController);
newsRoute.put(
  "/api/news/:id",
  uploadImageMiddleware.single("gambar"),
  editNewsByIdController
);

module.exports = newsRoute;
