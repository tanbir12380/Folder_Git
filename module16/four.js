//reversing the string with loop and reverse function

let str = "Bangladesh";
let reversed = '';
for(let char of str){
  reversed = char + reversed;
}
console.log(reversed);


//2nd technique
reversed = '';
for(let i =0;i<str.length;i++){
  reversed = str[i]+reversed;
}
console.log(reversed);


//3rd technique
reversed = reversed.split('').reverse().join('');
console.log(reversed);


let arr = [1,3,5,12,54,23,55];
let rarr= arr.reverse();
console.log(rarr);
let sarr = rarr.join('');
console.log(sarr);