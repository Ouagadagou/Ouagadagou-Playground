
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
var columnMatrix = [
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
var rowMatrix = [
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
var boxMatrix = [
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
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (sudoku[i][j] > 0) {
      columnMatrix[j][sudoku[i][j] - 1] = 1;
      rowMatrix[i][sudoku[i][j] - 1] = 1;
      if (i <= 2) {
        if (j <= 2) {
          boxMatrix[0][sudoku[i][j] - 1] = 1;
        } else if (j <= 5) {
          boxMatrix[1][sudoku[i][j] - 1] = 1;
        } else if (j <= 8) {
          boxMatrix[2][sudoku[i][j] - 1] = 1;
        }
      } else if (i <= 5) {
        if (j <= 2) {
          boxMatrix[3][sudoku[i][j] - 1] = 1;
        } else if (j <= 5) {
          boxMatrix[4][sudoku[i][j] - 1] = 1;
        } else if (j <= 8) {
          boxMatrix[5][sudoku[i][j] - 1] = 1;
        }
      } else if (i <= 8) {
        if (j <= 2) {
          boxMatrix[6][sudoku[i][j] - 1] = 1;
        } else if (j <= 5) {
          boxMatrix[7][sudoku[i][j] - 1] = 1;
        } else if (j <= 8) {
          boxMatrix[8][sudoku[i][j] - 1] = 1;
        }
      }
    }
  }
}
while (state == true) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      for (let k = 0; k < 9; k++) {
        if (sudoku[i][j] > 0) {
          break;
        } else if (sudoku[i][j] == 0) {
          if (columnMatrix[j][k] == 0) {
            if (rowMatrix[i][k] == 0) {
              if (i <= 2) {
                if (j <= 2) {
                  if (boxMatrix[0][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[0][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[0][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                } else if (j <= 5) {
                  if (boxMatrix[1][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[1][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[1][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                } else if (j <= 8) {
                  if (boxMatrix[2][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[2][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[2][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                }
              } else if (i <= 5) {
                if (j <= 2) {
                  if (boxMatrix[3][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[3][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[3][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                } else if (j <= 5) {
                  if (boxMatrix[4][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[4][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[4][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                } else if (j <= 8) {
                  if (boxMatrix[5][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[5][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[5][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                }
              } else if (i <= 8) {
                if (j <= 2) {
                  if (boxMatrix[6][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[6][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[6][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                } else if (j <= 5) {
                  if (boxMatrix[7][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[7][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[7][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                } else if (j <= 8) {
                  if (boxMatrix[8][k] == 0) {
                    answer[i][j] = k;
                    columnMatrix[j][k] = 1;
                    rowMatrix[i][k] = 1;
                    boxMatrix[8][k] = 1;
                    console.log(k)
                  } else if (boxMatrix[8][k] == 1) {
                    error = error + 1;
                    console.log(error);
                  }
                }
              } else if (rowMatrix[i][k] == 1) {
                error = error + 1;
                console.log(error);
              }
            } else if (sudoku[i][j] == 1) {
              error = error + 1;
              console.log(error);
            }
          }
        }
        if (k == 6) {
          j = j - 2;
        }
      }
      if (j == 6) {
        i = i - 2;
      }
    }
  }
  state = false;
}
