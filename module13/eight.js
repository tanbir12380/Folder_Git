/*  we learn here to convert a string into number with parseInt , parseFloat function*/

var price1 = 100;
var price2 = parseInt('50');
var price3 = '70';
console.log(typeof price1);
console.log(typeof price2);
console.log(typeof price3);

console.log(price1+price2);

console.log(price1+price2+parseInt(price3));


var price4 = parseInt('55.5'); // convert 55.5 into 55
console.log(price4);

var price5 = parseFloat('70.8');
console.log(typeof price5);
console.log(price5);


var price6 = Number('12'); // convert '12' into 12
var price7 = Number('12.34'); // convert '12.34' into 12.34
console.log(price6);
console.log(price7);

//extra things

var one = 0.1;
var two = 0.2;
var total = one + two;

console.log(total.toFixed(3));  // keep only 3 digit after point and convert into string for no reason

var four = 50/0;  // infinity
console.log(four);

var five = -60/0; // -infinty
console.log(five);


var six = 12 - 'helloWorld' // NaN
console.log(six);

console.log(isNaN(six)); // tell if the variable is NaN or not NaN, here the six is NaN, then we will get true