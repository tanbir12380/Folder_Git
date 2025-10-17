/* we learn here about destructuring */

// basic style
const product = { name: "shirt", price: 500, quantity: 7 };
const discount = (product.price * 20) / 100;
const yourPay = product.price - discount;
const vatAmount = (product.price * 7) / 100;
const totalAmount = yourPay + vatAmount;
console.log(discount, yourPay, vatAmount, totalAmount);

// intermediate style
let price = product.price;
const discount1 = (price * 20) / 100;
const yourPay1 = price - discount1;
const vatAmount1 = (price * 7) / 100;
const totalAmount1 = yourPay1 + vatAmount1;
console.log(discount1, yourPay1, vatAmount1, totalAmount1);

// advanced technique, here comes destructuring
const { name, ProductPrice, quantity } = {
  name: "shirt",
  ProductPrice: 500,
  quantity: 7,
};
console.log(name, ProductPrice, quantity);

const discount2 = (ProductPrice * 20) / 100;
const yourPay2 = ProductPrice - discount2;
const vatAmount2 = (ProductPrice * 7) / 100;
const totalAmount2 = yourPay2 + vatAmount2;
console.log(discount2, yourPay2, vatAmount2, totalAmount2);

// you can assign an object into The destructuring pattern
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White",
};
let { color, model, brand: CarName, wow = "wow" } = car; // here brand variable is renamed into CarName, and wow variable gets default value
console.log(model, CarName, color, wow);

// destructuing can be applied in array too
let [first, second, third] = [12, 76, 45, 90, 67]; // first indicate to 12 , second to 76 and third to 45
console.log(first, second, third);

let arr = [45, 87, 98, 63];
let [fir, sc = 45, th, fur, fiv = 76] = arr; // array can be assigned into destructuing pattern too, default value can be applied too

console.log(fir, sc, th, fur, fiv);
