const cipherWord = (word, num) => word.split('').map(char => {
  let regex = /^[A-Za-z]+$/;
  if (char.match(regex)) {
    return (char === char.toUpperCase()
    ? String.fromCharCode(65 + ((char.charCodeAt() - 65 + num) % 26))
    : String.fromCharCode(97 + ((char.charCodeAt() - 97 + num) % 26)))
  } else {
    return char
  }
}).join('');

const cipher = (str, num) => {
  const arr = str.split(' ');
  return arr.map(word => cipherWord(word, num)).join(' ');
};

export default cipher;

