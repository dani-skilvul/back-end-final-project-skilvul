const jwt = require("jsonwebtoken");

const authenticateTokenMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  // validasi: jika token tidak ada
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Harap login terlebih dahulu",
    });
  }

  // verifikasi token
  jwt.verify(token, process.env.LOGIN_TOKEN_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({
        staus: "error",
        message: "Token JWT tidak valid",
      });
    }

    //   menyimpan data payload jwt
    //   req.user = user;
    next();
  });
};

module.exports = authenticateTokenMiddleware;
