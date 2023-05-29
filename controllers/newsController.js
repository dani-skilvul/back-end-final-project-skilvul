const News = require("../models").News;
const { nanoid } = require("nanoid");

const addNewsController = async (req, res) => {
  try {
    // mengambil data
    const id = nanoid(6);
    const { judul, isi } = req.body;
    // mendapatkan waktu saat ini di Jakarta
    const now = new Date();
    const jakartaOffset = 7; // Jakarta offset: GMT+7
    const utcOffset = now.getTimezoneOffset() / 60;
    const jakartaTime = new Date(
      now.getTime() + (jakartaOffset - utcOffset) * 60 * 60 * 1000
    );

    // validasi: jika user tidak mengirimkan data news lengkap
    if (!judul || !isi) {
      return res.status(400).json({
        status: "error",
        message: "Mohon untuk semua data judul, isi, dan waktu harus diisi",
      });
    }

    // buat object news
    const news = {
      id,
      judul,
      isi,
      waktu: jakartaTime,
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
