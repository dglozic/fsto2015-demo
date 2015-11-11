
'use strict';

module.exports.get = function(req, res) {
	var settings = {
    title: 'SPA - FSTO 2015 Demo',
    name: 'React SPA',
    selection: 'header-spa'
	};

  res.render(req.url, { name: settings.name }, function(err, html) {
  	if (err) {
  		settings.spa = err.message;
  		console.log(JSON.stringify(err.stack));
  	}
  	else
  		settings.spa = html;
  	res.render("spa.dust", settings); 
  });
}