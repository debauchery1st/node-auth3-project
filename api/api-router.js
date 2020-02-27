const router = require("express").Router();
const tokenRequired = require("../auth/restrictedMiddlewares");
const api = require("./api-model");

router.get("/", (req, res) => {
  res.status(200).send("Authentication using JSON Web Tokens (JWTs)");
});

router.get("/users", tokenRequired, (req, res) => {
  api
    .find()
    .then(users => res.status(200).json(users))
    .catch(({ name, message, stack }) =>
      res.status(400).json({ name, message, stack })
    );
});

module.exports = router;
