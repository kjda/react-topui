/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	render: function(){
		return this.transferPropsTo(
			<div className='topcoat-list'>
			{this.props.children}
			</div>
		);
	}

});