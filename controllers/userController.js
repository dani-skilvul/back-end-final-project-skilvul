const User = require("../models").User;
const bcrypt = require("bcrypt");

const registerUserController = async (req, res) => {
  try {
    const { email, nama, password, confPassword } = req.body;

    // validasi: data harus terisi semua
    if (!email || !nama || !password || !confPassword) {
      // berikan response error
      return res.status(400).json({
        status: "error",
        message:
          "Semua data email, nama, password, dan confPassword harus diisi",
      });
    }

    // validasi: jika password != confPassword
    if (password !== confPassword) {
      // berikan reponse error
      return res.status(400).json({
        status: "error",
        message: "password dan confPassword harus sama",
      });
    }

    // validasi: cek apakah email sudah digunakan
    const cekEmail = await User.findOne({
      where: {
        email,
      },
    });
    if (cekEmail) {
      return res.status(400).json({
        status: "error",
        message: "Email sudah digunakan",
      });
    }

    // hashing password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // buat object newUser
    const newUser = {
      email,
      nama,
      password: hashPassword,
    };

    // proses insert user
    await User.create(newUser);

    // berikan response success
    return res.json({
      status: "success",
      message: "Berhasil register",
      data: {
        email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUserController };
