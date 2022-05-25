const fs = require("fs");

let file = fs.readFileSync("sam.txt", "utf8");
let arr = file.split(/\r?\n/);
arr.forEach((line, idx)=> {
    if(line.includes("Naruto")){
    console.log((idx+1)+':'+ line);
    }
});
