/*push , pop , shift and unshift operations*/


let arr = [84,38,28,83,94,75,39];

console.log(arr);
arr.push(123);//push 123 at the end
arr.push(187,75);//push multiple value
arr.pop();//remove 75
console.log(arr);


let arr1 = ['salam','balam','kalam','manlam'];
arr1.pop()//remove manlam
arr1.push('abraham');//add abraham at the end
console.log(arr1);



arr1.push('andaman');
arr1.push('kanlam');
arr1.push('hashlam');

console.log(arr1);
arr1.shift(); // remove element from the starting or top, here it remove 'salam'
console.log(arr1);

arr1.unshift('ashlam'); // add 'ashlam' at the starting
arr1.unshift('gelam');

console.log(arr1);


