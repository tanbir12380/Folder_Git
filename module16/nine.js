/* loop over object properties */
/*
for of = array 
for in = object */

const computer = {
  brand: "HP",
  model: "EliteBook 850 G8",
  processor: "IntelCore i7-1165G7",
  ram: "16GB",
  storage: 512,
  isLaptop: true,
  isSSD: true,
};

for (let prop in computer) {
  console.log(prop, ":", computer[prop]);
}

//another way

let proArray = Object.keys(computer);
for (let prop of proArray) {
  console.log(prop, ":", computer[prop]);
}

console.log(proArray[0], ":", computer[proArray[0]]);

// in js class names comes in pascal case, like not object, but Object

// new way of declaring object

let obj1 = new Object();
obj1.name = "Tanbir";
obj1.age = 21;
obj1.earning = 0;
obj1.weight = 75;

console.log(obj1);
