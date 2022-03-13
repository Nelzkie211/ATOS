var url = require('url')
var fs = require('fs')

exports.get = function(req,res){
  req.requrl = url.parse(req.url, true)
  var path = req.requrl.pathname
  if(/\.(css)$/.test()){
    res.writeHead(200, {'Content-Type': 'test/css'})
    fs.readFile(__dirname + path, 'utf8', function(err, data){
      if(err) throw err
      res.write(data, 'utf8')
      req.end()
    })
  }else{
    if(path === '/' || path ==='/home'){
      require('./controllers/home').get(req,res)
    }else{
      require('./controllers/404').get(req,res)
    }
  }
}