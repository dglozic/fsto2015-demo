
'use strict';

module.exports.get = function(req, res) {
	var settings = {
    title: 'Page 2 - FSTO 2015 Demo',
    name: 'Page 2',
    selection: 'header-page2'
	};

  res.render('page2.dust', settings);
}