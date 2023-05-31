const News = require("../models").News;
const { nanoid } = require("nanoid");

const addNewsController = async (req, res) => {
  try {
    // mengambil data
    const id = nanoid(6);
    const { judul, isi } = req.body;
    const waktu = new Date();
    // Periksa apakah file gambar diupload oleh client
    let gambar = "";
    if (req.file) {
      gambar = req.file.path; // Gunakan path file yang diupload
    }

    // validasi: jika user tidak mengirimkan data news lengkap
    if (!judul || !isi || !gambar) {
      return res.status(400).json({
        status: "error",
        message: "Mohon untuk semua data judul, isi, dan gambar harus diisi",
      });
    }

    // buat object news
    const news = {
      id,
      judul,
      isi,
      gambar,
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
