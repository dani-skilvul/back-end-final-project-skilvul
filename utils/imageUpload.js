const axios = require("axios");

const uploadToImgBB = async (filePath) => {
  try {
    const image = fs.readFileSync(filePath);

    const formData = new FormData();
    formData.append("key", "46d5f93d3e02ce9921ab90d1633fe68f");
    formData.append("image", image);

    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    const imageUrl = response.data.data.url;
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    throw error;
  }
};

module.exports = uploadToImgBB;
