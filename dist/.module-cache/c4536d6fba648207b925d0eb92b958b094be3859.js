/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	getDefaultProps: function(){
		return {
			value: null
		};
	},


	render: function(){
		return (React.DOM.span( {className:"topcoat-notification"}, 
			this.props.value
			)
		);
	}
});