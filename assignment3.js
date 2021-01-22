// Github link: https://github.com/MohammedArmanKhan/assignment3

// Kilometer to meter conversion

function kilometerToMeter(kilometer){
    if(kilometer > 0){   // check input validity
     var meter = kilometer * 1000;
     return meter;
    }
    else{
        return "Input is Invalid"
    }
 }

 // Budget calculation
 
 function budgetCalculator(watch, phone, laptop){
     if(watch > 0 && phone > 0 && laptop > 0){  // check input validity
     var price1 = watch * 50;
     var price2 = phone * 100;
     var price3 = laptop * 500;
     var total = price1 + price2 + price3;
     return total;
     }
     else{
         return "Input is Invalid"
     }
 }

 // Hotel cost calculation
 
 function hotelCost(day){
     var totalExpense = 0;
     
    if(day > 0){  // check input validity
 
     //First condition at 100 taka per day
     if(day <= 10){
         totalExpense = day * 100;
     }
     
     // Second condition at 80 taka per day
     else if(day <= 20){
         var firstExpense = 10 * 100;
         var secondOffer = day - 10;
         var secondExpense = secondOffer * 80;
         totalExpense = firstExpense + secondExpense;
     }
 
     // Third condition at 50 taka per day
     else{
        var firstExpense = 10 * 100;
        var secondExpense = 10 * 80;
        var thirdOffer = day - 20;
        var thirdExpense = thirdOffer * 50;
        var totalExpense = firstExpense + secondExpense + thirdExpense;
     }
     return totalExpense;
    }
    else{
        return "Input is Invalid";
    }
 }
 var cost = hotelCost(30);
 
 // Mega named friend
 
 function megaFriend(friends) {
 
     var largest = friends[0];
   
     for(var i = 0; i < friends.length; i++) {
         var friendList = friends[i];
        if(friendList.length >= largest.length) {
          largest = friendList;
           } 
        }
     return largest;
   }