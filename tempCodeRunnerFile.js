var dob = new Date(2001, 19, 04);
var today = new Date();

var diff = new Date(today.getTime() - dob.getTime());

console.log("Age: " + Number(diff.getUTCFullYear() - 1970) + " years");