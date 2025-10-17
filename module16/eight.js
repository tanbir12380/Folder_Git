/* finding keys and values of an object , nested object */

const computer = {
  brand: "HP",
  model: "EliteBook 850 G8",
  processor: "IntelCore i7-1165G7",
  ram: "16GB",
  storage: 512,
  isLaptop: true,
  isSSD: true
};

let keys = Object.keys(computer);
console.log(keys); // shows names of keys
console.log(keys.length); // shows number of keys

let values = Object.values(computer);
console.log(values); // show values of the object



// nested object

const computer2 = {
  brand: "HP",
  model: "EliteBook 850 G8",
  processor: {
    brand: "Intel",
    model: "Core i7-1165G7",
    cores: 4,
    threads: 8
  },
  ram: "16GB",
  storage: ["512GB SSD", "1TB HDD"],
  isLaptop: true,
};



console.log(computer2.processor); //print an object
console.log(computer2.processor.model);
computer2.processor.cores = 6;
console.log(computer2.processor.cores);
console.log(computer2.storage[1]);  // array in object


delete computer2.isLaptop; //delete a property of object
console.log(computer2);



