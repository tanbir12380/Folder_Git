/* learn about use of ... spread operator */
const numbers = [87, 118, 5, 91];
console.log(numbers);
console.log(...numbers);

const max = Math.max(numbers); // the max function wich numbers separated by comma not direct array
console.log(max);
const max1 = Math.max(...numbers); //  ... returns numbers of array
console.log(max1);

const original = [1, 2, 3];
const copy = [...original]; // ... returns the values only  editing on copy wont affect original array
const copy1 = [4, 7, ...original, 9, 7, 2];
copy.push(8);
console.log(original);
console.log(copy);
console.log(copy1);

const ages = [45, 45, 1];
const prices = [98, 65, 45];
const all = [...ages, 5555, ...prices]; // combines two arrays

console.log(all);

// ... works similarly with objects
const person = {
  name: "Alice",
  age: 25,
  gender: "female",
  occupation: "Software Developer",
};

const student = {
  name1: "Sara",
  age1: 20,
  grade: "A",
  subjects: ["Math", "Physics", "English"],
  isPassed: true,
};

const person1 = { who: "unknown", ...person };
console.log(person1);

const stu_person = {
  ...person,
  ...student,
}; // two object are joined , remember same same properties are not allowed,

console.log(stu_person);
