
var request = require("request")
, LRU = require("lru-cache")
, options = { max: 500
            , length: function (n) { return n * 2 }
            , maxAge: 1000 * 60 * 5 }
, cache = LRU(options)
;

/**
 * Form the key by using <access token>@<url>
 * When there is no access token, the key will simply be @url for public shared areas
 */

exports.get = function(url, user, callback) {
	var key = url;
	
	if (user)
		key = user.id + '@' + key;
	
	var cbody = cache.get(key);
	//var cbody = null;

    if (!cbody) {
    	var options = { url: url };
    	if (user)
    		options.headers = { 'Authorization': user.token };
       request.get(options, function (err, response, body) {
          if (!err)
        	cache.set(key, body);
          callback(err, body);
       });
	}
    else
    	callback(null, cbody);
};