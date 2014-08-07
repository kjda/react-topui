/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	
	displayName: 'NavBar',

	render: function(){
		var cls = 'topcoat-navigation-bar';
		return this.transferPropsTo(
			<div className={cls}>
			{this.props.children}
			</div>
		);
	}

});