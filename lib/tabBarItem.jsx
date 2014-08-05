/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	getDefaultProps: function(){
		return {
			full: false
		};
	},

	render: function(){

		var classSet = React.addons.classSet({
			'topcoat-tab-bar__button': true,
			'full': this.props.full
		});

		
		return (
			<label className="topcoat-tab-bar__item">
    			<input type="radio" name={this.props.name} />
    			<button className={classSet}>{this.props.children}</button>
  			</label>
		);
	}
	
});