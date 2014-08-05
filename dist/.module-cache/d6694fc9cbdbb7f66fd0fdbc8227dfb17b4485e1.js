/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	getDefaultProps: function(){
		return {
			full: false
		};
	},

	render: function(){

		var classSet = React.addons.classSet({
			'topcoat-tab-bar__button': true,
			'full': this.props.full
		});

		var button = this.transferPropsTo(React.DOM.button( {className:classSet}, this.props.children)); 
		return (
			React.DOM.label( {className:"topcoat-tab-bar__item"}, 
    			React.DOM.input( {type:"radio", name:this.props.name} ),
    			button
  			)
		);
	}
	
});