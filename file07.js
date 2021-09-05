var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application\json' })
    // res.write("hello");
    res.write("{name:anil}");
    res.end();
}).listen(8900)