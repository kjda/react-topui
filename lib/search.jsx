/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'Search',

	getDefaultProps: function(){
		return {
			large: false,
			full: false
		};
	},

	render: function(){
		
		var classSet = React.addons.classSet({
			'topcoat-search-input': !this.props.large ,
			'topcoat-search-input--larg': this.props.large,
			full: this.props.full
		});
		
		return this.transferPropsTo(
			<input type="search" className={classSet} />
		);
	}
});