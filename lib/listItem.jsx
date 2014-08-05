/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	render: function(){
		return this.transferPropsTo(
			<li className='topcoat-list__item'>
			{this.props.children}
			</li>
		);
	}

});