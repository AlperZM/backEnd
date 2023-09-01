var http = require('http');// handle http modüle

http.createServer(function (req, res) { //creates server app and handles request and response params
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); // .listen must be added

// this is same but use module
const http = require("http");
let myTime = require("./demoModule.js"); // import and hadles module
http.createServer((req,res)=>{
  res.writeHead(200,{"content-type": "text/html"});
  // access module and inside function "myTime.myDateTime()"
  res.write("The date and time are currently: " + myTime.myDateTime());
  res.end();
}).listen(8080);
