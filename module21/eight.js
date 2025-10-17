/* validating inputs in function */


//checking numbers
function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide numbers'
    }
    const mult = num1 * num2;
    return mult;
}
let result = multiply(5, 'seven');  // Please provide numbers
console.log(result);
result = multiply(5, 23);  // 115
console.log(result);




//checking strings
function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'First name should be a string';
    }
    else if (typeof second !== 'string') {
        return 'Second Name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}
let full = fullName('Akmal'); //Second Name should be a string
console.log(full);
full = fullName('Akmal','jamal'); //Akmal jamal 
console.log(full);




//checking object
function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide an object';
    }
    else if (Array.isArray(product)===true){
      return 'Please provide an object';
    }
    const price = product.price;
    return price;
}

let obj = { 
  name: 'chulkani dandi', 
  price: 35, 
  color: 'blue' };

let price = getPrice(obj); //35
console.log(price);
price = getPrice(5); // Please provide an object
console.log(price);
price = getPrice([23,54,76]); // Please provide an object
console.log(price);





function getSecond(numbers) {
    if(Array.isArray(numbers) === false){
        return 'Please provide an array'
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([45, 61, 2]);
console.log(second);

