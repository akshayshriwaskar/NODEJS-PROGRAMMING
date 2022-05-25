var areacircum = require('./circleexp');

var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter The Number : ', r => {
    var ans=areacircum(r);
    console.log(`Your Answer Is : ${ans}`);
    rl.close();
});



