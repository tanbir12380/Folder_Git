// object looping was learned today

const employee = {
  name: "Raja Rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 22,
};

for (const key in employee) {
  const value = employee[key];
  console.log(key, value);
}

const keys = Object.keys(employee);
for (const key of keys) {
  const value = employee[key];
  console.log(key, value);
}
