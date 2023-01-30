var options = [
  [1, 4, 7],
  [1, 4],
  [4, 5, 7],
  [3, 5, 6],
  [2, 3, 6, 7],
  [2, 7],
];
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const table = {};
const number = [];
const tableNumber = [];
for (let i = 0; i < 7; i++) {
  number[i] =
    Number(countOccurrences(options[0], i + 1)) +
    Number(countOccurrences(options[1], i + 1)) +
    Number(countOccurrences(options[2], i + 1)) +
    Number(countOccurrences(options[3], i + 1)) +
    Number(countOccurrences(options[4], i + 1)) +
    Number(countOccurrences(options[5], i + 1));
}
console.log(number.indexOf(Math.min(...number)));
for (let i = 0; i < 7; i++) {
  if (options[0][i] == i + 1) {
    options[0][i] = 1;
  } else if (options[0][i] != i + 1) {
    options[0].splice(i, 0, 0);
  }
  if (options[1][i] == i + 1) {
    options[1][i] = 1;
  } else if (options[1][i] != i + 1) {
    options[1].splice(i, 0, 0);
  }
  if (options[2][i] == i + 1) {
    options[2][i] = 1;
  } else if (options[2][i] != i + 1) {
    options[2].splice(i, 0, 0);
  }
  if (options[3][i] == i + 1) {
    options[3][i] = 1;
  } else if (options[3][i] != i + 1) {
    options[3].splice(i, 0, 0);
  }
  if (options[4][i] == i + 1) {
    options[4][i] = 1;
  } else if (options[4][i] != i + 1) {
    options[4].splice(i, 0, 0);
  }
  if (options[5][i] == i + 1) {
    options[5][i] = 1;
  } else if (options[5][i] != i + 1) {
    options[5].splice(i, 0, 0);
  }
}
for (let i = 0; i < 7; i++) {
  if (options[i][0] == 1) {
    tableNumber[0][i] = 1;
  } else if (options[i][0] != 1) {
    tableNumber[0].splice(i, 0, 0);
  }
  if (options[i][1] == 1) {
    tableNumber[1][i] = 1;
  } else if (options[i][1] != 1) {
    tableNumber[1].splice(i, 0, 0);
  }
  if (options[i][2] == 1) {
    tableNumber[2][i] = 1;
  } else if (options[i][2] != 1) {
    tableNumber[2].splice(i, 0, 0);
  }
  if (options[i][3] == 1) {
    tableNumber[3][i] = 1;
  } else if (options[i][3] != 1) {
    tableNumber[3].splice(i, 0, 0);
  }
  if (options[i][4] == 1) {
    tableNumber[4][i] = 1;
  } else if (options[i][4] != 1) {
    tableNumber[4].splice(i, 0, 0);
  }
  if (options[i][5] == 1) {
    tableNumber[5][i] = 1;
  } else if (options[i][5] != 1) {
    tableNumber[5].splice(i, 0, 0);
  }
}
table.A = options[0];
table.B = options[1];
table.C = options[2];
table.D = options[3];
table.E = options[4];
table.F = options[5];
console.table(table);
console.table(number);
console.table(tableNumber);
