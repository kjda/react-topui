/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	render: function(){
		return this.transferPropsTo(
        	<h1 className="topcoat-navigation-bar__title">{this.props.title}</h1>
		);
	}
});