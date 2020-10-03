const lowerCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_LETTERS = 26;

module.exports.code = (char, shift) => {
  const lowerPosition = lowerCharacters.findIndex(el => el === char);
  const upperPosition =
    lowerPosition === -1 ? upperCharacters.findIndex(el => el === char) : -1;
  if (lowerPosition !== -1) {
    let newPosition = (lowerPosition + shift) % MAX_LETTERS;
    if (newPosition < 0) {
      newPosition = MAX_LETTERS + newPosition;
    }
    return lowerCharacters[newPosition];
  }
  if (upperPosition !== -1) {
    let newPosition = (upperPosition + shift) % MAX_LETTERS;
    if (newPosition < 0) {
      newPosition = MAX_LETTERS + newPosition;
    }
    return upperCharacters[newPosition];
  }
  return char;
};
module.exports.codeString = (string, shift) => {
  return string
    .split("")
    .map(char => exports.code(char, shift))
    .join("");
};
