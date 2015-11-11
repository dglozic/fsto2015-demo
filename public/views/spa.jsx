'use strict';

var React = require('react');
var Router = require('react-router');
var Nav = require('./nav.jsx');

module.exports = React.createClass({

  render: function render() {
    return (
    	<div>
        <Nav {...this.props}/>    	
        <Router.RouteHandler {...this.props}/>
      </div>
    );
  }
});