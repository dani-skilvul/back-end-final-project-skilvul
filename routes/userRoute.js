const express = require("express");
const {
  registerUserController,
  loginUserController,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/api/register", registerUserController);
userRoute.post("/api/login", loginUserController);

module.exports = userRoute;
