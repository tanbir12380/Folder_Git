// 🧠 JavaScript: Callback Functions

/*
🔹 Purpose:
A callback function is a function passed as an argument to another function.
It is “called back” inside the outer function to execute later.
Useful for asynchronous code, events, or array operations.
*/

// =====================
// ✅ Example 1: Simple callback
function inviteFriend(callbackFn, friendName, isAvailable) {
  console.log("Friend name:", friendName);

  if (isAvailable) {
    // Call the callback function with the friend’s name
    callbackFn(friendName);
  } else {
    console.log("Friend is not available 😢");
  }
}

// Callback function
function sendMessage(person) {
  console.log("Sending message to:", person);
}

// ✅ Usage
inviteFriend(sendMessage, "Rony", true);
// Output:
// Friend name: Rony
// Sending message to: Rony

inviteFriend(sendMessage, "Rony", false);
// Output:
// Friend name: Rony
// Friend is not available 😢

/*
🔹 Summary:
- A callback is passed as a function reference (without ())
- It can be called inside another function when needed
- Useful in event handling, asynchronous code, and array methods like map, filter, reduce
- Arrow functions can also be used as callbacks
*/
