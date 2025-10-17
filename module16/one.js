/* different ways of string declaration, length of string, index of string */

let str1 = "bangladesh";
let str2 = "pakistan";
let str3 = `india`;
let str4 = new String("srilanka");

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3); // these 3 are string
console.log(typeof str4); // odject

let len1 = str1.length;
console.log(len1);

//using index of string
let char1 = str1[3];
console.log(char1);
console.log(typeof char1);
console.log(char1.length);

str1[2] = "t"; //will not work, because string is immutable in js
