var protocol = require("http")

protocol.createServer(function(req,res){

  res.writeHead(200,{'Content-Type':'text/html'})
  res.end("Hello first node app...")
}).listen(8000)