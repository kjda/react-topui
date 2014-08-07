/** @jsx React.DOM */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({
	
	displayName: 'Button',
	
	getDefaultProps: function(){
		return {
			quiet: false,
			large: false,
			cta: false,
			full: false
		};
	},


	render: function(){
		
		var classSet = ClassSet({
			'topcoat-button': !this.props.large && !this.props.cta && !this.props.quiet,
			'topcoat-button--quiet': this.props.quiet && !this.props.large,
			'topcoat-button--cta': this.props.cta && !this.props.large,
			'topcoat-button--large': this.props.large && !this.props.cta && !this.props.quiet,
			'topcoat-button--large--quiet': this.props.quiet && this.props.large,
			'topcoat-button--large--cta': this.props.cta && this.props.large,
			'full': this.props.full
		});
		
		return this.transferPropsTo(
			<button className={classSet}>
			{this.props.children}
			</button>
		);
	}
});