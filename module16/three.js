/* we learn about slice,split,join,concat and includes function */

let address = "Dhaka Bangladesh";
let district = address.slice(0, 8);
console.log(district);

let str = "i go to northern university cse department 7th semester C section";
let arr = str.split(" "); // split the string into array based on single whitespace
console.log(typeof arr); // object
console.log(arr);

let str2 = "a,b,c,d,e,f,g,h,i,j,k";
let arr2 = str2.split(","); // split the string into array based on comma
console.log(typeof arr2); //object
console.log(arr2);

let arr3 = ["dhaka", "mymensingh", "sylhet", "khulna", "coxsbazar"];
let result = arr3.join(""); //return a string , where array element are combined with '';
console.log(result);
console.log(typeof result);

let arr4 = ["dhaka", "mymensingh", "sylhet", "khulna", "coxsbazar"];
let result1 = arr4.join("^"); //return a string , where array element are combined with '^', you can use '', ',','&','*' etc;
console.log(result1);
console.log(typeof result1);

str = "eid";
str2 = "mubarak";
let str3 = str + " " + str2;
console.log(str3);
let str4 = str.concat(" ").concat(str2); // add str,str2 and a whitespace
// str4 = str.concat(' ',str2); // work same of previous line
console.log(str4);

console.log(str4.includes("eid"));

arr4[1] = "hahaha";
console.log(arr4);
