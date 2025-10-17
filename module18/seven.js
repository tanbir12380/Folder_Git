/* when a non primitive variable(var1) is assigned into another primitive variable(var2) , the var2 doesn't copy the value and store it in 
different memory space,  but it point to same memory address of var1 , as a result changing any value of var1 or var2 affect both */


let arr1 = [ 61, 27, 48, 41, 10, 42, 43, 34, 15 ];
let arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr2[3]=999;

console.log(arr1);
console.log(arr2);

//solution of this issue to copy and store independently

let arr3 =[];
for(let elem of arr1){
  arr3.push(elem);
}
arr3[4]=888; //assigned only into arr3 , not arr1 or arr2
console.log(arr1);
console.log(arr3); 



let arr4 = Array.from(arr1); // create new array with new reference
arr4.push(89);
console.log(arr1);
console.log(arr4); 


let arr5 = [].concat(arr1);
let arr6 =[...arr1];


