/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
		
	getDefaultProps: function(){
		return {
			vertical: false
		};
	},

	render: function(){
		var classSet = React.addons.classSet({
			'topcoat-range': !this.props.vertical,
			'topcoat-range-vertical': this.props.vertical
		});
		return this.transferPropsTo(
			React.DOM.input( {type:"range", className:classSet} )
		);
	}
});