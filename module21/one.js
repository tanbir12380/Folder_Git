/* comparing three variable manually */

function biggest (one,two,three){
  if(one>two && one>three){
    console.log(one,"is the biggest");
  }
  else if(two>one && two>three){
    console.log(two,"is the biggest");
  }
  else{
    console.log(three, "is the biggest");
  }
}

biggest(34,65,11);