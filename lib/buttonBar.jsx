/** @jsx React.DOM */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({
	
	displayName: 'ButtonBar',

	getDefaultProps: function(){
		return {
			full: false
		};
	},
	
	render: function(){

		var classSet = ClassSet({
			'topcoat-button-bar': true,
			'full': this.props.full
		});

		return this.transferPropsTo(
			<div className={classSet}>
			{this.props.children}
			</div>
		);
	}
});