/** @jsx React.DOM */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({
		
	displayName: 'Range',

	getDefaultProps: function(){
		return {
			vertical: false
		};
	},

	render: function(){

		var classSet = ClassSet({
			'topcoat-range': !this.props.vertical,
			'topcoat-range-vertical': this.props.vertical
		});
		
		return this.transferPropsTo(
			<input type="range" className={classSet} />
		);
	}
	
});