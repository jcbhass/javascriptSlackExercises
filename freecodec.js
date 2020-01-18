/////////////////////////////////////////////////////
//RETURNING BOOLEAN VALUES FROM FUNCTONS

// function isEqual(a,b){
//     return a===b;
// }

// console.log(isEqual(1, 2)); 

// function lessThan100(a, b) {
// 	return a+b<100;
// } //shorter than using the if/then statements

// function dividesEvenly(a, b) {
// 	return a % b == 0
// }

// function profitableGamble(prob, prize, pay) {
// 	return prob*prize > pay;
// }

//function addition(num) {
// 	return ++num
// }

//const addition = (num) => num + 1

//const addition = (a, b)=> a + b;

// ////////////////////////////
// //Betting game from FreeCodeCamp
// var count = 0;

// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case 'J':
//         case 'Q':
//         case 'K':
//         case 'A':
//             count--;
//             break;
//     }

//     let holdbet = 'Hold'
//     if (count > 0 ) {
//         holdbet = 'Bet';
//     }
//     return count + ' ' + holdbet;
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log(cc(4))

// /////////////////////////////
// //BREAK AND CONTINUE

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++) {
//     if(scores[i] === 0){
//         continue; //0 won't go to the console. breaks out of the loop
//     }
//     console.log(`your score: ${scores[i]}`);

//     if(scores[i] === 100) {
//         console.log(`congratulation, you got the top score of ${scores[i]}`);
//         break;
//     }
// }

// ////////////////////////////
// //SWITCH STATEMENTS

// const grade = 'D';

// switch(grade) {
//     case'A':
//     console.log('You\'ve got an A');
//     break;
//     case'B':
//     console.log('You\'ve got an B');
//     break;
//     case'C':
//     console.log('You\'ve got an C');
//     break;
//     case'D':
//     console.log('You\'ve got an D');
//     break;
//     case'E':
//     console.log('You\'ve got an E');
//     break;
//     default:
//     console.log('Not a valid grade')
//     break;
// }

// /////////////////////////
// //VARIABLES AND BLOCK SCOPE 
// //can only hae access to global scope or scope right outside of current block, even if reassign the const variable
// const age = 30
// if(true) {
//     const age = 40;
//     const name = 'shaun';
//     console.log(`inside 1st code block: ${age}, ${name}`);

//     if(true) {
//         const age = 50;
//         console.log(`inside 2nd code block: ${age}`);
//         var test = 'hello';
//     }
// }

// console.log(`outside code block: ${age}, ${name}, ${test}`);

/////////////////////////////////////////////
//ARROW FUNCTIONS

// //previous way of writing a function
// const bill = function(products, tax){
//     let total = 0;
//     for(let i=0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// //new ES6 method to write a function. Because more than one line then can't write a one line arrow function, but still shortens it a bit. 
// const bill = (products, tax) => {
//     let total = 0;
//     for(let i=0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));

/////////////////////////////
//METHODS
// const name = 'shaun';

// //functions
// const greet = () => 'hello';

// let resultOne = greet(0);
// console.log(resultOne);

// //methods - use dot notation to invoke
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);


// /////////////////////////////
// //FOREACH METHOD AND CALLBACKS

// //passing in a function as the argument 

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     console.log(value);
// }); 
// //can turn this into an arrow function 
// myFunc(value => console.log(value));


//foreach method 
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// // //forEach methods expect a callback function
// // people.forEach(function(){
// //     console.log('something'); //5 somethings 
// // });

// // people.forEach(function(person){
// //     console.log(person); //5 somethings 
// // });

// // people.forEach(person => {
// //     console.log(person);
// // });

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);




///////////////////////////
// //CALLBACK FUNCTIONS IN ACTION

// const ul = document.querySelector('.people');
// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
// let html =``;
// people.forEach(person => {
//     //create an html template for each person 
//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);

// ul.innerHTML = html;

// /////////////
// lessThanOrEqualToZero=(num=>num<=0);

// /////////////
// checkEquality=(a, b)=>a===b; 

////////////
//reverse array 1 
// function reverse(arr) {
// 	let result = [];
// 	for (let i = arr.length -1; i > -1; i--) {
// 		result.push(arr[i]);
// }
// return result
// }
    
//reverse array 2
// const reverse = arr => arr.reverse();

// console.log(reverse([1, 2, 3, 4]));

// console.log(reverse([9, 9, 2, 3, 4]));

//////////////////
// const helloName = name => `Hello ${name}!`

/////////////////
// const isEmpty =s => s==="";

// function isEmpty(s) {
// 	return s.length == 0;
// }

////////////////////////
// const concat = (arr1, arr2) => arr1.concat(arr2);

// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// function concat(arr1, arr2) {
//     return [...arr1,...arr2]
// }

// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));
// ////////////////////////

// // Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// // Examples
// // search([1, 2, 3, 4], 3) ➞ 2

// // search([2, 4, 6, 8, 10], 8) ➞ 3

// // search([1, 3, 5, 7, 9], 11) ➞ -1
// // Notes
// // If the item is not present, return -1.
// // The given array is ordered.

