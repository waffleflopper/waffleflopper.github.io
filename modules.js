// IIFE // Immeidately Invoked Function Execute

// var myApp = {};

// (function() {
//     myApp.add = function(a, b) {
//         return a + b;
//     }
// })();

//all files got added inside their own function so it didn't polute the global namespace
// but order of file still important because of dependencies (lack of dependency resolution)


//browserify

//------- CommonJS + Browserify --------------
//bundled all JS together in one JS file.

/* // js1
module.exports = function add(a, b) {
    return a + b;
}

// js2
var add = require('./add'); */

// ==========ES6 + Webpack2=============
//Webpack bundles JS files.  Traverses import/exports and condenses into a single file
//as long as you use this es6 format

//js1
export const add = (a, b) => a + b;
//or
export default function add() {
    return a + b;
}



//js2
import { add } from './js1';
//or
import add from './js1';