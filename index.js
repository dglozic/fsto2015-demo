/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2015 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

// make `.jsx` file requirable by node
require('node-jsx').install();

var path = require('path')
, express = require('express')
, renderer = require('react-engine')
, compress = require("compression")
, dust = require('dustjs-linkedin')
, helpers = require('dustjs-helpers')
, cons = require('consolidate');

var page1 = require('./controllers/page1');
var page2 = require('./controllers/page2');
var spa = require('./controllers/spa');
var header = require('./controllers/header');

var app = express();

app.set('port', process.env.PORT || 3000);

// create the view engine with `react-engine`
var engine = renderer.server.create({
  routes: require(path.normalize(__dirname + '/public/routes.jsx')),
  docType: ""
});

// set the engines
app.engine('.jsx', engine);
app.engine('.dust', cons.dust);

// set the view directory
app.set('views', __dirname + '/public/views');

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', renderer.expressView);

app.use(compress());

//expose public folder as static assets
app.use(express.static(__dirname + '/public'));

// define routes
app.get('/', page1.get);
app.get('/page2', page2.get);
app.get('/spa*', spa.get);
app.get('/header', header.get);

var server = app.listen(app.get('port'), function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
