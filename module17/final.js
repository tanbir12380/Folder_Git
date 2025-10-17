/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var res = area/2;
console.log(res);



/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money>=25000){
  console.log("Laptop");
}
else if(money>=10000){
  console.log("Cycle");
}
else{
  console.log("Chocolate");
}



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for(let i = 1;i<=lastDay;i++){
   if( i%3 === 0 ){
    console.log(i,'-','medicine');
   }
   else{
    console.log(i,'-','rest');
   }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

var l = fileName.length;

if (fileName[0] == '#') {
  console.log("Store");
} 
else if (l >= 4 && fileName[l - 4] == '.' && fileName[l - 3] == 'p' && fileName[l - 2] == 'd' && fileName[l - 1] == 'f') {
  console.log("Store");
} 
else if (l >= 5 && fileName[l - 5] == '.' && fileName[l - 4] == 'd' && fileName[l - 3] == 'o' && fileName[l - 2] == 'c' && fileName[l - 1] == 'x') {
  console.log("Store");
} 
else {
  console.log("Delete");
}




/** Problem 05 - ( PH Email Generator ) */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var str = student.name + student.roll + '.' + student.department + '@ph.ac.bd';
console.log(str);




/** Problem 06 : (Current Salary ) */
var experience = 30;
var startingSalary = 45000;
//write your code here

var finalSalary = startingSalary;

for(let i=0;i<experience;i++){
  finalSalary += finalSalary*5/100;
}

console.log(finalSalary.toFixed(2));

