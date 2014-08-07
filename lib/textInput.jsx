/** @jsx React.DOM */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({
	
	displayName: 'TextInput',

	getDefaultProps: function(){
		return {
			large: false,
			full: false
		};
	},


	render: function(){
		
		var classSet = ClassSet({
			'topcoat-text-input': !this.props.large ,
			'topcoat-text-input--large': this.props.large,
			full: this.props.full
		});
		
		return this.transferPropsTo(
			<input type="text" className={classSet} />
		);
	}
});