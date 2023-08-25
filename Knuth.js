var dlxlib = require("dlxlib");
const start = Date.now();
var sudoku = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0],
];
var answer = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var baseMatrix = [];
var mainMatrix = [];
(function generate() {
  for (let cN = 0; cN < 9; cN++) {
    for (let cC = 0; cC < 81; cC++) {
      let currentMatrix = [];
      for (let celU = 0; celU < 81; celU++) {
        if (celU == cC) {
          currentMatrix[celU] = 1;
        } else {
          currentMatrix[celU] = 0;
        }
        /*Si la cellule est deja utilise*/ 
        if (celU == Math.floor(cC / 9) * 9 + cN) {
          currentMatrix[celU + 81] = 1;
        } else {
          currentMatrix[celU + 81] = 0;
        }
        /*Si la horizontale est deja utilise*/
        if (celU == (cC % 9) * 9 + cN) {
          currentMatrix[celU + 162] = 1;
        } else {
          currentMatrix[celU + 162] = 0;
        }
        /*Si la verticale est deja utilise*/
        if (celU == (Math.floor((cC % 9) / 3) + 3 * Math.floor(Math.floor(cC / 9) / 3)) * 9 + cN) {
          currentMatrix[celU + 243] = 1;
        } else {
          currentMatrix[celU + 243] = 0;
        }
        /*Si la boite est deja utilise*/
      }
      baseMatrix.push(currentMatrix);
      mainMatrix.push(currentMatrix);
    }
  }
})();
(function analyse() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let currentNumber = sudoku[i][j] - 1;
      if (currentNumber >= 0) {
        for (let k = 0; k < 9; k++) {
          let cN = currentNumber * 81 + i * 9 + j;
          let cL = k * 81 + (cN % 81);
          let cC = currentNumber * 81 + i * 9 + k;
          let cR = currentNumber * 81 + k * 9 + j;
          let cB = currentNumber * 81 + Math.floor(i / 3) * 27 + Math.floor(j / 3) * 3 + Math.floor(k / 3) * 9 + (k % 3);
          if (cL != cN) {
            if (mainMatrix.indexOf(baseMatrix[cL]) != -1) {
              mainMatrix.splice(mainMatrix.indexOf(baseMatrix[cL]), 1);
            }
          }
          if (cC != cN) {
            if (mainMatrix.indexOf(baseMatrix[cC]) != -1) {
              mainMatrix.splice(mainMatrix.indexOf(baseMatrix[cC]), 1);
            }
          }
          if (cR != cN) {
            if (mainMatrix.indexOf(baseMatrix[cR]) != -1) {
              mainMatrix.splice(mainMatrix.indexOf(baseMatrix[cR]), 1);
            }
          }
          if (cB != cN) {
            if (mainMatrix.indexOf(baseMatrix[cB]) != -1) {
              mainMatrix.splice(mainMatrix.indexOf(baseMatrix[cB]), 1);
            }
          }
        }
      }
    }
  }
})();
(function finalAnswer() {
  let solutions = dlxlib.solve(mainMatrix);
  for (let i = 0; i < 81; i++) {
    let matrix = baseMatrix.indexOf(mainMatrix[solutions[0][i]]);
    let cC = Math.floor((matrix % 81) / 9);
    let cR = (matrix % 81) % 9;
    let cN = Math.floor(matrix / 81);
    answer[cC][cR] = cN + 1;
  }
})();
console.table(sudoku);
console.table(answer);
const end = Date.now();
console.log(`Execution time: ${end - start} ms`);