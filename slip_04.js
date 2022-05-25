var http = require('http');
var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter The First Name : ', (name) => {
    rl.question('Enter The last Name :  ', (lname) => {

        rl.question('Enter The last Name :  ', (inputdate) => {
        var fn = name;
        var ln = lname;
        var dob = new Date(inputdate);
        var today = new Date();

        var diff = new Date(today.getTime() - dob.getTime());


        console.log(`first Name is : ${fn}`);
        console.log(`Last Name is : ${ln}`);
        console.log("Age: " + Number(diff.getUTCFullYear() - 1970));

        rl.close();
        http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("First Name is : " + fn);
            res.write("Last Name is : " + ln);
            res.end();
        }).listen(8080);
    });
});

});


