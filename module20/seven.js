/* we learned about date in js */

const today = new Date();
console.log(today.getMonth());
console.log(today.getDay());
console.log(today);
console.log(today.toLocaleString("en-GB"));
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

const date = new Date("2002-12-02");
console.log(date.getMonth());
console.log(date.getDay());
console.log(date);
console.log(date.toLocaleString("en-GB"));

const specificDate = new Date(2091, 11, 24);
console.log(specificDate.getMonth());
console.log(specificDate.getDay());
console.log(specificDate);
console.log(specificDate.toLocaleString("en-GB"));
