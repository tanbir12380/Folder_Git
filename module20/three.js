/* leap year finder */


function leap(year){
  if(year % 100 !==0 && year%4===0){
    console.log('leap');
  }
  else if(year%400===0){
    console.log('leap');
  }
  else{
    console.log('not leap');
  }
}

leap(2028);