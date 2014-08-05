/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	render: function(){
		var cls = 'topcoat-navigation-bar'  + this.props.name;
		return this.transferPropsTo( <i className={cls} /> );
	}
});
