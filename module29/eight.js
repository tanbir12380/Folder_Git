/*  we learn here to print keys,values,entries of an object, delete property */

const employee = {
  name: "Raja Rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 27,
};

const keys = Object.keys(employee);
const values = Object.values(employee);
const entries = Object.entries(employee);
console.log(keys);
console.log(values);
console.log(entries);

delete employee.experience;
console.log(employee);

// Object.freeze(employee); // prevent adding, updating and deleting any property
Object.seal(employee); // prevent adding and deleting any property, but allow updating

employee.hobby = "gardening"; // adding new property
employee.salary += 4500;
console.log(employee);
