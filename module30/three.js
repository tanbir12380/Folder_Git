// we learned here about map in array, the map Calls a defined callback function on each element of an array, and returns an array that contains the results

const numbers = [4, 8, 2, 3, 5];

//traditional way
const doubledArray = [];
for (const num of numbers) {
  const result = num * 2;
  doubledArray.push(result);
}

//another option
const doubleIt = (x) => x * 2;
const doubledArr1 = numbers.map(doubleIt);

//the best way
const doubled = numbers.map((x) => x * 2);

//another examples
const fiveTimes = numbers.map((num) => num * 5);

const squared = numbers.map((num) => num * num);

const friends = ["Zaved", "Pavel", "Nobel", "Kodbel"];
const nameLengths = friends.map((name) => name.length);
const firstLetters = friends.map((name) => name[0].toLowerCase());

//The callback function .map() can take up to 3 parameters (element, index, array)
const result = numbers.map((a, b) => {
  console.log(b);
  return b;
});
// we can use traditional function too instead arrow function here
const result1 = numbers.map(function (a, b) {
  console.log(b);
  return b;
});

console.log(result);
console.log(result1);
