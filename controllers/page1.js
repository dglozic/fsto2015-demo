
'use strict';

var crequest = require("../lib/cached_request");

module.exports.get = function(req, res) {
	var settings = {
    title: 'FSTO 2015 Demo',
    name: 'Home',
    selection: 'header-home'
	};

	var headerUrl = "http://"+req.headers.host+"/header?selection=header-home&title="+settings.title;
  
  crequest.get(headerUrl, null, function (err, body) {
  	if (err)
  		console.log(err);
  	settings.header = body;
  	res.render('home.dust', settings);
	});
}