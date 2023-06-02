const express = require("express");
const authenticateTokenMiddleware = require("../middleware/authenticateTokenMiddleware");
const {
  addNewsController,
  getNewsController,
  getNewsByIdController,
  editNewsByIdController,
  deleteNewsByIdController,
} = require("../controllers/newsController");
const uploadImageMiddleware = require("../middleware/uploadImageMiddleware");

const newsRoute = express.Router();

newsRoute.post(
  "/api/news",
  authenticateTokenMiddleware,
  uploadImageMiddleware.single("gambar"),
  addNewsController
);
newsRoute.get("/api/news", authenticateTokenMiddleware, getNewsController);
newsRoute.get(
  "/api/news/:id",
  authenticateTokenMiddleware,
  getNewsByIdController
);
newsRoute.put(
  "/api/news/:id",
  authenticateTokenMiddleware,
  uploadImageMiddleware.single("gambar"),
  editNewsByIdController
);
newsRoute.delete(
  "/api/news/:id",
  authenticateTokenMiddleware,
  deleteNewsByIdController
);

module.exports = newsRoute;
