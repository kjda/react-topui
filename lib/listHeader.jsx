/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	
	displayName: 'ListHeader',

	render: function(){
		return this.transferPropsTo(
			<h3 className='topcoat-list__header'>
				{this.props.children}
			</h3>
		);
	}

});