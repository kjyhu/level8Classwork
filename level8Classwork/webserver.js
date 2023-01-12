var http = require("http")

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello\n")
}).listen(8081);

console.log("Server running at https://127.0.0.1:8081")
//Sammy Hu, Web Dev 7-8, Web Server
