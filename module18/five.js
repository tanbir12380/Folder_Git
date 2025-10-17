/* array of objects */

let array_of_object = [{},{},{},{}];//structure

let arrObj = [
{name:'kamrul',role:'UI/UX',salary:35000},
{name:'hasan',role:'Frontend',salary:50000},
{name:'Tanbir',role:'Backend',salary:65000},
{name:'TanbirHasan',role:'fullstack',salary:95000}
]

console.log(arrObj);
console.log(arrObj[3]);

console.log(arrObj[2].name);


for(let person of arrObj){
  console.log(person);
}

for(let person of arrObj){
  console.log(person.name , ' is a ', person.role, ' paid ', person.salary,'TK per month' );
}

for(let employee of arrObj){
let name = employee.name;
let salary = employee.salary;
console.log(name,' : ',salary,'TK'); 
}

arrObj[1].name = 'Unknown';
console.log(arrObj[1]);