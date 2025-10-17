/* finding biggest from array */

function biggest(arr){
  let max = arr[0];
  for(let elem of arr){
    if(elem > max){
      max=elem;
    }
  }
  return max;
}


let array = [12,14,65,11,9,87,56,98,123,54,34,12,97];
let output = biggest(array);
console.log(output);