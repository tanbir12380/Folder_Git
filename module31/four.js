// we learned here about == and ===  in js  and about toString() function
/*
---------------------------------------------------------
🔹 1. Strict Equality (===)
---------------------------------------------------------
- Checks both **type** and **value**.
- No type conversion is done.
- If the types differ, result is always false.

📘 Examples:
*/
console.log(2 === 2); // true  → same type & value
console.log(2 === "2"); // false → number vs string
console.log(1 === 2); // false → value differs
console.log(true === 1); // false → boolean vs number
console.log(false === 0); // false → boolean vs number
console.log(null === undefined); // false → different types
console.log(0 === ""); // false → number vs string
console.log([] === ""); // false → array vs string

/*
Summary:
=== → First checks type.
     If type differs → false.
     If type same → compare value.
*/

/*
---------------------------------------------------------
🔹 2. Loose Equality (==)
---------------------------------------------------------
- Performs **type coercion (conversion)** before comparing.
- Converts values to a common type, then checks equality.

📘 Conversion Rules:
- String ↔ Number → String converted to Number
- Boolean → Number (true → 1, false → 0)
- null == undefined → true
- NaN is never equal to anything (even itself)
*/

console.log(2 == 2); // true
console.log(2 == "2"); // true → '2' → 2
console.log(1 == "1"); // true → '1' → 1
console.log(1 == 2); // false
console.log(true == 1); // true → true → 1
console.log(false == 0); // true → false → 0
console.log(true == "1"); // true → '1' → 1
console.log(false == "0"); // true → '0' → 0
console.log(null == undefined); // true
console.log(NaN == NaN); // false ❌ (NaN ≠ NaN)

console.log([] == ""); // true → [].toString() → ''
console.log([5] == "5"); // true → [5].toString() → '5'
console.log([5] == 5); // true → '5' → 5

/*
---------------------------------------------------------
🔹 3. Object Comparisons
---------------------------------------------------------
Objects (including arrays) are compared by **reference**, not value.
Even if two objects look identical, they are not equal unless
they reference the same memory location.
*/

console.log({} == {}); // false → different memory refs
console.log([5] == [5]); // false → different memory refs

const p = [4, 5, 7, 8];
const q = p;
console.log(p == q); // true → both point to same array

// 🧠 JavaScript: toString() Method

/*
🔹 Purpose:
Converts a value into a string representation.
Called manually or automatically when JS needs a string.
Syntax: value.toString()
*/

// ✅ Numbers
(42).toString(); // "42"
(10).toString(2); // "1010" → binary
(255).toString(8); //"377"  → octal
(255).toString(16); //"ff" →  hexadecimal

// ✅ Booleans
true.toString(); // "true"
false.toString(); // "false"

// ✅ Arrays → joined with commas
[1, 2, 3].toString(); // "1,2,3"
[5].toString(); // "5"
[].toString(); // ""
