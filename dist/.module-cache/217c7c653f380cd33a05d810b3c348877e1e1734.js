/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({displayName: 'exports',
	
	getDefaultProps: function(){
		return {
			quiet: false,
			large: false,
			full: false
		};
	},
	
	render: function(){
		var classSet = React.addons.classSet({
			'topcoat-button': !this.props.large && !this.props.cta && !this.props.quiet,
			'topcoat-button--quiet': this.props.quiet && !this.props.large,
			'topcoat-button--large': this.props.large && !this.props.cta && !this.props.quiet,
			'topcoat-button--large--quiet': this.props.quiet && this.props.large,
			'full': this.props.full
		});

		
		return this.transferPropsTo(
			React.DOM.button( {className:classSet}, 
				this.props.children
			)
		);
	}
});