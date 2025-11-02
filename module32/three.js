// we learned how to fetch json

/*
fetch() is a built-in JavaScript function used to make HTTP requests (GET, POST, etc.) to servers. It Returns a Promise, which represents a value that will be available in the future (asynchronous).

.then() is a method of Promises. It runs after the Promise resolves, letting you handle the result. It Accepts a callback function which receives the resolved value.
*/

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log(data)); // Handle the actual data

// Using normal functions with fetch

fetch("https://jsonplaceholder.typicode.com/todos/1") // promise of response
  .then(function (response) {
    // promise of json data
    return response.json();
  })
  .then(function (data) {
    // Handle the actual JSON data
    console.log(data);
  });
