var http = require('http');// handle http modüle

http.createServer(function (req, res) { //creates server app and handles request and response params
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); // .listen must be added
