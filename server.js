var http = require('http');

http
  .createServer(function(req, res) {
    const text = "Boilermaker.Net";
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(text)
  })
  .listen(8080); //the server object listens on port 8080

console.log('Server running on port 8080');
