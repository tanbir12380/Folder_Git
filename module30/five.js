// we learned here about reduce() function, the first parameter acc is the storage equivalent to the sum variable, curr refers to each element of arrays, acc+curr is the operation and 0 is the initial value of acc

const numbers = [4, 5, 6, 7, 12, 45];

// let sum = 0;
// for(const num of numbers){
//     sum = sum + num
// }

const total = numbers.reduce((acc, curr) => acc + curr, 0);
const total1 = numbers.reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(total);
console.log(total1);
