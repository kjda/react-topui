/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	render: function(){
		var cls = 'topcoat-navigation-bar';
		return this.transferPropsTo(
			React.DOM.div( {className:cls}, 
			this.props.children
			)
		);
	}

});