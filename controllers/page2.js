
'use strict';

var crequest = require("../lib/cached_request");

module.exports.get = function(req, res) {
	var settings = {
    title: 'Page 2 - FSTO 2015 Demo',
    name: 'Page 2',
    selection: 'header-page2'
	};

	var headerUrl = "http://"+req.headers.host+"/header?selection=header-page2;
  
  crequest.get(headerUrl, null, function (err, body) {
  	if (err)
  		console.log(err);
  	settings.header = body;
  	res.render('page2.dust', settings);
  });
}