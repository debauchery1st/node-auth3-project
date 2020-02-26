const server = require("./middleWares")(require("express")());
const apiRouter = require("../api/api-router");

server.use("/api", apiRouter);
server.get("/", (req, res) => {
  res.status(200).send("ok");
});
module.exports = server;
