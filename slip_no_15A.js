var fs = require('fs')
function countOccurences(string, word) {
    return string.split(word).length - 1;
}
var text = fs.readFileSync('sam.txt', 'utf8');
var count = countOccurences(text, "samarth"); 
if(count==0){
    console.log("not found")
}else{
console.log(count);
}
 