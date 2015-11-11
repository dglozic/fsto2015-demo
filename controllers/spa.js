
'use strict';

var crequest = require("../lib/cached_request");

module.exports.get = function(req, res) {
	var settings = {
    title: 'SPA - FSTO 2015 Demo',
    name: 'React SPA',
    selection: 'header-spa'
	};

  var headerUrl = "http://"+req.headers.host+"/header?selection=header-spa";

  crequest.get(headerUrl, null, function (err, body) {
    if (err)
      console.log(err);
    else
      settings.header = body;
    res.render(req.url, { name: settings.name }, function(err, html) {
    	if (err) {
    		settings.spa = err.message;
    		console.log(JSON.stringify(err.stack));
    	}
    	else
    		settings.spa = html;
    	res.render("spa.dust", settings); 
    });
  });
}