/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	render: function(){
		var cls = 'topcoat-navigation-bar';
		return this.transferPropsTo(
			<div className={cls}>
			{this.props.children}
			</div>
		);
	}

});