const fs = require('fs');
const path = require('path');

console.log('Hello');
const {encode} = require('./encryption');
const argv = require('minimist')(process.argv.slice(2));
const {shift, input, output, action} = require('./parseOptions')(argv);
const readStream = input
    ? fs.createReadStream(path.join(__dirname, input))
    : process.stdin;
const writeStream = output
    ? fs.createWriteStream(path.join(__dirname, output), { flags: 'a+' })
    : process.stdout;