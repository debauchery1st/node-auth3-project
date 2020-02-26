const router = require("express").Router();
const api = require("../api/api-model");

router.get("/", (req, res) => {
  res.status(200).send("Authentication using JSON Web Tokens (JWTs)");
});

router.post("/register", (req, res) => {
  (req.body.username &&
    req.body.password &&
    api
      .add(req.body)
      .then(newUser =>
        api.findById(newUser[0]).then(nu => res.status(200).json(nu))
      )
      .catch(({ name, message, stack }) =>
        res.status(400).json({ name, message, stack })
      )) ||
    res.status(400).json({ message: "username and password required." });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  // todo
});

module.exports = router;
