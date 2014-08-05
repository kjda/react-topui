/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'Textarea',

	getDefaultProps: function(){
		return {
			large: false,
			full: false
		};
	},


	render: function(){
		
		var classSet = React.addons.classSet({
			'topcoat-textarea': !this.props.large ,
			'topcoat-textarea--larg': this.props.large,
			full: this.props.full
		});
		
		return this.transferPropsTo(
			React.DOM.textarea( {type:"text", className:classSet} )
		);
	}
});