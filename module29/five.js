/* learning more arrow functions */

const getTax = (amount, taxRate) => amount + (amount * taxRate) / 100;
console.log(getTax(5600, 5));

const getHalf = (num) => num / 2; // in single paramter function , parenthesis () are optional

console.log(getHalf(98.7));

const firstElement = (nums) => nums[0]; // array as parameter

console.log(firstElement([67, 54, 87]));
