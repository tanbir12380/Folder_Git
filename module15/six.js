//odd numbers between 1 to 100

for(let i =1; i<=100;i++){
  if(i%2===1){
    console.log(i);
  }
}

for(let i =1; i<=100;i++){
  if(i%2!==0){
    console.log(i);
  }
}

for(let i =1; i<=100;i+=2){
    console.log(i);
  
}

// number between 1 to 100 divisible by 5

for(let i=0; i<100;i++){
  if(i%5===0){
    console.log(i);
  }
}

// number between 1 to 100 divisible by 5 or 3

for(let i=0; i<100;i++){
  if(i%5===0 || i%3===0){
    console.log(i);
  }
}

// number between 1 to 100 divisible by 5 and 3

for(let i=0; i<100;i++){
  if(i%5===0 && i%3===0){
    console.log(i);
  }
}

//sum of numbers between 1 to 100 divisible by 7
let sum = 0;
for(let i =0;i<100;i++){
if(i%7===0){
  sum+=i;
}
}
console.log(sum);