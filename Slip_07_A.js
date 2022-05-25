var fs = require('fs');
var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

    fs.appendFile('1.txt', '2.txt',function(err){
        if(err) throw err;
    }); 





