/* array of array or 2D array */

let array_of_array =[[],[],[],[]];//structure

let arr = [
  [12, 42, 43, 34, 15],
  [61, 27, 48, 59, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

console.log(arr);
console.log(arr[1]);
console.log(arr[2][3]);


arr[1][3]=41;
console.log(arr);

arr[2].pop();
console.log(arr);
arr[2].push(88); 
console.log(arr);

for(let i =0;i<arr.length;i++){
  console.log(arr[i]);
}