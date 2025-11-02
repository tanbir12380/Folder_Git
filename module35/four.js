// destructuring recap

const arr = ["red", "blue", "orange", "yellow"];
const [one, two, three, four] = arr; // here you can choose any name for variable and they maintain order
console.log(one, two, three, four);

const obj = {
  name: "tanbir",
  age: 78,
  address: "dhaka",
  subject: ["c++", "python", "js"],
  cgpa: 4,
};

const { a, b, c, d } = obj; // wont work, name must be same of property key , and they dont maintain order
console.log(a); //undefined

const { name, age, subject } = obj;
console.log(name, subject);
