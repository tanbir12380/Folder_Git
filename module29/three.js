/* We learned about template string */


const poem = 'amm pata jora jora \n'+
'marbu chabuk chorbe ghora\n'+
'ore khoka ghure dara \n'+
'asche amar pagla ghora';
console.log(poem);


const poem1 = `Amm pata jora jora
marbo chabuk chorbe ghora
ore babu ghure dara
asche amar pagla ghora`;
console.log(poem1)



function sum (num1, num2){
    const result = num1 + num2;
    const output = 'sum of ' + num1 + ' and ' + num2 + ' is equal to ' + result;
    const output1 = `sum of ${num1} and ${num2} is equal to ${result}`
    console.log(output);
    console.log(output);
}
sum(5,7);