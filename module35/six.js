// recap of truthy,falsy and ternary

// const show = () => {
//   console.log("show user");
// };

// const hide = () => {
//   console.log("hide user");
// };

// let isActive = true;

// setInterval(function () {
//   let current = isActive;
//   let num = Math.random();
//   if (num > 0.5) {
//     isActive = false;
//   } else {
//     isActive = true;
//   }
//   if (current != isActive) {
//     howIsUser();
//   } else {
//     console.log("hold");
//   }
// }, 10);

// function howIsUser() {
//   isActive ? show() : hide();
// }

function print() {
  console.log("nice");
}

function print1() {
  console.log("ugly");
}

let isTrue = false;
isTrue && print(); // shorter ternary, only call print()  when it is true

isTrue || print1(); //only call print1()  when it is false
