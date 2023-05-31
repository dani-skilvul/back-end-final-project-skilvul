const multer = require("multer");

// Buat instance multer dengan konfigurasi penyimpanan file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Tentukan direktori penyimpanan file
    cb(null, "gambar/");
  },
  filename: function (req, file, cb) {
    // Tentukan nama file yang disimpan
    const fileName = Date.now() + "-" + file.originalname;

    cb(null, fileName);
  },
});

// Inisialisasi multer dengan konfigurasi penyimpanan
const upload = multer({ storage: storage });

module.exports = upload;
