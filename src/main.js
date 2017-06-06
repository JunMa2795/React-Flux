/**
 * Created by jack on 5/23/17.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes')

// Clean URL, HTML5 push state
// Router.run(routes, Router.HistoryLocation, function(Handler){

Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});
