function removeChar(str) {
  return str.slice(1, -1);
}
console.log(removeChar("eloquent"));

// function numberToString(num) {
//   return num.toString();
// }
// console.log(numberToString(67));

// function opposite(number) {
//   return -number;
// }
// console.log(opposite(1));

function noSpace(x) {
  return x.replaceAll(" ", "");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// const stringToNumber = function (str) {
//   // put your code here
//   return Number(str);
// };
// console.log(stringToNumber("1234"));

// function digitize(n) {
//   return String(n).split("").map(Number).reverse();
// }
// console.log(digitize(35231));

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
console.log(digitize(35231));
