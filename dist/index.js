(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["TopUI"] = factory(require("react"));
	else
		root["TopUI"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_24__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		ButtonBar: __webpack_require__(1),
		ButtonBarItem: __webpack_require__(2),
		Button: __webpack_require__(3),
		Checkbox: __webpack_require__(4),
		IconButton: __webpack_require__(5),
		Radio: __webpack_require__(6),
		Range: __webpack_require__(7),
		TabBar: __webpack_require__(8),
		TabBarItem: __webpack_require__(9),
		Notification: __webpack_require__(10),
		NavBar: __webpack_require__(11),
		NavBarItem: __webpack_require__(12),
		NavBarTitle: __webpack_require__(13),
		Icon: __webpack_require__(14),
		List: __webpack_require__(15),
		ListHeader: __webpack_require__(16),
		ListContainer: __webpack_require__(17),
		ListItem: __webpack_require__(18),
		LinkButton: __webpack_require__(19),
		TextInput: __webpack_require__(20),
		Textarea: __webpack_require__(21),
		Switch: __webpack_require__(22),
		Search: __webpack_require__(23)
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'ButtonBar',

		getDefaultProps: function(){
			return {
				full: false
			};
		},
		
		render: function(){

			var classSet = ClassSet({
				'topcoat-button-bar': true,
				'full': this.props.full
			});

			return this.transferPropsTo(
				React.DOM.div({className: classSet}, 
				this.props.children
				)
			);
		}
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'ButtonBarItem',

		getDefaultProps: function(){
			return {
				large: false,
				full: false
			}
		},

		render: function(){

			var classSet = ClassSet({
				'topcoat-button-bar__button': !this.props.large,
				'topcoat-button-bar__button--large': this.props.large,
				'full': this.props.full
			});

			var btn = this.transferPropsTo(
				React.DOM.button({className: classSet}, this.props.children)
			);
			
			return (
				React.DOM.div({className: "topcoat-button-bar__item"}, 
				btn
				)
			);
		}
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'Button',
		
		getDefaultProps: function(){
			return {
				quiet: false,
				large: false,
				cta: false,
				full: false
			};
		},


		render: function(){
			
			var classSet = ClassSet({
				'topcoat-button': !this.props.large && !this.props.cta && !this.props.quiet,
				'topcoat-button--quiet': this.props.quiet && !this.props.large,
				'topcoat-button--cta': this.props.cta && !this.props.large,
				'topcoat-button--large': this.props.large && !this.props.cta && !this.props.quiet,
				'topcoat-button--large--quiet': this.props.quiet && this.props.large,
				'topcoat-button--large--cta': this.props.cta && this.props.large,
				'full': this.props.full
			});
			
			return this.transferPropsTo(
				React.DOM.button({className: classSet}, 
				this.props.children
				)
			);
		}
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'Checkbox',

		getDefaultProps: function(){
			return {
				label: null
			};
		},

		render: function(){

			var checkbox = this.transferPropsTo(
				React.DOM.input({type: "checkbox", className: "topcoat-checkbox__checkmark"})
			);
			
			return (
				React.DOM.label({className: "topcoat-checkbox"}, 
	  			checkbox, 
	  			React.DOM.div({className: "topcoat-checkbox__checkmark"}), 
	  				React.DOM.span(null, " ", this.props.label)
				)
			);
		}

	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'IconButton',

		getDefaultProps: function(){
			return {
				quiet: false,
				large: false,
				full: false
			};
		},
		
		render: function(){
			
			var classSet = ClassSet({
				'topcoat-button': !this.props.large && !this.props.cta && !this.props.quiet,
				'topcoat-button--quiet': this.props.quiet && !this.props.large,
				'topcoat-button--large': this.props.large && !this.props.cta && !this.props.quiet,
				'topcoat-button--large--quiet': this.props.quiet && this.props.large,
				'full': this.props.full
			});

			
			return this.transferPropsTo(
				React.DOM.button({className: classSet}, 
					this.props.children
				)
			);
		}
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'Radio',

		getDefaultProps: function(){
			return {
				right: false,
				label: null
			};
		},

		render: function(){

			var left = null;
			var right = null;

			if( this.props.label && this.props.right ){
				right = ' ' + this.props.label
			} else if( this.props.label ){
				left = this.props.label + ' ';
			}

			var input = this.transferPropsTo(
				React.DOM.input({type: "radio"})
			);

			return (
				React.DOM.label({className: "topcoat-radio-button"}, 
					left, 
					input, 
					React.DOM.div({className: "topcoat-radio-button__checkmark"}), 
					right
				)
			);
		}
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
			
		displayName: 'Range',

		getDefaultProps: function(){
			return {
				vertical: false
			};
		},

		render: function(){

			var classSet = ClassSet({
				'topcoat-range': !this.props.vertical,
				'topcoat-range-vertical': this.props.vertical
			});
			
			return this.transferPropsTo(
				React.DOM.input({type: "range", className: classSet})
			);
		}
		
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'TabBar',

		getDefaultProps: function(){
			return {
				full: false
			};
		},

		render: function(){
			
			var classSet = ClassSet({
				'topcoat-tab-bar': true,
				'full': this.props.full
			});

			return this.transferPropsTo(
				React.DOM.div({className: classSet}, this.props.children)
			);
		}
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'TabBarItem',

		getDefaultProps: function(){
			return {
				full: false
			};
		},

		render: function(){

			var classSet = ClassSet({
				'topcoat-tab-bar__button': true,
				'full': this.props.full
			});

			var button = this.transferPropsTo(React.DOM.button({className: classSet}, this.props.children)); 
			return (
				React.DOM.label({className: "topcoat-tab-bar__item"}, 
	    			React.DOM.input({type: "radio", name: this.props.name}), 
	    			button
	  			)
			);
		}
		
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'Notification',

		getDefaultProps: function(){
			return {
				value: null
			};
		},


		render: function(){
			return (
				React.DOM.span({className: "topcoat-notification"}, 
				this.props.value
				)
			);
		}
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'NavBar',

		render: function(){
			var cls = 'topcoat-navigation-bar';
			return this.transferPropsTo(
				React.DOM.div({className: cls}, 
				this.props.children
				)
			);
		}

	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'NavBarItem',

		getDefaultProps: function(){
			return {
				quarter: false,
				half: false,
				left: false,
				right: false,
				center: false
			};
		},

		render: function(){

			var classSet = ClassSet({
				'topcoat-navigation-bar__item': true,
				'quarter': this.props.quarter,
				'half': this.props.half,
				'left': this.props.left,
				'right': this.props.right,
				'center': this.props.center
			});

			return this.transferPropsTo(
				React.DOM.div({className: classSet}, 
				this.props.children
				)
			);
		}
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'NavBarTitle',

		render: function(){
			var title = this.props.title || this.props.children;
			return this.transferPropsTo(
	      React.DOM.h1({className: "topcoat-navigation-bar__title", style: {textAlign: 'center'}}, 
	        title
	      )
			);
		}
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'Icon',

		render: function(){
			return this.transferPropsTo( 
				React.DOM.span({className: "icomatic icon"}, 
					this.props.name
				)
			);
		}
	});


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'List',

		render: function(){
			return this.transferPropsTo(
				React.DOM.div({className: "topcoat-list"}, 
					this.props.children
				)
			);
		}

	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'ListHeader',

		render: function(){
			return this.transferPropsTo(
				React.DOM.h3({className: "topcoat-list__header"}, 
					this.props.children
				)
			);
		}

	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'ListContainer',

		render: function(){
			return this.transferPropsTo(
				React.DOM.ul({className: "topcoat-list__container"}, 
					this.props.children
				)
			);
		}

	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'ListItem',

		render: function(){
			return this.transferPropsTo(
				React.DOM.li({className: "topcoat-list__item"}, 
					this.props.children
				)
			);
		}

	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var Button = __webpack_require__(3);

	module.exports = React.createClass({
		
		displayName: 'LinkButton',

		nav: function(){
			window.location.href = this.props.href;
			return false;
		},

		render: function(){
			return this.transferPropsTo(
				Button({onClick: this.nav}, 
					this.props.children
				)
			);
		}
		
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'TextInput',

		getDefaultProps: function(){
			return {
				large: false,
				full: false
			};
		},


		render: function(){
			
			var classSet = ClassSet({
				'topcoat-text-input': !this.props.large ,
				'topcoat-text-input--large': this.props.large,
				full: this.props.full
			});
			
			return this.transferPropsTo(
				React.DOM.input({type: "text", className: classSet})
			);
		}
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'Textarea',

		getDefaultProps: function(){
			return {
				large: false,
				full: false
			};
		},


		render: function(){
			
			var classSet = ClassSet({
				'topcoat-textarea': !this.props.large ,
				'topcoat-textarea--large': this.props.large,
				full: this.props.full
			});
			
			return this.transferPropsTo(
				React.DOM.textarea({type: "text", className: classSet})
			);
		}
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);

	module.exports = React.createClass({
		
		displayName: 'Switch',

		getDefaultProps: function(){
			return {
				label: null
			};
		},

		render: function(){

			var checkbox = this.transferPropsTo(
				React.DOM.input({type: "checkbox", className: "topcoat-switch__input"})
			);
			
			return (
				React.DOM.label({className: "topcoat-switch"}, 
					checkbox, 
					React.DOM.div({className: "topcoat-switch__toggle"})
				)
				);
		}
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(24);
	var ClassSet = __webpack_require__(25);

	module.exports = React.createClass({
		
		displayName: 'Search',

		getDefaultProps: function(){
			return {
				large: false,
				full: false
			};
		},

		render: function(){
			
			var classSet = ClassSet({
				'topcoat-search-input': !this.props.large ,
				'topcoat-search-input--large': this.props.large,
				full: this.props.full
			});
			
			return this.transferPropsTo(
				React.DOM.input({type: "search", className: classSet})
			);
		}
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule cx
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).map(function(className) {
	      return classNames[className] ? className : '';
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}

	module.exports = cx;

/***/ }
/******/ ])
});
