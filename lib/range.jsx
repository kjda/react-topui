/** @jsx React.DOM */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({
		
	displayName: 'Range',

	render: function(){

		var classSet = ClassSet({
			'topcoat-range': true
		});
		
		return this.transferPropsTo(
			<input type="range" className={classSet} />
		);
	}
	
});