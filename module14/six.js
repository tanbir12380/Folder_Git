/*  we learn about multilevel condition  */

var price = 3500;
var discount ;
var payAmount;


if( price>=8000){
  discount = price*20/100;
  payAmount = price - discount;
  console.log("congratulations, you get ", discount, "tk discount");
  console.log("payable amount :", payAmount , "taka");
}

else if( price>=6000){
  discount = price*15/100;
  payAmount = price - discount;
  console.log("congratulations, you get ", discount, "tk discount");
  console.log("payable amount :", payAmount , "taka");
}
else if( price>=4000){
  discount = price*10/100;
  payAmount = price - discount;
  console.log("congratulations, you get ", discount, "tk discount");
  console.log("payable amount :", payAmount , "taka");
}

else if( price>=2000){
  discount = price*5/100;
  payAmount = price - discount;
  console.log("congratulations, you get ", discount, "tk discount");
  console.log("payable amount :", payAmount , "taka");
}

else{
  discount = price*0/100;
  payAmount = price - discount;
  console.log("congratulations, you get ", discount, "tk discount");
  console.log("payable amount :", payAmount , "taka");
}
