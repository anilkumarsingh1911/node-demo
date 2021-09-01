var http = require('http');
http.createServer(function (req, res) {
  res.write('hello from node server , 5000');
  res.end();
}).listen(5000)