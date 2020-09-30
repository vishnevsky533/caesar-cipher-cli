const lowerCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_LETTERS = 26;

module.exports.encode = (char, shift) => {
  const lowerPosition = lowerCharacters.findIndex((el)=>el===char);
  const upperPosition = lowerPosition === -1 ? upperCharacters.findIndex((el)=>el===char) : -1;
  if (lowerPosition !== -1) {
    let newPosition = (shift + lowerPosition) % MAX_LETTERS;
    if (newPosition < 0 ) newPosition = MAX_LETTERS + newPosition;
    return lowerCharacters[newPosition];
  }
  if (upperPosition !== -1) {
    let newPosition = (shift + upperPosition) % MAX_LETTERS;
    if (newPosition < 0 ) newPosition = MAX_LETTERS + newPosition;
    return upperCharacters[newPosition];
  }
  return char;

};
module.exports.decode = (char, shift)=>{
  return exports.encode(char, -shift);
}
module.exports.encodeString = (string, shift)=> {
  return string.split('').map(char=>exports.encode(char,shift)).join('');
}

module.exports.decodeString = (string, shift)=> {
  return string.split('').map(char=>exports.decode(char,shift)).join('');
}