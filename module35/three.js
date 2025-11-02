// array methods recap

const mobiles = [
  {
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 1200,
    color: "Silver",
    battery: "3200mAh",
    ram: "8GB",
    storage: "256GB",
    camera: "48MP",
    os: "iOS 17",
  },
  {
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1100,
    color: "Black",
    battery: "5000mAh",
    ram: "12GB",
    storage: "512GB",
    camera: "200MP",
    os: "Android 14",
  },
  {
    name: "Pixel 9 Pro",
    brand: "Google",
    price: 950,
    color: "White",
    battery: "4600mAh",
    ram: "12GB",
    storage: "256GB",
    camera: "50MP",
    os: "Android 14",
  },
  {
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    price: 1750,
    color: "Silver",
    battery: "6200mAh",
    ram: "16GB",
    storage: "256GB",
    camera: "48MP",
    os: "iOS 17",
  },
  {
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 800,
    color: "Blue",
    battery: "4500mAh",
    ram: "12GB",
    storage: "256GB",
    camera: "48MP",
    os: "Android 14",
  },
  {
    name: "Xperia 1 V",
    brand: "Sony",
    price: 1100,
    color: "Black",
    battery: "5000mAh",
    ram: "12GB",
    storage: "512GB",
    camera: "48MP",
    os: "Android 14",
  },
  {
    name: "Mi 14 Pro",
    brand: "Xiaomi",
    price: 700,
    color: "Gray",
    battery: "4700mAh",
    ram: "12GB",
    storage: "256GB",
    camera: "50MP",
    os: "Android 14",
  },
  {
    name: "Moto Edge 60",
    brand: "Motorola",
    price: 600,
    color: "Silver",
    battery: "4400mAh",
    ram: "8GB",
    storage: "128GB",
    camera: "50MP",
    os: "Android 14",
  },
  {
    name: "Realme GT 6",
    brand: "Realme",
    price: 500,
    color: "Blue",
    battery: "4500mAh",
    ram: "12GB",
    storage: "256GB",
    camera: "64MP",
    os: "Android 14",
  },
];

let prices = mobiles.map((mobile) => mobile.price); // return an array containing price of all object
console.log(prices);

mobiles.forEach((mobile) => {
  console.log(
    `new price of ${mobile.name} is ${mobile.price + 0.15 * mobile.price}`
  );
});

let Apples = mobiles.filter((product) => product.brand === "Apple");
console.log(Apples);

let FirstAppleofList = mobiles.find((product) => product.brand === "Apple");
console.log(FirstAppleofList);
