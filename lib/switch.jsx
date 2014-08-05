/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	getDefaultProps: function(){
		return {
			label: null
		};
	},

	render: function(){

		var checkbox = this.transferPropsTo(
			<input type="checkbox" className="topcoat-switch__input" />
		);
		
		return (
			<label className="topcoat-switch">
				{checkbox}
				<div className="topcoat-switch__toggle"></div>
			</label>
			);
	}
});