//factorial Using User Module with user input
var factorial = require('./fact.js');
var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter The Number : ', x => {
    var ans=factorial(x);
    console.log(`Your Answer Is : ${ans}`);
    rl.close();
});



