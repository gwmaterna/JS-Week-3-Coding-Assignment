// 1.	Create an array called ages that contains 
//      the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a. Programatically subtract 1st value from last

// tried this code below, returned NaN
// let x = (ages[ages.length -1] - ages.length[0]);
// console.log(x);

// function subtract1() {
//     for(let i=0; i < ages.length; i++) {
//         console.log(i - ages[0]);
//     }
// }
//  spent an hour researching, tried many things, CANNOT find the answer
console.log(ages[ages.length-1] - ages[0]);
// finally, after taking a break on this specific problem for a day, came
// at it fresh and found the answer, but it's got numbers, so.. starting over
// let firstEl = ages.shift();
// let lastEl = ages.pop();
// console.log(lastEl - firstEl);  
// office hours 8/18 provided the answer above

// b. add a new age to the array and repeat above step

ages.push(45);
console.log(ages); // run to make sure array is correct
console.log(ages[ages.length-1] - ages[0]);
// the above is dynamic, it works!!!

// c. Use a loop to iterate through the array and 
// calculate the average age. Print the result to the console.

let total = 0;
for(let i = 0; i < ages.length; i++) {
    total += ages[i];
}
let avg = total / ages.length;

console.log(avg);
// I looked the above answer up and am trying to comprehend, but i don't 
//  yet understand when exactly i need to create a new variable (EX: total)

// 2. Create an array called names that contains the following values: 
//    ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// a. Use a loop to iterate through the array and calculate the average 
//    number of letters per name. Print the result to the console.
let lengths = names.map(function(element) {return element.length;
});
console.log(lengths);  //this was run to check the lengths of each element

let sum = lengths.reduce(function(accumulator,currentValue) {
  return accumulator + currentValue;
});
console.log(sum);  // producing sum of lengths of each element
let avg2 = sum / names.length;
console.log(avg2);  // printing average to console

// the same result using a loop below
let totalLetters = 0;
for (let i = 0; i <names.length; i++){
    totalLetters += names[i].length;
}
console.log(totalLetters);
console.log(totalLetters/names.length);

//  another way from office hours is below 
// let total = 0;
// for(let i=0; i<names.length; i++) {
//   console.log(names[i].length)
//     total = total + names[i].length
// }



// b.	Use a loop to iterate through the array again and concatenate all the names 
//    together, separated by spaces, and print the result to the console.
console.log(names.join(' '));
//  the above is not a loop, but achieves the same result.  I'll get back to it 
//  if I get the chance.  Why would I need to use a loop?

// 3.	How do you access the last element of any array?
//  !! Let's use the NAMES array for the example !!
names[names.length-1];                // accessed by names[names.length-1]
console.log(names[names.length-1]);   // printed result to console

// 4.	How do you access the first element of any array?
names[0];                              // accessed
console.log(names[0]);                 // printed

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously 
//  created names array and add the length of each name to the nameLengths array.
var nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);


//  For example:
//  namesArray = ["Kelly", "Sam", "Kate"] //given this array
//  nameLengths = [5, 3, 4] //create this new array

//  NO IDEA HOW TO DO THIS //

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all  
//  the elements in the array. Print the result to the console.
let totalLetters2 = 0;
for (let i = 0; i <nameLengths.length; i++){
    totalLetters2 += nameLengths[i];
}
console.log(totalLetters2);
// above is incorrect, returns '16' (# of elements in string)

// 7.	Write a function that takes two parameters, word and n, as 
//   arguments and returns the word concatenated to itself n number 
//   of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the 
//   function to return ‘HelloHelloHello’).
let concat = '';

function wordConcat(word, n) {
  for (let i = 0; i < n; i++) {
    concat = concat + word;
  }
  console.log(concat);
}
// wordConcat('hello', 3);
wordConcat('Greg', 5); //returns "hellohellohelloGregGregGregGregGreg"

// 8.	Write a function that takes two parameters, firstName and 
//   lastName, and returns a full name (the full name should be the 
//   first and the last name separated by a space).
function fullName(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}
fullName('Greg', 'Materna');

