var pokemon = "charmander"

var array0 = [42, "sting", null, "car", {}, pokemon];

console.log(array0[5]);// should return charmader

array0[33] = "apple"; //places the string apple at index 33


console.log(array0.length); // finds the length where the last value exists in the array


// Array methods

console.log(array0.indexOf("car")); //finds the index of 3

array0.push("cat"); //adds cat to the end of the string
console.log(array0);

array0.pop(); //removes the last populated index
console.log(array0);

array0.unshift("zoe is cool"); //adds to the begining of the array
console.log(array0);

array0.shift(); //removes the first thing in the array
console.log(array0);

var newString0 = array0.join(",") //separates all indexes by the defined delimiter and turns it to a string
console.log(newString0);

array0 = newString0.split(",") //turns a string 
console.log(array0);

var sentence = "http://www.google.com"
console.log(sentence.split("//")); //takes the string and 
sentence1 = console.log(sentence.split(""));
console.log(typeof sentence1);


var newArray = ["dog", "cat", "pig", "hippo"];
var numberArray = [6, 3, 63, 321, 2];

console.log(newArray.reverse()); //shows them in revers
console.log(newArray.sort()); //sorts alpha
console.log(numberArray.sort()); //sorts numbers by the first number 

// console.log(numberArray.sort(function(first,second{return first - second;})));

console.log(newArray);

var newArraySlice = newArray.slice(1,3); //starts right before 1 and ends right after 3 it copies the index
console.log(newArraySlice);

var newArraySplice = newArray.splice(3,1); //starts at index 3 and takes that index out and the number of the indexes to the right e.g. 1 just takes out the index you 
console.log(newArraySplice);


// For loops 

//what's going on in the paran --initializer; conditional; iterator

var newArray = ["dog", "cat", "pig", "hippo"];

for(var i = 0; i < newArray.length; i++) {
	debugger;
	console.log("I'm at index " + i);
	console.log(newArray[i]);
}