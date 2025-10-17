/* we learn here about min,max,pi,abs,round, floor, ceil and random function */

let minValue = Math.min(56,94,23,183,8484,484,23,55,98,34,75,-9,-2,85,83,98494);
console.log(minValue);

let maxValue = Math.max(56,94,23,183,8484,484,23,55,98,34,75,-9,-2,85,83,98494);
console.log(maxValue);

console.log(Math.PI);

console.log(Math.abs(-98.5));
console.log(Math.abs(4-9));

console.log(Math.round(9.7));
console.log(Math.round(9.499));  // convert to nearest integer

console.log(Math.floor(2.99)); // convert into immediate small integer
console.log(Math.ceil(2.001)); // convert into immediate big integer

console.log(Math.random()); // produce number between 0 and 1
console.log(Math.random()*100);// produce number between 0 and 100
console.log(parseInt(Math.random()*100));// produce integer number between 0 and 100


// self explore 

console.log(Math.pow(10, 4));// Math.pow(base,power);