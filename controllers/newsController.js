const News = require("../models").News;
const { nanoid } = require("nanoid");
const uploadImageToImgBB = require("../utils/uploadImageToImgBB");
const dayjs = require("dayjs");
require("dayjs/locale/id");

const addNewsController = async (req, res) => {
  try {
    // mengambil data
    const id = "news-" + nanoid(4);
    const { judul, isi } = req.body;
    const waktu = dayjs().locale("id").format("DD-MMMM-YYYY HH:mm:ss");
    const gambarPath = req.file ? req.file.path : null;

    // validasi: jika user tidak mengirimkan data news lengkap
    if (!judul || !isi) {
      return res.status(400).json({
        status: "error",
        message: "Semua data judul dan isi harus diisi",
      });
    }

    let imageUrl = null;
    // validasi: jika user mengirimkan gambar
    if (gambarPath) {
      // proses upload gambar ke imgbb
      imageUrl = await uploadImageToImgBB(gambarPath);
    }

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
    // berikan response error
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const getNewsController = async (req, res) => {
  try {
    // proses ambil semua data
    const news = await News.findAll();

    // berikan response success
    return res.json({
      status: "success",
      message: "Berhasil mengambil semua news",
      data: {
        news,
      },
    });
  } catch (error) {
    // berikan response error
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
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
        message: "News tidak ditemukan",
      });
    }

    // berikan response success
    return res.json({
      status: "success",
      message: "Berhasil mengambil satu news",
      data: {
        news,
      },
    });
  } catch (error) {
    // berikan response error
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const editNewsByIdController = async (req, res) => {
  try {
    // mengambil data dari user
    const id = req.params.id;
    const judul = req.body.judul;
    const isi = req.body.isi;
    const gambarPath = req.file ? req.file.path : null;

    // cek data di db berdasarkan id
    const news = await News.findOne({
      where: {
        id,
      },
    });
    // validasi: berikan response error, ketika data yang dicari tidak ada
    if (!news) {
      return res.status(404).json({
        status: "error",
        message: "News tidak ditemukan",
      });
    }

    let imageUrl = null;
    // validasi: jika user mengirimkan gambar
    if (gambarPath) {
      // proses upload gambar ke imgbb
      imageUrl = await uploadImageToImgBB(gambarPath);
    }

    // buat object news baru
    let newNews = {
      judul: judul ? judul : news.judul,
      isi: isi ? isi : news.isi,
      gambar: imageUrl ? imageUrl : news.gambar,
    };

    // proses update
    await News.update(newNews, {
      where: {
        id,
      },
    });

    // berikan response success
    return res.json({
      status: "success",
      message: "News berhasil dirubah",
    });
  } catch (error) {
    // berikan response error
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteNewsByIdController = async (req, res) => {
  try {
    // ambil id dari req.params.id
    const id = req.params.id;

    // validasi: cari data news berdasarkan id
    const news = await News.findOne({
      where: {
        id,
      },
    });
    if (!news) {
      // berikan response error
      return res.status(404).json({
        status: "error",
        message: "News tidak ditemukan",
      });
    }

    // proses hapus
    await News.destroy({
      where: {
        id,
      },
    });

    // berikan response success
    return res.json({
      status: "success",
      message: "News berhasil dihapus",
    });
  } catch (error) {
    // berikan response error
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  addNewsController,
  getNewsController,
  getNewsByIdController,
  editNewsByIdController,
  deleteNewsByIdController,
};
