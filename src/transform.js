const { Transform } = require('stream');
const {codeString} = require('./encryption')
module.exports = class TransformStream extends Transform {
  constructor(data) {
    super();
    this.action = data.action;
    this.shift = data.shift;
  }
  _transform(chunk, encoding, callback) {
    try {
      this.push(codeString(chunk.toString(),  this.action==='encode'? this.shift : -this.shift));
      callback();
    } catch (err) {
      callback(err);
    }
  }
}
