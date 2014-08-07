/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	
	displayName: 'NavBarTitle',

	propTypes:{
		title: React.PropTypes.string
	},

	getDefaultProps: function(){
		return {
			title: null
		};
	},

	render: function(){
		var title = this.props.title || this.props.children;
		return this.transferPropsTo(
      <h1 className="topcoat-navigation-bar__title" style={{textAlign: 'center'}}>
        {title}
      </h1>
		);
	}
});