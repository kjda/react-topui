/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	render: function(){
		return this.transferPropsTo(
			<h3 className='topcoat-list__header'>
			{this.props.children}
			</h3>
		);
	}

});