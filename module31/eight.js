// 🧠 JavaScript Closures, Returned Functions, and Function Factory Pattern

/*
🔹 Definitions:

Function Factory Pattern:
A function factory pattern is a design approach where a higher-order function acts like a "factory" that creates and returns multiple independent functions, each with its own private state preserved through closures.

Closure: 
A closure is a function that remembers variables from its outer function's scope, even after the outer function has finished executing. It allows the function to maintain private state.

Returned Function: 
A returned function is the inner function returned by a higher-order function. When this function retains access to the outer variables, it becomes a closure instance.

Closure Instance: 
A closure instance is a specific returned function along with its lexical environment, i.e., the private variables it remembers. Each call to the outer function creates a new, independent closure instance.

Higher-Order Function: 
A function that returns another function or takes a function as an argument is called a higher-order function. Often used as a function factory to create multiple closure instances.
*/

/* 
==============================
Example 1: Counter for individual users
==============================
*/
function createCounter() {
  // Higher-order function

  let count = 0;

  return function (user) {
    // Returned function / closure

    count++;
    console.log(`${user}'s count is ${count}`);
  };
}

const rahimCounter = createCounter(); // Closure instance for Rahim
const karimCounter = createCounter(); // Closure instance for Karim

rahimCounter("Rahim"); // Rahim's count is 1
rahimCounter("Rahim"); // Rahim's count is 2
karimCounter("Karim"); // Karim's count is 1
rahimCounter("Rahim"); // Rahim's count is 3
rahimCounter("Rahim"); // Rahim's count is 4
rahimCounter("Rahim"); // Rahim's count is 5
karimCounter("Karim"); // Karim's count is 2
rahimCounter("Rahim"); // Rahim's count is 6

/* 
==============================
Example 2: Banking System (Simulated private balance)
==============================
*/
function createAccount(owner) {
  let balance = 1000;

  return function (amount) {
    balance += amount;
    console.log(`${owner}'s new balance is $${balance}`);
  };
}

const rahimAccount = createAccount("Rahim");
const karimAccount = createAccount("Karim");

rahimAccount(500); // Rahim's new balance is $1500
rahimAccount(-200); // Rahim's new balance is $1300
karimAccount(1000); // Karim's new balance is $2000
rahimAccount(300); // Rahim's new balance is $1600

/* 
==============================
Example 3: Banking System (Simulated private balance)
==============================
*/

function changeBalance() {
  let balance = 0;
  function addBalance(user, dep) {
    balance = balance + dep;
    console.log(`New balance of ${user} is $${balance} \n`);
  }
  return addBalance;
}

let account = changeBalance; // assigning without () means account is same of changeBalance function, but when i add (), it holds what the changeBalance function returns it means AddBalance function

// Create independent closure instances
let fahimAccount = account();
let razinAccount = changeBalance();
let tanbirAccount = changeBalance();

// Use the closures
fahimAccount("Fahim", 2000);
fahimAccount("Fahim", 5000);
razinAccount("Razin", 8750);
tanbirAccount("Tanbir", 6744);
fahimAccount("Fahim", -2400);
razinAccount("Razin", 3750);
tanbirAccount("Tanbir", 12000);
razinAccount("Razin", 4500);
tanbirAccount("Tanbir", 4500);

/*
🔹 Key Takeaways:
1. Closure = Returned function + remembered lexical environment.
2. Each call to the outer function creates a new independent closure instance.
3. Closures are perfect for private state, counters, bank balances, etc.
4. Avoids shared memory and global variables.
*/
