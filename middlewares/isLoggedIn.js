const jwt = require("jsonwebtoken");

function isLoggedIn(req, res, next) {
  const token = req.cookies.token;
  console.log("token", token);
  if (!token) {
    return res.send({ loginStatus: false });
  }
  try {
    const verify = jwt.verify(token, "JWT_SECRET");
    if (verify.type === "user") {
      res.status(200).send({ loginStatus: true });
    }
  } catch (ex) {
    res.status(400).send({ loginStatus: false });
  }
}
module.exports = isLoggedIn;
