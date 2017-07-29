function nuggetFactory() {
	// checkens are chopped
	// chicks are separated into chunks
	// take chunks and fry them
	// package the nugs 
}

const CONSTANT_NUMBER = 100

console.log(additionAction(1, 3)) // this should work, even through it's before the function due to function hoisting

function doesAddition (number1, number2) {
	var sum = number1 + number2 + CONSTANT_NUMBER
	return sum;
}

//console.log(additionAction(1, 3)) //this won't work sjnce it's before the variable function

var additionAction = function (number1, number2) {
	var sum = number1 + number2 + CONSTANT_NUMBER;
	return sum;
}

console.log(additionAction(1, 3)) //this will work sjnce it's after the variable function