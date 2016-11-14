var React = require("react");
var ReactDOM = require('react-dom');
var axios = require('axios');
var routes = require('./config/routes');

// sass
require("./sass/main.scss");

// render
ReactDOM.render(
  routes,
  document.getElementById('app')
);