// 9.	Write a function that takes an array of numbers and returns true 
//   if the sum of all the numbers in the array is greater than 100.
// function addingNumbers(myArrayParameter) {
//   console.log("this is my func of adding numbers", myArrayParameter);
// }
let arrayOfNumbers = [40, 9, 12];
function greaterThan100(numberArray) {
  
let sum2 = arrayOfNumbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
});
console.log(sum2); // checking to see if sum is correct
if (sum2 > 100) {
  console.log(true);
} else {
  console.log(false);
}
}
greaterThan100(arrayOfNumbers);

// 10. Write a function that takes an array of numbers and returns 
//    the average of all the elements in the array.
let arrayOfNumbers2 = [50, 100, 150, 200];
let sum3 = arrayOfNumbers2.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
});
console.log(sum3); // checking to see if sum is correct
let avg3 = sum3 / arrayOfNumbers2.length;
console.log(avg3);

// 11.	Write a function that takes two arrays of numbers and returns 
//   true if the average of the elements in the first array is greater 
//   than the average of the elements in the second array.
let arrayOfNumb1= [200, 300, 250];
let arrayOfNumb2= [150, 250, 600];

function twoArrays(arrayFirst, arraySecond) {

  let sumArray1 = arrayOfNumb1.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
});
  console.log(sumArray1); // checking to see if sum is correct
  let averageArray1 = sumArray1 / arrayOfNumb1.length;
  console.log(averageArray1); // check if avg is correct

  let sumArrayNumb2 = arrayOfNumb2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
});
  console.log(sumArrayNumb2); // checking to see if sum is correct
  let averageArray2 = sumArrayNumb2 / arrayOfNumb2.length;
  console.log(averageArray2); // check if avg is correct

  if (averageArray1 > averageArray2) {
    console.log(true);
} else {
    console.log(false);
}
}
twoArrays(arrayOfNumb1, arrayOfNumb2);

// 12.	Write a function called willBuyDrink that takes a boolean 
//   isHotOutside, and a number moneyInPocket, and returns true if it
//    is hot outside and if moneyInPocket is greater than 10.50.

// let isHotOutside = true  // I'm still unsure of when to declare variables
// let moneyInPocket = 10   // Turns out not needed here

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside == true && moneyInPocket > 10.50) {
  console.log(true);
  }   else {
    console.log(false);
  }            // why is 'else' an error?
// turns out my syntax was wrong, I forgot curly braces after the 'if' statement

}
willBuyDrink(true, 11);

// 13.	Create a function of your own that solves a problem. In 
//   comments, write what the function does and why you created it.

// With this function, profitMTG, I wanted to be able to calculate how much profit, in
// dollars and percentage, I would most likely earn from selling my collectables.  I have
// been collecting Magic the Gathering trading cards and sealed boxes for a few years and
// some of them are worth a decent amount of money.  But I do not want to sell at a loss
// or without a certain percentage of profit because I really just enjoy the cards. 

// So I came up with a function that will take in the price I paid for the collectable 
// (pricePaid) and an array that contains the listed market value on TCGplayer.com as well 
// as the sale prices for the last few prices paid most recently for said collectable on 
// Ebay and TCGplayer.  

// The function averages out the numbers in the array to calculate the price that I should 
// be able to sell the item for and then I calculate how much I would receive minus the typical
// fees (normally 15% out of the sold price).  Then I use the pricePaid to calculate the
// dollars in profit and the percentage of profit.

let valueWeakness = [100, 92, 99, 101];
let priceWeakness = 62;

let valueAlphaIsland = [154.69, 129, 199, 88.01];
let priceAlphaIsland = 67;

function profitMTG(pricePaid, arrayValue) {
  let sumValue = arrayValue.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  });
  let estimatedPrice = sumValue / arrayValue.length;
  let priceMinusFees = estimatedPrice * .85;
  let dollarsProfit = priceMinusFees - pricePaid;
  let percentProfit = dollarsProfit / pricePaid * 100;
  console.log(`Estimated profit in dollars is $${dollarsProfit.toFixed(2)}`);
  console.log(`Estimated profit percentage is ${percentProfit.toFixed(0)}%`);
}
profitMTG(priceWeakness, valueWeakness);
profitMTG(priceAlphaIsland, valueAlphaIsland);

