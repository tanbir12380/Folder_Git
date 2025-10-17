/* conditional statement in function */

function oddChecker(number){
  if(number%2==1){
    return 'odd';
  }
  else{
    return 'even';
  }
}

function oddChecker2(number){
  if(number%2==1){
    return 'odd';
  }
    return 'even';
}  // both functions work same

let str = oddChecker(9);
console.log(str);

console.log(oddChecker(76)); // shortcut