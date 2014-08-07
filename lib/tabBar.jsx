/** @jsx React.DOM */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({
	
	displayName: 'TabBar',

	propTypes:{
		full: React.PropTypes.bool
	},

	getDefaultProps: function(){
		return {
			full: false
		};
	},

	render: function(){
		
		var classSet = ClassSet({
			'topcoat-tab-bar': true,
			'full': this.props.full
		});

		return this.transferPropsTo(
			<div className={classSet}>{this.props.children}</div>
		);
	}
});