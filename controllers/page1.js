
'use strict';

module.exports.get = function(req, res) {
	var settings = {
    title: 'FSTO 2015 Demo',
    name: 'Home',
    selection: 'header-home'
	};

  res.render('home.dust', settings);
}