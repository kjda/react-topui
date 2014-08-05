/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	getDefaultProps: function(){
		return {
			quarter: false,
			half: false,
			left: false,
			right: false,
			center: false
		};
	},

	render: function(){

		var classSet = React.addons.classSet({
			'topcoat-navigation-bar__item': true,
			'quarter': this.props.quarter,
			'half': this.props.half,
			'left': this.props.left,
			'right': this.props.right,
			'center': this.props.center
		});

		return this.transferPropsTo(
			<div className={classSet}>
			{this.props.children}
			</div>
		);
	}
});