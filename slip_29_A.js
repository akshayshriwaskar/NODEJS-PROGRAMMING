// slip no 13 Area of rectangle Using User module

var http = require('http');
var arearrect = require('./rect');

var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter The length : ', (l) => {
    rl.question('Enter The breath :  ', (b) => {

        var result = arearrect(l, b);

        console.log(`Area Of Rectangle is : ${result}`);
        rl.close();

        http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("Area Of Rectangle is : " + result);
            res.end();
        }).listen(8080);
    });

});





