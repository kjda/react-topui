/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'ListItem',

	render: function(){
		return this.transferPropsTo(
			<li className='topcoat-list__item'>
			{this.props.children}
			</li>
		);
	}

});