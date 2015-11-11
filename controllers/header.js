
'use strict';

module.exports.get = function(req, res) {
	var settings = {
    title: req.query.title,
    selection: req.query.selection
	};

  res.render('header.dust', settings);
}