const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var userMove = "";
var tic = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
move();
function move() {
  console.table(tic);
  rl.question("Your move\n", function (string) {
    userMove = string;
    if ((Number(userMove) % 3) - 1 == -1) {
      tic[Math.ceil(Number(userMove) / 3 - 1)][2] = 1;
    } else {
      tic[Math.ceil(Number(userMove) / 3 - 1)][(Number(userMove) % 3) - 1] = 1;
    }
    console.table(tic);
    bot();
  });
}
function bot() {
  let num = tic.find(function (element) {
    return element == 0;
  });
  let num1 = Math.floor(Math.random() * 3);
  let num2 = Math.floor(Math.random() * 3);
  if (num != 1) {
    return;
  } else if (tic[num1][num2] == 1 || tic[num1][num2] == 2) {
    bot();
  } else {
    tic[num1][num2] = 2;
    move();
  }
}
