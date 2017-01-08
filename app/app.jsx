var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!applicationStyles');

$(document).foundation();

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="about" component={About}/>
				<Route path="example" component={Example}/>
				<IndexRoute component={Weather}/>
			</Route>
    </Router>,
    document.getElementById('app')
);