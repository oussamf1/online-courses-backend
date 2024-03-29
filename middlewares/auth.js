const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return;
  }
  try {
    const verify = jwt.verify(token, "JWT_SECRET");
    if (verify.type === "user") {
      req.user = verify;
      next();
    }
  } catch (ex) {
    res.status(400).send({ loginStatus: false });
  }
}
module.exports = auth;
