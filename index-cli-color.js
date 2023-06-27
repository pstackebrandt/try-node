// Desc: Using cli-color module to colorize the output

'use strict';

const clr = require('cli-color');

console.log(clr.red('Hello world'));
console.log(clr.bgBlueBright('Hello world'));
console.log(clr.inverse.bgBlue.whiteBright('Hello world'));