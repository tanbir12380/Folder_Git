// 🧠 JavaScript: Non-Primitive Values & Pass-by-Reference

/*
🔹 Non-primitive values in JS: Objects, Arrays, Functions
🔹 These are stored in memory by reference, not by value
🔹 When passed to a function, changes inside the function affect the original object/array
*/

// =====================
// Example
const manik = { name: "manik", balance: 5000 };
const roton = { name: "roton", balance: 40000 };

console.log("Before function call:", manik, roton);

function totalMoney(person1, person2) {
  // Modifying the objects inside the function
  person1.balance = 0; // manik.balance becomes 0
  person2.balance = person2.balance / 2; // roton.balance becomes 20000

  const total = person1.balance + person2.balance; // 0 + 20000
  return total;
}

const balance = totalMoney(manik, roton);
console.log("Returned balance:", balance);

console.log("After function call:", manik, roton);
// Output shows manik.balance = 0 and roton.balance = 20000

// 🧠 JavaScript: The `arguments` Object & Rest Parameters

/*
🔹 Purpose:
- `arguments` is an array-like object available inside **non-arrow functions**
- It contains all the arguments passed to the function
- Useful when the number of arguments is unknown
*/

// =====================
// Example
function add(a, b) {
  console.log("arguments object:", arguments);
  // Array-like, not a real array

  const params = [...arguments]; //return array
  const params1 = { ...arguments }; //return object

  console.log("Converted to array:", params);
}

add(88, 77, 7, 5, 3);

/*
Output:
arguments object: [88, 77, 7, 5, 3]
Converted to array: [88, 77, 7, 5, 3]
*/
