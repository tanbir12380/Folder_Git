/* discount calculation based on quantity purchased */

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(201);
console.log(total);



//layered discount
/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/

function layeredDiscount(quantity){
   if(quantity<=100){
    let total = quantity*100;
    return total;
   }
   else if (quantity<=200){
    let total = 100*100 + (quantity-100)*90;
    return total;
   }
   else{
    let total = 100*100 + 100*90 + (quantity-200)*70;
    return total;
   }
}

let price = layeredDiscount(500);
console.log(price);