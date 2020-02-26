module.exports = function(server) {
  server.use(require("helmet")());
  server.use(require("express").json());
  server.use(require("cors")());
  return server;
};
