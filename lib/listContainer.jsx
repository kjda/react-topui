/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	render: function(){
		return this.transferPropsTo(
			<ul className='topcoat-list__container'>
			{this.props.children}
			</ul>
		);
	}

});