/*
undefined → means a variable has been declared but not assigned any value.

null → means a variable has been explicitly set to “no value.”
*/

// different ways to get undefined

//1
let x;
console.log(x); //undefined

//2
function sum(a, b) {
  console.log("sum of ", a, " and ", b, " is ", a + b); // a and b will be undefined but a+b will be NaN
}
sum();

//3
function totLal(a, b) {
  console.log("sum of ", a, " and ", b, " is ", a + b);
}
console.log(sum(45, 78)); // undefined

//4
function total2(a, b) {
  console.log("value of parameters", a, b);
  if (a === undefined || b === undefined) {
    return;
  } else {
    return a + b;
  }
}
const result2 = total2(1);
console.log("result2", result2);

//5
const phone = { brand: "samsu", price: 12500 };
console.log(phone.color); // undefined

//6
const banks = ["sonali", "rupali", "jomuna"];
console.log(banks[3]); //undefined

delete banks[2];
console.log(banks); //we got an empty item
console.log(banks[2]); //undefined

console.log("type of undefined", typeof undefined); //undefined
console.log("type of null", typeof null); //object
