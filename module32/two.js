// 🧠 JSON (JavaScript Object Notation) and Conversion

/*
🔹 Definition:
JSON is a lightweight data format used to store and exchange data.
- It is text-based and human-readable.
- Similar to JS objects, but only supports data (no methods).
- Key difference: 
  • In JSON, all keys must be enclosed in double quotes ("")
  • In JS objects, quotes around keys are optional unless the key has special characters or spaces.
*/

/*
🔹 Key Points:
1. JS Object → Data structure in JS code (can have methods, symbols)
2. JSON → String representation of data (text only), keys always in ""
3. Converting JS Object to JSON → JSON.stringify()
4. Converting JSON back to JS Object → JSON.parse()
*/

// Example JS object
const userProfile = {
  name: "Selim", // Quotes around keys not compulsory
  favoriteFruit: "Pomegranate",
  favoriteDish: "Halim",
  friends: ["Alim", "Kolim", "Lamim"],
  isRich: false,
  money: 34000,
};

console.log(userProfile, typeof userProfile);
// Output: {…} "object"  → JS Object

// Convert JS object to JSON string
const userProfileJSON = JSON.stringify(userProfile);
console.log(userProfileJSON, typeof userProfileJSON);
// Output: string → JSON string
// Notice: keys are now within double quotes in JSON

// Convert JSON string back to JS object
const parsedProfile = JSON.parse(userProfileJSON);
console.log(parsedProfile, typeof parsedProfile);
// Output: {…} "object" → JS Object again

/*
✅ Summary:
1. JS Object → can contain functions, symbols, and other JS-specific features
2. JSON → Text only, keys must be within double quotes, used for data exchange (APIs, storage)
3. JSON.stringify(object) → Converts JS object to JSON string
4. JSON.parse(jsonString) → Converts JSON string back to JS object
5. Data type changes:
   - Object → JSON string → Object
6. Key difference: quotes around keys are mandatory in JSON, optional in JS objects
*/
