/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	getDefaultProps: function(){
		return {
			value: null
		};
	},


	render: function(){
		return (<span className="topcoat-notification">
			{this.props.value}
			</span>
		);
	}
});