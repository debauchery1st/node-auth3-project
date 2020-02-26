const server = require("./server/host");
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`[${Date.now()}] api listening @ [${port}]`);
});
