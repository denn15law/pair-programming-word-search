const wordSearch = (letters, word) => {
  //if statement to check if letters is an array
  if (!Array.isArray(letters)) {
    return false;
  }

  //if statement to check if letters is empty array
  if (letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalLetters = transpose(letters);
  const verticalJoin = verticalLetters.map((ls) => ls.join(""));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

const transpose = (matrix) => {
  //code here
  const newArray = [];

  //create new array
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }

  // push items to new array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newArray[j].push(matrix[i][j]);
    }
  }

  return newArray;
};

console.log(wordSearch([], "FRANK"));

module.exports = wordSearch;
