const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const newsRoute = require("./routes/newsRoute");
const tipsRoute = require("./routes/tipsRoute");
const db = require("./config/db");
const dotenv = require("dotenv");

const app = express();
const port = 3030;

// konfigurasi library
dotenv.config();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRoute);
app.use(newsRoute);
app.use(tipsRoute);

// cek koneksi db
(async () => {
  try {
    await db.authenticate();
    console.log("Koneksi terhubung");
  } catch (error) {
    console.log(error);
  }
})();

app.listen(port, () => {
  console.log("Server berjalan...");
});
