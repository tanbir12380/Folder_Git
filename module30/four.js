// we learned here about foreach(it Performs the specified action for each element in an array, and dont retrun any result)
// filter,which returns only those values of an array which fullfill certain conditions, remember ,if the conditions are true than return the element of array itself not result(true or false)
// find, it Returns the value of the first element in the array which fullfill the condition, and undefined otherwise.

//foreach
const friends = ["Zaved", "Pavel", "Nobel", "Kodbel"];
const nameLengths = friends.forEach((name) => {
  let len = name.length;
  console.log(len);
});

const numbers = [
  12, 87, 45, 63, 29, 71, 54, 6, 38, 99, 15, 42, 76, 33, 58, 91, 24, 68, 11, 80,
  7, 49, 53, 36, 95,
];

//filter
let filterdValues = numbers.filter((x) => x < 90 && x > 30);
let filterdValues1 = numbers.filter(function (x) {
  let bool = x < 90 && x > 30;
  return bool;
});
console.log(filterdValues);
console.log(filterdValues1);

let evenValues = numbers.filter((x) => x % 2 == 0);
evenValues.sort((a, b) => a - b);
console.log(evenValues);

//find
let firstEven = numbers.find((x) => x % 2 == 0);
console.log(firstEven);

//map,filter and find
const students = [
  { id: 1, name: "abul", marks: 50 },
  { id: 2, name: "Nabul", marks: 85 },
  { id: 3, name: "kabul", marks: 95 },
  { id: 4, name: "dabul", marks: 15 },
];

const names = students.map((student) => student.name);
const goodStudents = students.filter((student) => student.marks > 80);
const goodStudent = students.find((student) => student.marks > 80);
console.log(names);
console.log(goodStudents);
console.log(goodStudent);
