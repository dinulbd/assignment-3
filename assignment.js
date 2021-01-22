//

//  1 **** Converter for Kilometer To Meter.      ****
function kilometerToMeter(distance) {
    if(distance>0) {
        var meter = distance*1000;
        console.log("Meter = "+meter);
    }
    else {
        console.log("Distance shouldn't negative number,please provdie the correct number.");
    }
    return distance;
}


//   2 ****     Budget Calculator.                 ****

var watchPrice = 50;
var mobilePrice = 100;
var laptopPrice = 500;

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop){
    var multipleWatch = watchPrice*numberOfWatch;
	var multipleMobile = mobilePrice * numberOfMobile;
    var multipleLaptop = laptopPrice * numberOfLaptop;
    var totalBudget = multipleWatch + multipleMobile + multipleLaptop;

    console.log("TOTAL PRICE = "+totalBudget);
	return totalBudget;
}


//   3 ****     Hotel Cost.                        ****

function hotelCost(daysOfStay){
    var price = 0;
    if (daysOfStay>0 || daysOfStay ==0) {
        if (daysOfStay <=10) {
            price = daysOfStay * 100;
            console.log(daysOfStay + ",days stay in hotel and ", "The price = "+price);

        } else if (daysOfStay <= 20) {
            var first10days = 10 * 100;
            var remainingDays = daysOfStay - 10;
            var second20days = remainingDays * 80;
            price = first10days + second20days;
            console.log(daysOfStay + ",days stay in hotel and ", "The price = "+price);

        } else{
            var first10days = 10 * 100;
            var second20days = 10 * 80;
            var remainingDays = daysOfStay - 20;
            var unlimitedDays = remainingDays * 50;
            price = first10days + second20days + unlimitedDays;
            console.log(daysOfStay + ",days stay in hotel and ", "The price = "+price);
        }
    } else {
        console.log("Negative days aren't allow for calculating the price, pleaes provide correct days")
    }
    return daysOfStay;
}

//   4 ****          Mega-Friends                   ****

function megaFriend(nameOfFriends) {
  let word = "";
  for (let i = 0; i < nameOfFriends.length; i++) {
    if (word.length < nameOfFriends[i].length) {
      word = nameOfFriends[i];
    }
    
  }
  console.log("The Longest name = "+word);
  return word;
}
console.log(megaFriend(['Harley Davidson', 'Mark Jukerbug', 'Barack Obama', 'Donald Trump']));

