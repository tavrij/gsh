var express = require('express');
var app = express();
var google = require('google');
app.get('/g/', function(req, res) {
  	google.resultsPerPage = 100
	var nextCounter = 0
	var title = req.query.title;
	 
	google(title, function (err, next, links){
	  if (err) res.json(err);
	  var results = Array();
	  if (links){
	  	for (var i = 0; i < links.length; ++i) {
	    	results.push(links[i]);
	  	}
	  	res.json(results);
	  }else{
	  	res.json('[]');
	  }
	  
	})
});
 var port = process.env.PORT || 3000
 var ip = process.env.IP || "127.0.0.1";

var server = app.listen(port, function () {
  console.log('app listening at http://%s:%s', ip, port);
});