/*  uppercase() and lowercase() functions and trim function 
The trim() method removes whitespace from both the beginning and the end of a string — but not from the middle.
*/

let str1 = "Abcd";

console.log(str1);
str1 = str1.toUpperCase();
console.log(str1);
str1 = str1.toLowerCase();
console.log(str1);

let str5 = "   abc    ";
let str6 = "     abc";

if (str5.trim() == str6.trim()) {
  console.log("worked");
} else {
  console.log("not worked");
}
