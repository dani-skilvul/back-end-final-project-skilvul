const express = require("express");
const { addNewsController } = require("../controllers/newsController");

const newsRoute = express.Router();

newsRoute.post("/api/news", addNewsController);

module.exports = newsRoute;
