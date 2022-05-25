var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "slipno6.txt" + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
       res.end("404 Error");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
       res.end();
  });
}).listen(8080);