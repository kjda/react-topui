/** @jsx React.DOM */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({
	
	displayName: 'Textarea',

	getDefaultProps: function(){
		return {
			large: false,
			full: false
		};
	},


	render: function(){
		
		var classSet = ClassSet({
			'topcoat-textarea': !this.props.large ,
			'topcoat-textarea--large': this.props.large,
			full: this.props.full
		});
		
		return this.transferPropsTo(
			<textarea type="text" className={classSet} />
		);
	}
});