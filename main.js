console.log("I'm in!");

var string = "string";
var number = 12;
var boolean = true;
var nullValue = null;
var undefvalue;
var objectValue = {}; 

//Operatior is something you can do you manipulate the values
//in the program

// Mathematical Operators

var summation = 2 + 2;
var sub = 2 - 2;
var mult = 2 * 2;
var divide = 2 / 2; 
var modulusRemainder = 3 % 2

console.log(modulusRemainder);


/////// Equality Operators 

// == values are equal 
// === value and type are equal
// != values are not equal
// !== values and type (stricly) are not equal

////// relational operators

// > < >= <= duhh

console.log ("we think this should be true:", 8 > 2);
console.log("we think this should be false:", "a">"z");


//////Logical Operators 

// $$ (and)
// || (or)
// ! (not)

var num = 2; // if you make the number into a bool it's true
console.log(!num); //
var zero = 0; // zero is converted to false
console.log(!zero); //so not false is true
//this is called type coercion - taking a type and turing it into something it's not


// Conditional Logic



// If (zoeIsCool && callanIsCool) {
// 	console.log("students are happy");
// }


// var zoeIsCool = true;
// var callanIsCool = true;

///no error is recieved in this because of VARIABLE HOISTING, but the variables need to be defined before the function that uses them


var zoeIsCool = true;
var callanIsCool = false;

if ((zoeIsCool && callanIsCool) === true) {
	console.log("students are happy");
}



