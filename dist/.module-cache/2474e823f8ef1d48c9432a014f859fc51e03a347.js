/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	render: function(){
		return this.transferPropsTo( 
			React.DOM.span( {className:"icomatic icon"}, this.props.name)
		);
	}
});
