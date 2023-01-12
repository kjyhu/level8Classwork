var fs = require("fs");
var data = fs.readFile("input.txt", function (err, data) {
    if (err) 
    return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended")
//Sammy Hu, Web Dev Odd 7-8, Blocking and Non Blocking Code
