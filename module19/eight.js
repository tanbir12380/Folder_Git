/* sum of array with function */

function getSum(arr){
  let sum = 0;
  for (let elem of arr){
     sum = sum + elem;
  }
  return sum;
}

let Array = [8,7,4,12,9,45];
console.log(getSum(Array));