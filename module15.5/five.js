/* we learn about includes, indexOf, isArray , concat and slice function */

let arr = [
  "gelam",
  "ashlam",
  "balam",
  "kalam",
  "khailam",
  "abraham",
  "andaman",
  "kanlam",
  "hashlam",
];

console.log(arr.includes("hashlam")); // print true
console.log(arr.includes("whoareyou")); //print false

if (arr.includes("khailam")) {
  console.log("shanti");
} else {
  console.log("hungry");
}

console.log(arr.indexOf("kalam")); //print 3
console.log(arr.indexOf("bng")); //print -1

let age = 87;
console.log(Array.isArray(arr)); //print true
console.log(Array.isArray(age)); //print false

let arr1 = ["ama", "mama", "hama", "jama"];
let arr2 = arr.concat(arr1);
console.log(arr2);

let arr3 = arr2.slice(0, 6); //store from 1st element to fifth element of arr2 into arr3
console.log(arr3);
