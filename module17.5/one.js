/* learned about js functions */

function hello(){
  console.log("hello world!");
}

hello(); //function call

function sumMachine(input1 , input2){
  let sum = input1+input2;
  console.log(sum);
}

let a = 24;
let b = 34.5;
sumMachine(a,b);


function sumMachine1(input1 , input2){
  let sum = input1+input2;
  return sum;
}

let c = 25.5;
let d = 34.5;
let result = sumMachine1(c,d);
console.log("result is :",result);