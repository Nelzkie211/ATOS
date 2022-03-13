var template = require('../views/template-main')
var test_data = require('../model/test-data')

exports.get = function(req, res){
  var teamlist = test_dat.teamlist
  var strTeam = "", i = 0
  for (i = 0; i<teamlist.count;){
    strTeam = strTeam + '<li>' + teamlist.team[i].country + '</li>'
    i = i+1
  }
  strTeam = '<ul>' + strTeam + '</ul>'
  res.writeHead(200, {'Content-Type': 'test/html'})
  res.write(
    template.build("test web page on nodejs")
  )
  res.end()
}