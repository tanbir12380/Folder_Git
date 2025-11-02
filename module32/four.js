// fetching a json which is an array of object and applying forEach to print individula indexes of array

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((res) => res.json())
  .then((data) => displayPost(data));

function displayPost(data) {
  data.forEach((inp) => console.log(inp));
}
