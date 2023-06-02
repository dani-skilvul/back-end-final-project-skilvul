const Tips = require("../models").Tips;
const { nanoid } = require("nanoid");

const addTipsController = async (req, res) => {
  try {
    const id = "tips-" + nanoid(4);
    const { judul, isi } = req.body;

    // validasi: jika user tidak mengirimkan data tips
    if (!judul || !isi) {
      return res.status(400).json({
        status: "error",
        message: "Semua data judul dan isi harus diisi",
      });
    }

    // buat objek new tips
    const newTips = {
      id,
      judul,
      isi,
    };

    // proses memasukkan data
    await Tips.create(newTips);

    // berikan response success
    return res.status(201).json({
      status: "success",
      message: "Tips berhasil dibuat",
      data: {
        tipsId: id,
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

const getTipsController = async (req, res) => {
  try {
    // proses mengambil semua data tips
    const tips = await Tips.findAll();

    // berikan response success
    return res.json({
      status: "success",
      message: "Berhasil mengambil semua tips",
      data: {
        tips,
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

const getTipsByIdController = async (req, res) => {
  try {
    // ambil id dari req.params.id
    const id = req.params.id;

    // cari data berdasarkan id
    const tips = await Tips.findOne({
      where: {
        id: id,
      },
    });

    // validasi: jika tips tidak ditemukan
    if (!tips) {
      // berikan response error
      return res.status(404).json({
        status: "error",
        message: "Tips tidak ditemukan",
      });
    }

    // berikan response success
    return res.json({
      status: "success",
      message: "Berhasil mengambil satu tips",
      data: {
        tips,
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

const editTipsByIdController = async (req, res) => {
  try {
    // mengambil id dari req.params
    const id = req.params.id;
    const judul = req.body.judul;
    const isi = req.body.isi;

    // cari tips berdasarkan id
    const tips = await Tips.findOne({
      where: {
        id: id,
      },
    });

    // validasi: jika data tips yang dicari tidak ada
    if (!tips) {
      // berikan response error
      return res.status(404).json({
        status: "error",
        message: "Tips tidak ditemukan",
      });
    }

    // membuat object tips baru
    const newTips = {
      judul: judul ? judul : tips.judul,
      isi: isi ? isi : tips.isi,
    };

    // proses update
    await Tips.update(newTips, {
      where: {
        id: id,
      },
    });

    // berikan response success
    return res.json({
      status: "success",
      message: "Tips berhasil dirubah",
    });
  } catch (error) {
    // berikan response error
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteTipsByIdController = async (req, res) => {
  try {
    // mengambil id dari req.params.id
    const id = req.params.id;

    // cari data berdasarkan id
    const tips = await Tips.findOne({
      where: {
        id: id,
      },
    });

    // validasi: jika data tips tidak ditemukan
    if (!tips) {
      return res.status(404).json({
        status: "error",
        message: "Tips tidak titemukan",
      });
    }

    // proses hapus
    await Tips.destroy({
      where: {
        id: id,
      },
    });

    // berikan response success
    return res.json({
      status: "success",
      message: "Tips berhasil dihapus",
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
  addTipsController,
  getTipsController,
  getTipsByIdController,
  editTipsByIdController,
  deleteTipsByIdController,
};
