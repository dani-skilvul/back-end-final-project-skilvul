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
    return res.status(500).json({ message: error });
  }
};

const getNewsController = async (req, res) => {
  try {
    // proses ambil semua data
    const news = await News.findAll();

    // berikan response success
    return res.json({
      status: "success",
      message: "Berhasil mengambil semua data News",
      data: {
        news,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getNewsByIdController = async (req, res) => {
  try {
    // mengambil id dari req.params.id
    const id = req.params.id;

    // proses mengambil satu data
    const news = await News.findOne({
      where: {
        id,
      },
    });

    // validasi jika data yang dicari tidak ada
    if (!news) {
      // berikan response error
      return res.status(404).json({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    // merubah format waktu ke string
    const formatWaktu = news.waktu.toISOString().slice(0, 19).replace("T", " ");

    // buat object news
    const objectNews = {
      id: news.id,
      judul: news.judul,
      isi: news.isi,
      gambar: news.gambar,
      waktu: formatWaktu,
    };

    // berikan response success
    return res.json({
      status: "success",
      message: "Berhasil mengambil satu data news",
      data: {
        objectNews,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const editNewsByIdController = async (req, res) => {
  try {
    // mengambil id dari req.params.id
    const id = req.params.id;
    const { judul, isi, gambar } = req.body;

    const newNews = {
      judul,
      isi,
      gambar,
    };

    // prosess edit
    await News.update(newNews, {
      where: {
        id,
      },
    });

    // berikan response success
    return res.json({
      status: "success",
      message: "Data berhasil dirubah",
    });
  } catch (error) {}
};

const deleteNewsByIdController = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  addNewsController,
  getNewsController,
  getNewsByIdController,
  editNewsByIdController,
  deleteNewsByIdController,
};
