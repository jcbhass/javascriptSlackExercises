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

////////////////////////////

Find the Index
Create a function that takes an array and a string as arguments and return the index of the string.

Examples
find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

find_index(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

find_index(["a", "g", "y", "d"], "d") ➞ 3

find_index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0


const find_index = (arr, str)=> arr.indexOf(str); 


function find_index(lst, str) {
	for (let i = 0; i < lst.length; i++) {
		if (lst[i] === str) {
			return i;
		}
	}
}

//////////////////////////

Check if an Array Contains a Given Number
Write a function to check if an array contains a particular number.

Examples
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false











