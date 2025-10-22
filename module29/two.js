/* we learned about default parameter */

function sum(num1, num2) {
  const total = num1 + num2;
  console.log(num1, num2, total);
  console.log(arguments);
}

sum(10, 40); // no problem

sum(10, 40, 70, 54, 23); // extra 3 are ignored

sum(78); // num2 become undefined and total become NaN

sum(); // both num1 , num2 become undefined and total become NaN

function sum1(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
} // default parameter to avoid undefined, can be used in all parameter

sum1(45); // value of num2 is 0

sum1(35, 85); // num2 use 85 instead 0

function multiply(num1 = 1, num2 = 1) {
  const total = num1 * num2;
  console.log(num1, num2, total);
}

multiply();
multiply(30);
multiply(9, 7);

function fullName(first = "", last = "") {
  const name = first + " " + last;
  console.log(name);
}

fullName("abdul", "kader");
fullName("masum");
