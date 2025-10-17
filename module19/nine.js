/* even number of an array returned as array */

function evenOnly(arr){
  let newArr = [];
  for(let i =0;i<arr.length;i++){
    if(arr[i]%2==0){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let Array = [34,23,45,12,87,98,44,80];
let evenArray= evenOnly(Array);
console.log(evenArray);



//sum of even numbers 

function getEvenSum(arr){
  let sum = 0;
  for (let elem of arr){
     if(elem%2==0){
      sum = sum + elem;
     }
  }
  return sum;
}

let Array1 = [8,7,4,12,9,45];
console.log(getEvenSum(Array1));