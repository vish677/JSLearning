console.log("++++++++++++++++++++++++++++++++++++");
function greaterNumber(num1, num2) {
  var greaterNumber = num1 > num2;
  console.log(greaterNumber);
}
greaterNumber(10, -10);

greaterNumber(800, 899);
console.log("+++++++++++++++++++++++++++++++++++=");

function isEvenOrOddNum(num) {
  var result = num % 2 == 0 ? "Even" : "ODD";
  console.log(result);
  return result;
}
var result = isEvenOrOddNum(29);
console.log(`num 29 has ${result}`);
var result = isEvenOrOddNum(44);
console.log(`num 44 has ${result}`);
var result = isEvenOrOddNum(0);
console.log(`num 0 has ${result}`);
isEvenOrOddNum(101);
isEvenOrOddNum(2);

console.log("+++++++++++++++++++++++==+++++=");

function wordLength(word) {
  var wordLength = word.length;
  var result = wordLength % 2 == 0 ? "even" : "odd";
  return result;
}
var result = wordLength("javascipt");
var result = wordLength("google");
//wordLength("javascipt");
console.log(`word "javascript" has ${result} length`);
console.log(`word "Google" has ${result} length`);
console.log(`Word "Devloper rule" has ${wordLength("Devloper rule")} length`);