// function search(arr, item) {
//     return arr.indexOf(item)
// }

// const search = (arr,item) => {
// 	for (let i=0; i<arr.length; i++){
// 		if(arr[i] === item){
// 			return i;
// 		}
// 	}
// 	return -1;
// };


// function search(arr, item) {
//     function sortNumber(a, b) {
//       return a - b;
//     }
    
//     arr = arr.sort(sortNumber);
//     return arr.indexOf(item);
        
// }

// //////////////////////////
// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true

// const getLastItem = (arr) => arr[arr.length-1];

// function getLastItem(arr) {
//     return arr.pop();
//   }

// ////////////////////////////

// Find the Index
// Create a function that takes an array and a string as arguments and return the index of the string.

// Examples
// find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// find_index(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// find_index(["a", "g", "y", "d"], "d") ➞ 3

// find_index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0


// const find_index = (arr, str)=> arr.indexOf(str); 


// function find_index(lst, str) {
// 	for (let i = 0; i < lst.length; i++) {
// 		if (lst[i] === str) {
// 			return i;
// 		}
// 	}
// }

// //////////////////////////

// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false


// const check = (arr, el)=> arr.includes(el);

// ///////////////////////////
// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false

// const comp = (str1, str2) => str1.length === str2.length;

// //////////////////////////
// Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// Examples
// isEvenOrOdd(3) ➞ "odd"

// isEvenOrOdd(146) ➞ "even"

// isEvenOrOdd(19) ➞ "odd"

// const isEvenOrOdd = (num) => {
// 	if(num%2 === 0) {
// 		return 'even';
// 	} else{
// 		return 'odd';
// 	}
// };

// function isEvenOrOdd(num) {
//     return num % 2 ? 'odd' : 'even';
//   }
// // ////////////////////////////////
// Return the Total Number of Parameters
// Create a function that returns the total number of parameters passed in.

// Examples
// numberArgs("a", "b", "c") ➞ 3

// numberArgs(10, 20, 30, 40, 50) ➞ 5

// numberArgs(x, y) ➞ 2

// numberArgs() ➞ 0


// function numberArgs() {
// 	return arguments.length;
// }

// const numberArgs = (...args) => args.length;

// function numberArgs(size) {
// 	return arguments.length;
// }

// function numberArgs(/* fill-in */) {
// 	return arguments.length
// }

// ///////////////////////////

// Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

// const cityFacts = (city) => `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;

// ///////////////////////////
// Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.

// ctoa("A") ➞ 65

// ctoa("m") ➞ 109

// ctoa("[") ➞ 91

// ctoa("\") ➞ 92



// const ctoa = (c)=> c.charCodeAt();

//const ctoa = char => char.charCodeAt(0);

// /////////////////////////
// Is the Lamp On?
// Your job is to find out whether the lamp is on or off.

// Check the tests tab to find out what you have to do to make this work.

// const lampStatus = () => lamp === 'on';

// function lampStatus() {
// 	return lamp ==='off' ? false : true;
// }

///////////////////////////

// Free Coffee Cups
// Per 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Examples
// totalCups(6) ➞ 7

// totalCups(12) ➞ 14

// totalCups(213) ➞ 248


// const totalCups = (n) => {
// 	let free = Math.floor(n/6);
// 	let total = free + n;
// 	return total;
// }

// function totalCups(n) {
//     return n + Math.floor(n / 6)
// }

//const totalCups = num => num + Math.floor(num / 6);

////////////////////////////
Last character of firstname
Create a function that takes a string as an argument. The string is a random name.

If the last character of the name is an 'n', return true.
If the last character of the name is not an 'n', return false.
Examples
isLastCharacterN('Aiden') ➞ true

isLastCharacterN('Piet')  ➞ false
Notes
The function must return a boolean value (true, false).

const isLastCharacterN = (word) => (word[word.length-1] === 'n');


...word.pop() == 'n'


//////////////////////////
Is the Word Singular or Plural?
Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

Examples
isPlural("changes") ➞ true

isPlural("change") ➞ false

isPlural("dudes") ➞ true

isPlural("magic") ➞ false
Notes
Don't forget to return the result.
Remember that return true (boolean) is not the same as return "true" (string).
This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


function isPlural(word) {
	return word[word.length-1] === 's';
}

const isPlural = word => word.endsWith('s');

////////////////////////

Coding Website Score Calculator
Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.

Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.

Examples
scoreCalculator(1, 2, 3) ➞ 85

scoreCalculator(1, 0, 10) ➞ 205

scoreCalculator(5, 2, -6) ➞ "invalid"



const scoreCalculator = (easy, med, hard) => {
	if (easy * med * hard < 0) {
		return 'invalid';
	} else {
		return easy * 5 + med * 10 + hard * 20;
	}
}

const scoreCalculator = (easy, med, hard) => {
	if(easy < 0 || med < 0 || hard < 0) {
		return 'invalid';
	}
	return easy*5+med*10+hard*20;
};


/////////////////////////////
Get Word Count
Create a function that takes a string and returns the word count. The string will be a sentence.

