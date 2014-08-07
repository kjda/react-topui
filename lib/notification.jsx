/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	
	displayName: 'Notification',

	getDefaultProps: function(){
		return {
			value: null
		};
	},


	render: function(){
		return (
			<span className="topcoat-notification">
			{this.props.value}
			</span>
		);
	}
});