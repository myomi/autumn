const express = require("express");
const app = express();

app.use(express.static("static"));
app.use(express.static("dist/js/client"));
app.use(express.static("node_modules/mithril"));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Server Runnning at http://%s:%s", host, port);
});
