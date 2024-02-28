var http = require('http');

http.createServer(function (req, res) {
  res.write("Soon :)");
  res.end();
}).listen(8080);
