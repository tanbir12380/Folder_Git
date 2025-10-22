// 🧠 JavaScript: Truthy vs Falsy and the use of ! and !!

/*
---------------------------------------------
🔹 Falsy Values (only 7 in JavaScript)
---------------------------------------------
false
0
-0
0n          // BigInt zero
""          // Empty string
null
undefined
NaN

👉 Everything else is Truthy.
Examples of truthy values:
"0", " ", [], {}, true, "hello", 42, etc.
*/

/*
---------------------------------------------
🔹 Logical NOT (!) and Double NOT (!!)
---------------------------------------------
!value   → Converts value to Boolean, then inverts it.
!!value  → Converts value to its actual Boolean form (true/false).
!value -> give opposite boolean of the value
!!value -> give the actual boolean conversion of the value

Examples:
!true       → false
!0          → true
!!"hello"   → true
!!0         → false
*/

/*
---------------------------------------------
🔹 Practical Demo
---------------------------------------------
*/

let data;

// Try changing the value of `data` to test truthy/falsy behavior:
data = 0;
data = ""; // falsy: empty string
data = " "; // truthy: contains whitespace
data = "0"; // truthy: non-empty string
data = false; // falsy
data = true; // truthy
data = null; // falsy
data = {}; // truthy: object
data = []; // truthy: array

console.log("value of data:", data);

// ✅ Normal check — executes if `data` is truthy
if (data) {
  console.log("→ data is truthy");
} else {
  console.log("→", data, "is falsy");
}

// ✅ Use ! to handle falsy values
if (!data) {
  console.log("→ Inside if block with a falsy value");
}

// ✅ Use !! to explicitly convert to Boolean
if (!!data === true) {
  console.log("→ data is explicitly true (via !!)");
}
