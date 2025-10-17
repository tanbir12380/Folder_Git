/* average of odd number of an array through a function */


function avgOdd(arr){
  let odd =[];
  let sum =0;
  for(let i =0;i<arr.length;i++){
    if(arr[i]%2 !==0){
      odd.push(arr[i]);
      sum = sum + arr[i];
    }
  }
  console.log("odd elements: ", odd);
  let avg = sum / odd.length;
  console.log("sum :", sum);
  console.log("average : ",avg);
}


let array = [45,34,23,76,89,13,44,78,34,98,99,22,55,44,67,91];
avgOdd(array);