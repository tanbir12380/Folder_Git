/* finding min value from an array */

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
const cheapest = getMin(prices);
console.log("cheapest one is: ", cheapest);

// cheapest phone finding from array of phone objects

const phones = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xiaomi", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestPhone(phones);
console.log("Cheapest phone is: ", cheap["name"]);
