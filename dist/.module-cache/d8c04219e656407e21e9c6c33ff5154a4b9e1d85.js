/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	render: function(){
		var title = this.props.title || this.props.children;
		return this.transferPropsTo(
        	React.DOM.h1( {className:"topcoat-navigation-bar__title", style:{textAlign: 'center'}}, title)
		);
	}
});