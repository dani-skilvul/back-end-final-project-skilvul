const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");

const uploadToImgBB = async (filePath) => {
  try {
    // baca gambar
    const image = fs.readFileSync(filePath);

    // masukkan kedalam form
    const formData = new FormData();
    formData.append("key", "46d5f93d3e02ce9921ab90d1633fe68f");
    formData.append("image", image, {
      filename: path.basename(filePath),
    });

    // upload gambar ke imgbb
    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    // mengambil url gambar
    const imageUrl = response.data.data.url;

    // menghapus gambar setelah terupload
    deleteImage(filePath);

    // mengembalikan url gambar untuk disimpan di dalam database bersama data lainya
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    throw error;
  }
};

const deleteImage = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting image:", err);
      throw err;
    }
    console.log("Image deleted successfully");
  });
};

module.exports = uploadToImgBB;
