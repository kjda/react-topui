/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	render: function(){
		return this.transferPropsTo(
			React.DOM.ul( {className:"topcoat-list__container"}, 
			this.props.children
			)
		);
	}

});