/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'Checkbox',

	getDefaultProps: function(){
		return {
			label: null
		};
	},

	render: function(){

		var checkbox = this.transferPropsTo(
			React.DOM.input( {type:"checkbox", className:"topcoat-checkbox__checkmark"} )
		);
		
		return (
			React.DOM.label( {className:"topcoat-checkbox"}, 
  			checkbox,
  			React.DOM.div( {className:"topcoat-checkbox__checkmark"}),
  				React.DOM.span(null,  " ", this.props.label)
			)
		);
	}

});