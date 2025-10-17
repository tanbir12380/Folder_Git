/* inch to feet */

function inTofeet(input){
  let feet_init = input/12;
  let feet = parseInt(feet_init);
  let inch = input%12;
  let height = feet + 'ft '+inch+'inch ';
  return height;
}

let result = inTofeet(75);
console.log(result);