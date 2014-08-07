/** @jsx React.DOM */
var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
	
	displayName: 'LinkButton',

	nav: function(){
		window.location.href = this.props.href;
		return false;
	},

	render: function(){
		return this.transferPropsTo(
			<Button onClick={this.nav}>
				{this.props.children}
			</Button>
		);
	}
	
});