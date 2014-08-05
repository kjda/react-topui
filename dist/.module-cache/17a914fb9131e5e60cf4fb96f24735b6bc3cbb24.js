/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	getDefaultProps: function(){
		return {
			right: false,
			label: null
		};
	},

	render: function(){

		var left = null;
		var right = null;

		if( this.props.label && this.props.right ){
			right = ' ' + this.props.label
		} else if( this.props.label ){
			left = this.props.label + ' ';
		}

		var input = this.transferPropsTo(
			React.DOM.input( {type:"radio"} )
		);

		return (
			React.DOM.label( {className:"topcoat-radio-button"}, 
				left,
				input,
				React.DOM.div( {className:"topcoat-radio-button__checkmark"}),
				right
			)
		);
	}
});