Examples
countWords("Just an example here move along") ➞ 6

countWords("This is a test") ➞ 4

countWords("What an easy task, right") ➞ 5
Notes
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


function countWords(str) {
    return str.split(" ").length;
}

//////////////////////////////
Find the Total Number of Digits the Given Number Has
Create a function that takes a number as an argument and returns the amount of digits it has.

Examples
findDigitAmount(123) ➞ 3

findDigitAmount(56) ➞ 2

findDigitAmount(7154) ➞ 4

findDigitAmount(61217311514) ➞ 11

findDigitAmount(0) ➞ 1


function findDigitAmount(num) {
	return num.toString().length;
}

const findDigitAmount = num => String(num).length;

////////////////////////////////
Negate the Array of Numbers
Given an array of numbers, negate all elements contained within.

Negating a positive value -+n will return -n, because all +'s are removed.
Negating a negative value --n will return n, because the first - turns the second minus into a +.
Examples
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]

negate([]) ➞ []

function negate(arr) {
	return arr.map(value => -value);
}


/////////////////////////////
The 3 Programmers Problem
You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wage of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

Examples
programmers(147, 33, 526) ➞ 493

programmers(33, 72, 74) ➞ 41

programmers(1, 5, 9) ➞ 8

function programmers(one, two, three) {
	return Math.max(one, two, three) - Math.min(one, two, three);
}

const programmers = (...salaries) =>
  Math.max(...salaries) - Math.min(...salaries);

//////////////////////

Check if Number is within a Given Range
Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

Examples
isInRange(4, { min: 0, max: 5 }) ➞ true

isInRange(4, { min: 4, max: 5 }) ➞ true

isInRange(4, { min: 6, max: 10 }) ➞ false

isInRange(5, { min: 5, max: 5 }) ➞ true

function isInRange(num, range) {
	if (num >= range.min && num <= range.max){
		return true;
	} else {
		return false;
	}
}

const isInRange=(num, range)=> 
	num >= range.min && num<= range.max && true


/////////////////////////
Missing Third Angle
You are given 2 out of 3 angles in a triangle, in degrees.

Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

An acute angle is less than 90 degrees.
A right angle is exactly 90 degrees.
An obtuse angle is greater than 90 degrees (but less than 180 degrees).
For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

Examples
missingAngle(27, 59) ➞ "obtuse"

missingAngle(135, 11) ➞ "acute"

missingAngle(45, 45) ➞ "right"

const missingAngle = (angle1, angle2) => {
    const angle3 = 180 - angle1 - angle2;
    return angle3 > 90 ? 'obtuse' : angle3 < 90 ? 'acute' : 'right';
  };

function missingAngle(angle1, angle2) {
if(180 - (angle1+angle2)< 90){
    return "acute";
}else if(180-(angle1+angle2)>90){
    return "obtuse";
}else{
    return "right";
}
}

/////////////////////////
Date Format
Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

Examples
formatDate("11/12/2019") ➞ "20191211"

formatDate("12/31/2019") ➞ "20193112"

formatDate("01/15/2019") ➞ "20191501"
Notes
Return value should be a string.


function formatDate(userDate) {
	let day = userDate.split("/")[0]
	let month = userDate.split("/")[1]
	let year = userDate.split("/")[2]

	return year + month + day;
}


const formatDate=u=>
    u.replace(/(\d+)\/(\d+)\/(\d+)/,`$3`+`$2`+`$1`)
    
const formatDate = str => str.split('/').reverse().join('');

function formatDate(date) {
	const gatDate = new Date(date);
	return `${gatDate.getFullYear()}${gatDate.getDate()}${gatDate.getMonth()+1 < 10 ? '0'+(gatDate.getMonth()+1) : gatDate.getMonth()+1}`;
}
/////////////////////////
Convert Number to String of Dashes
Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

Examples
Go(1) ➞ "-"

Go(5) ➞ "-----"

Go(3) ➞ "---"
Notes
You will be provided integers ranging from 1 to 60.
Don't forget to return your result as a string.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

function Go(num) {
	let counter  = '';
	for (i = 0; i < num; i++) {
		 counter += '-';
	}
	return counter;
}

const Go = num => '-'.repeat(num);

function Go(num) {
	return ('-').repeat(num);
}
//////////////////////////
Simple OOP Calculator
Create functions for the Calculator class that can do the following:

Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.
Examples
var calculator = new Calculator()

calculator.add(10, 5) ➞ 15

calculator.subtract(10, 5) ➞ 5

calculator.multiply(10, 5) ➞ 50

calculator.divide(10, 5) ➞ 2
Notes
The functions should return the result of the calculation.


class Calculator {
	add = (a, b) => a + b;
	subtract = (a, b) => a - b;
	multiply = (a, b) => a * b;
	divide = (a, b) => a / b;
}



class Calculator {
	add(a,b){return a+b};
	subtract(a,b){return a-b};
	multiply(a,b){return a*b};
	divide(a,b){return a/b};	
}

/////////////////////////
cd folder 








ctrl c to stop 