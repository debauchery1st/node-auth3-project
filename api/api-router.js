const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send("Authentication using JSON Web Tokens (JWTs)");
});

module.exports = router;
