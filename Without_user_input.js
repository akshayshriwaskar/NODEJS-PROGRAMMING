//factorial Using User Module with default value
var http = require('http');
var factorial = require('./fact.js');
var ans = factorial(4);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Your Ans is : " + ans);
    res.end();
}).listen(8080);

