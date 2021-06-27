var http = require('http');

http
  .createServer(function(req, res) {
    res.write('<h1>Hello, Hugh!</h1>'); //write a response to the client
    res.write('<h2>Hello, Shanna!</h2>'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

console.log('Server running on port 8080');
