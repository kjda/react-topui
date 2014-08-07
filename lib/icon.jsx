/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	
	displayName: 'Icon',

	render: function(){
		return this.transferPropsTo( 
			<span className='icomatic icon'>
				{this.props.name}
			</span>
		);
	}
});
