// we learn here about shorthand versions of arithmatic operations

var price1 = 30;
// price1 = price1 + 20;
price1 += 20; // both are same
console.log(price1);


var price2 = 100;
// price2 = price2 - 50;
price2 -= 50; // both are same
console.log(price2);

var price3 = 20;
// price3 = price3 *20;
price3 *= 20; //both are same
console.log(price3);

var price4 = 200;
// price4 = price4 / 10;
price4 /= 10; //both are same
console.log(price4);


// addition of strings
var a = 'eid';
var b = ' mubarak';
var c = a+b;
console.log(c);


//problem in addition, when it is like '40'+20  or 30+'50', javascript consider both as string
 console.log(30+'50');

 //but when it is like (60-'30') or (200 * '4') or  ('1000' / 20)  , here javascript convert the string into the quote into number

 console.log(30-'15'); //work properly
 console.log(100*'30'); // work properly
 console.log('3000'/20); // work properly
