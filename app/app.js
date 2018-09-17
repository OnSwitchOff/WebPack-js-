'use strict';
/*import "@babel/polyfill";*/
/*import "core-js/shim";*/
/*import "core-js/es6/promise";*/
import _ from 'lodash';
import $ from 'jquery';
import bar from '../src/index.js';
console.log(ENV_IS);
ENV_IS_DEVELOPMENT?console.log("dev"):console.log("prod");
console.log("+++++");
bar();