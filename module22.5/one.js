/* function, array in object */

const nayok = {
  name: "Sakib Khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["Apu", "Raaz", "Salman", "aamir"],
  movies: [
    { name: "no. 1", year: 2015 },
    { name: "king khan", year: 2018 },
  ],
  car: {
    brand: "tesla",
    price: 50000000,
    made: 2025,
    manufacturer: {
      name: "tesla",
      ceo: "Elon Mask",
      country: "USA",
    },
  },
  act: function () {
    console.log(this.name);
    console.log("acting like Sakib khan");
  },
};

console.log(nayok);
console.log(nayok.friends);
console.log(nayok.movies);
console.log(nayok.car);
console.log(nayok.car.manufacturer);
nayok.act();

// object like array
const products1 = {
  0: 15,
  1: 56,
  2: 87,
};

console.log(products1[2]);
for (let i = 0; i < 3; i++) {
  console.log(products1[i]);
}

console.log(products1);

// array like object  ,  look at the argument

function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[4]);
}

add(12, 13, 45, 89, 78);
