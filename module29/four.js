/* we learn here about arrow function */

// function expression
const addition = function (num1, num2) {
    return num1 + num2
}
const add = addition(8,9);
console.log(add);




// arrow function
const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isFirstBig = (x, y) => x > y;
const sqrt = (num) => Math.sqrt(num);
const tenX = (num) => num*10;


//multiline arrow function
const calculateTotal = (price, quantity, taxRate) => {
  const subtotal = price * quantity;
  const tax = subtotal * taxRate/100;
  const total = subtotal + tax;
  return total;
};


console.log(sqrt(78));
console.log(tenX(10));
console.log(calculateTotal(20,50,2));