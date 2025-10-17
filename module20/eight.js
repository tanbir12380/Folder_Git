/* coping values between variables */


let a = 23;
let b = 98;

let temp = a;
a = b;
b = temp;

console.log(a,b);


//another way 

let x = 34;
let y = 78;
 [x,y]= [y,x];
 console.log(x,y);
