const jwt = require("jsonwebtoken");
const secrets = require("../server/secrets");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    jwt.verify(authorization, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invald Credentials" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};
