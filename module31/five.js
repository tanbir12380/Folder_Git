// 🧠 JavaScript: Variable Scopes

/*
🔹 Purpose:
Scope defines where variables and functions are accessible.
JavaScript has 4 main scopes:
1. Global Scope
2. Block Scope
3. Function (Local) Scope
4. Temporal Dead Zone (TDZ)
*/

// =====================
// ✅ 1. Global Scope
// Declared outside any block or function → accessible everywhere
const name = "Tom Hanks";
console.log("Global variable:", name); // ✅ Accessible anywhere after declaration

// =====================
// ✅ 2. Block Scope
// Variables declared with let/const inside {} exist only within that block
if (true) {
  const role = "Actor";
  console.log("Inside if block:", role, name); // ✅ Accessible here
}
// console.log(role); // ❌ ReferenceError → block-scoped variable

// Example with loop
for (let i = 1; i <= 3; i++) {
  const message = `Iteration ${i}`;
  console.log(message); // ✅ Works
}
// console.log(i, message); // ❌ Both undefined outside loop → block scope

// =====================
// ✅ 3. Function (Local) Scope
// Variables inside a function are not accessible outside it
function doMath(a, b) {
  const sum = a + b;
  const bonus = 10;
  const total = sum + bonus;

  console.log("Inside function:", sum, total);

  // 🔹 Nested Function
  // Accessible only within its parent function
  // But it can access all variables from the outer (parent) function
  function doubleIt(x) {
    console.log("Accessing outer variable total:", total); // ✅ Works due to lexical scope
    return x * 2;
  }

  console.log("Double of 450:", doubleIt(450)); // ✅ Can be called inside parent
}

doMath(88, 999); // ✅ Works
// console.log(sum);        // ❌ ReferenceError
// console.log(doubleIt()); // ❌ ReferenceError → only accessible inside doMath()

// =====================
// ✅ 4. Temporal Dead Zone (TDZ)
// let/const are hoisted but not initialized → can’t be accessed before declaration
// console.log(city); // ❌ ReferenceError → in TDZ
let city = "Balur Ghat";
console.log("City:", city); // ✅ Works fine

// =====================
// 🔹 Key Takeaways
/*
🌍 Global Scope → Accessible anywhere after declaration
📦 Block Scope → let/const live only inside {}
🧮 Function Scope → Variables exist only inside their function
🔁 Loops create block scope for let/const variables
🔒 TDZ → Accessing let/const before declaration causes ReferenceError
🧩 Nested Functions → 
   - Can access parent variables (lexical scope)
   - Not accessible outside their parent function
💡 Tip → Always prefer let/const over var for predictable scope behavior
*/
