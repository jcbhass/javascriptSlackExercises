/////////////////////////////////////////////////////
//RETURNING BOOLEAN VALUES FROM FUNCTONS

function isEqual(a,b){
    return a===b;
}

console.log(isEqual(1, 2)); 

function lessThan100(a, b) {
	return a+b<100;
} //shorter than using the if/then statements

function dividesEvenly(a, b) {
	return a % b == 0
}