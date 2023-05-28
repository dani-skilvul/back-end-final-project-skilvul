const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const db = require("./config/db");

const app = express();
const port = 3030;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRoute);

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
