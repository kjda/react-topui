/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	getDefaultProps: function(){
		return {
			large: false,
			full: false
		}
	},

	render: function(){

		var classSet = React.addons.classSet({
			'topcoat-button-bar__button': !this.props.large,
			'topcoat-button-bar__button--large': this.props.large,
			'full': this.props.full
		});

		var btn = this.transferPropsTo(
			<button className={classSet}>{this.props.children}</button>
		);
		
		return (
			<div className="topcoat-button-bar__item">
			{btn}
			</div>
		);
	}
});