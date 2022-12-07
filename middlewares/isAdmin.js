const jwt = require("jsonwebtoken");

function isAdmin(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.send({ loginStatus: false });
  }
  try {
    const verify = jwt.verify(token, "JWT_SECRET");
    if (verify.isAdmin === true) {
      res.status(200).send({ isAdmin: true });
    } else if (verify.isAdmin === false) {
      res.status(200).send({ isAdmin: false });
    }
  } catch (ex) {
    res.status(400).send({ loginStatus: false });
  }
}
module.exports = isAdmin;
