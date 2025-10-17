/* various types of parameter */

//string parameter
function lengthCheck(str){
  let length = str.length;
  console.log(str, length);
  if(length%2==0){
    console.log('even');
  }
  else{
    console.log('odd');
  }
}
lengthCheck('Bangladesh');


function ifEvenLength(str){
  let length = str.length;
  console.log(str, length);
  if(length%2==0){
    return true;
  }
return false;
}
console.log(ifEvenLength('Dhaka'));



//boolean parameter
function makeDouble(str,bool){
  if(bool){
    return str*2;
  }
  else{
    return str;
  }
}
console.log(makeDouble(10,true));



//array parameter
function findLength(arr){
  let length = arr.length;
  return length;
}
console.log(findLength([12,65,32,78,90,233,546,111,51]));


//object parameter

function findName(obj){
  let name = obj.name;
  return name;
}

let Person = {
  name:'abdul kadir',
  age:90,
  role:'guard',
  salary:35000
}

console.log(findName(Person));