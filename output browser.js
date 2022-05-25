var http = require('http');
var circle_area = require('./circle');
var circle_circumference = require('./circle');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Area of circle is:" + circle_area.area());
    res.write("Circumference is:" + circle_circumference.circumference());
    res.end();
}).listen(8080);
console.log("Area of circle is:" + circle_area.area());
console.log("Circumference is:" + circle_circumference.circumference());
