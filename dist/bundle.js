/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import {MyAppComponent} from "./components/hello/hello.js";

	//import {HelloTemplateComponent} from "./components/helloTemplate/helloTemplate.js";

	import {Component, View, bootstrap} from 'nm/angular2/angular2';

	bootstrap(MyAppComponent);

	/*
	cats = require('./assets/js/cats');
	require('./assets/css/style.css');
	document.write('<h1>It works.</h1><div id="image"></div>');
	var img = document.createElement('img');
	img.src = require('./assets/img/a.png');
	var $ = require('jquery');
	$('h1').click(() => {
	    alert('click');
	});
	$('#image').append(img);
	console.log(cats);
	*/


/***/ }
/******/ ]);