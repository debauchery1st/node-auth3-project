const configureServer = require("./configure");
const server = configureServer(require("express")());
const apiRouter = require("../api/api-router");
const apiAuth = require("../auth/auth-router");

server.use("/api", apiRouter);

server.use("/api/auth", apiAuth);

server.get("/", (req, res) => {
  res.status(200).send("ok");
});

module.exports = server;
