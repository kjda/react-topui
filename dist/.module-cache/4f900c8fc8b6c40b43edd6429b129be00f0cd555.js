/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	getDefaultProps: function(){
		return {
			label: null
		};
	},

	render: function(){

		var checkbox = this.transferPropsTo(
			React.DOM.input( {type:"checkbox", className:"topcoat-switch__input"} )
		);
		
		return (
			React.DOM.label( {className:"topcoat-switch"}, 
				checkbox,
				React.DOM.div( {className:"topcoat-switch__toggle"})
			)
			);
	}
});