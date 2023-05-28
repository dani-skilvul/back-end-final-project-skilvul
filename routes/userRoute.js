const express = require("express");
const { registerUserController } = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/api/register", registerUserController);

module.exports = userRoute;
