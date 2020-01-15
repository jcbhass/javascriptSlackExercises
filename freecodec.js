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
//FUNCTIONS




























