const router = require("express").Router();
const api = require("./api-model");

router.get("/", (req, res) => {
  res.status(200).send("Authentication using JSON Web Tokens (JWTs)");
});

router.post("/register", (req, res) => {
  req.body.username &&
    req.body.password &&
    api.add(req.body).then(newUser => {
      console.log(newUser);
    });
  //
});

router.post("/login", (req, res) => {
  // todo
});

module.exports = router;
