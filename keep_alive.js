var http = require('http');

http.createServer(function (req, res) {
  res.write(":) Prodavam corapi 3 za 100 termo");
  res.end();
}).listen(8080);
