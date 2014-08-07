/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	
	displayName: 'List',

	render: function(){
		return this.transferPropsTo(
			<div className='topcoat-list'>
				{this.props.children}
			</div>
		);
	}

});