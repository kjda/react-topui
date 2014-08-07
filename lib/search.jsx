/** @jsx React.DOM */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({
	
	displayName: 'Search',

	getDefaultProps: function(){
		return {
			large: false,
			full: false
		};
	},

	render: function(){
		
		var classSet = ClassSet({
			'topcoat-search-input': !this.props.large ,
			'topcoat-search-input--large': this.props.large,
			full: this.props.full
		});
		
		return this.transferPropsTo(
			<input type="search" className={classSet} />
		);
	}
});