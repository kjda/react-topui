/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'TabBar',

	getDefaultProps: function(){
		return {
			full: false
		};
	},

	render: function(){
		
		var classSet = React.addons.classSet({
			'topcoat-tab-bar': true,
			'full': this.props.full
		});

		return this.transferPropsTo(
			<div className={classSet}>{this.props.children}</div>
		);
	}
});