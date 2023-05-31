const express = require("express");
const { addNewsController } = require("../controllers/newsController");
const uploadImageMiddleware = require("../middleware/uploadImageMiddleware");

const newsRoute = express.Router();

newsRoute.post(
  "/api/news",
  uploadImageMiddleware.single("gambar"),
  addNewsController
);

module.exports = newsRoute;
