const News = require("../models").News;
const { nanoid } = require("nanoid");
const uploadToImgBB = require("../utils/imageUpload");

const addNewsController = async (req, res) => {
  try {
    // mengambil data
    const id = nanoid(6);
    const { judul, isi } = req.body;
    const waktu = new Date();
    const gambarPath = req.file.path;

    // validasi: jika user tidak mengirimkan data news lengkap
    if (!judul || !isi || !gambarPath) {
      return res.status(400).json({
        status: "error",
        message: "Mohon untuk semua data judul, isi, dan gambar harus diisi",
      });
    }

    // kirim gambar ke ImgBB
    const imageUrl = await uploadToImgBB(gambarPath);

    // buat object news
    const news = {
      id,
      judul,
      isi,
      gambar: imageUrl,
      waktu,
    };

    // proses insert data
    await News.create(news);

    // berikan response success
    return res.status(201).json({
      status: "success",
      message: "News berhasil dibuat",
      data: {
        id,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { addNewsController };
