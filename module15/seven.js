/* break and continue */


let whenToStop = 980;
for (let i = 1; i>0;i++){
  console.log(i);
  if(i === whenToStop){
    break;
  }
}

let whichToSkip = 12;
for (i=0;i<=15;i++){
  if(i === whichToSkip){
    continue;
  }
  console.log(i);
}


//odd number using continue

for(let i =1 ;i<=100;i++){
  if(i%2==0){
    continue;
  }
  console.log(i);
}

//number divisible by 6 using continue

for(let i = 0 ;i<=100;i++){
  if(i%6!=0){
    continue;
  }
  console.log(i);
}