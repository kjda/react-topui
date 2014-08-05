/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'TextInput',

	getDefaultProps: function(){
		return {
			large: false,
			full: false
		};
	},


	render: function(){
		
		var classSet = React.addons.classSet({
			'topcoat-text-input': !this.props.large ,
			'topcoat-text-input--larg': this.props.large,
			full: this.props.full
		});
		
		return this.transferPropsTo(
			<input type="text" className={classSet} />
		);
	}
});