//problem1
function totalFine( fare ) {
          if(typeof fare !== 'number'  || fare <= 0){
            return 'Invalid';
          }
          else{
            let fine = fare + fare*20/100 + 30;
            return fine;
          }
}




//2nd problem
function  onlyCharacter( str ) {
      if(typeof str !== 'string'){
        return 'Invalid';
      }  
      else{
        let arr = str.split(' ');
        let res =arr.join('');
        res = res.toUpperCase();
        return res;
      }
}




//3rd problem
function  bestTeam( player1, player2 ) {
         if(typeof player1 !== 'object'  || typeof player2 !== 'object'  ){
          return 'Invalid' ;
         }
         else if (Array.isArray(player1)===true  || Array.isArray(player2)===true){
           return 'Invalid' ;
         }
          let player1Card = player1.foul + player1.cardY + player1.cardR;
          let player2Card = player2.foul + player2.cardY + player2.cardR;
          if(player1Card < player2Card){
            return player1.name;
          }
          else if(player1Card === player2Card){
            return 'Tie';
          }
          else{
            return player2.name;
          }       
}



//4th problem
function  isSame(arr1 , arr2 ) {
         if(Array.isArray(arr1) === false ||  Array.isArray(arr2) === false){
          return 'Invalid';
         }

         let areSame = true;

         if(arr1.length !== arr2.length){
               areSame = false;
         }
         else {
           for(let i = 0;i<arr1.length;i++){
            if(arr1[i] !== arr2[i]){
              areSame = false;
              break;
            }
           }
         }
        return areSame;     
        }



//5th problem
function  resultReport( marks ) {
        if(Array.isArray(marks)===false){
          return 'Invalid';
        }
        let sum = 0;
        let avg = 0;
        let pass1 = 0;
        let fail1 = 0;
        for(let mark of marks){
          sum = sum + mark;
          if(mark >=40){
            pass1++;
          }
          else{
            fail1++;
          }
        }
        avg = sum / marks.length;
        avg = Math.round(avg);

        let obj = {
          finalScore: avg,
          pass:pass1,
          fail:fail1
        }

        if(marks.length === 0){
          obj.finalScore = 0;
        }

        return obj;
}


