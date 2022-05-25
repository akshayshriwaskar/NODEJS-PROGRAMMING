var fs = require('fs'); 
filePath = process.argv[2]; 
File_sam = fs.readFileSync('./sam.txt'); 
to_string = File_sam.toString(); 
lines = to_string.split("\n"); 
console.log('No of lines is : ' + lines.length);