var state = true;
var error = 0;
var sudoku = [
  [6, 0, 0, 0, 0, 7, 0, 0, 1],
  [4, 3, 0, 0, 0, 5, 6, 7, 0],
  [0, 0, 0, 6, 0, 3, 0, 0, 0],
  [2, 9, 6, 0, 7, 1, 0, 0, 4],
  [0, 8, 1, 3, 0, 0, 0, 6, 0],
  [7, 4, 3, 0, 0, 0, 8, 1, 0],
  [1, 2, 0, 0, 6, 0, 5, 8, 3],
  [3, 7, 0, 0, 9, 0, 1, 0, 0],
  [0, 0, 5, 1, 3, 0, 0, 0, 0],
];
var matrix = [];
for (let cN = 0; cN < 9; cN++) {
  for (let cC = 0; cC < 81; cC++) {
    let currentMatrix = [];
    for (let celU = 0; celU < 81; celU++) {
      if (celU == cC) {
        currentMatrix[celU] = 1;
      } else {
        currentMatrix[celU] = 0;
      }
    }
    for (let rowU = 0; rowU < 81; rowU++) {
      if (rowU == Math.floor(cC / 9) * 9 + cN) {
        currentMatrix[rowU + 81] = 1;
      } else {
        currentMatrix[rowU + 81] = 0;
      }
    }
    for (let colU = 0; colU < 81; colU++) {
      if (colU == (cC % 9) * 9 + cN) {
        currentMatrix[colU + 162] = 1;
      } else {
        currentMatrix[colU + 162] = 0;
      }
    }
    for (let boxU = 0; boxU < 81; boxU++) {
      if (
        boxU ==
        Math.floor((cC % 9) / 3) +
          3 * Math.floor(Math.floor(cC / 9) / 3) * 9 +
          cN
      ) {
        currentMatrix[boxU + 243] = 1;
      } else {
        currentMatrix[boxU + 243] = 0;
      }
    }
    matrix.push(currentMatrix)
  }
}
console.log(matrix);
