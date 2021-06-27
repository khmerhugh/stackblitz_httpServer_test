var http = require('http');

http
  .createServer(function(req, res) {
    const text = "Boilermaker.Net";
    res.write(text); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

console.log('Server running on port 8080');
