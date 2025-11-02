const mobile = {
  name: "Galaxy S24 Ultra",
  brand: "Samsung",
  price: 1100,
  color: "Black",
  battery: "5000mAh",
  ram: "12GB",
  storage: "512GB",
  camera: "200MP",
  os: "Android 14",
};

const jsondata = JSON.stringify(mobile);
console.log(jsondata);

const objectdata = JSON.parse(jsondata);
console.log(objectdata);

const keys = Object.keys(mobile);
const values = Object.values(mobile);

console.log(keys);
console.log(values);
