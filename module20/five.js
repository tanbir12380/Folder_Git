/* removing duplicate elements from array with function*/


function dupRemove(arr){
  let noDup = [];
  for(let element of arr){
    if(noDup.includes(element)===false){
      noDup.push(element);
    }
  }
  return noDup;
}

let array = [23,34,54,67,24,76,34,66,54,23];
let array1 = ['ab','bc','ca','bc','ca','bc'];

let result1 = dupRemove(array);
let result2 = dupRemove(array1);

console.log(result1);
console.log(result2);