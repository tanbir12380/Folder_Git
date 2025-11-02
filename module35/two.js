function abc(...rest) {
  console.log(rest); // rest will be an array
  let sum = 0;
  for (let num of rest) {
    sum += num;
  }
  return sum;
}

// Suppose you have an array
let i = [1, 4, 7, 8, 9, 45];

// Send all elements of the array as arguments
let result = abc(...i);
console.log(result); // Output: 74

let result2 = abc(4, 7, 34, 56, 87, 13);
console.log(result2);
