const http = require('http');
const date = require('./date');
const requestListener = function(req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}
const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: '+ port);
console.log(date.getDate());

server.listen(port);