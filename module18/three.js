/* array traverse in reverse order , reverse functions and in-place function idea*/

let arr = [90,56,34,12,67,54,98,23];
let rev = [];
for(let i =0;i<arr.length;i++){
  rev.unshift(arr[i]);
}
console.log(rev);






//another way

arr.reverse(); // store the result into the arr array directly without any assign operator, they are called in-place functions
console.log(arr);


arr.reverse(); // to execute next ways properly


//another way
let rev2 = [];
for(const element of arr){
  rev2.unshift(element);
}
console.log(rev2);




//another way
let rev1 = [];
for(let i = arr.length-1 ; i>=0 ;i--){
  rev1.push(arr[i]);
}
console.log(rev1);



//another way
for(let i = arr.length-1 ; i>=0 ;i--){
  console.log(arr[i]);
}


