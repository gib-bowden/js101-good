console.log("*****begin sonnet stuff*******");


var perry ="penguin";
var nellie = "owl";

console.log("Perry is a " + perry);

var quote = "People who think they know everything are a great annoyance to those of us who do."

var numOfCharacters = quote.length;
console.log(numOfCharacters);


// Strings | Built in methods

//.indexOf()
//.charAt()
//.replace()

console.log(quote.indexOf("who"));

console.log(quote.charAt(50));

console.log(quote.replace("who","whatWhenWhere")); //only replaces the first instance

console.log(quote.replace(/who/g,"whatWhenWhere")); //uses regex and replaces all instance


//getting strings from HTML

document.getElementById("second-quote").innerHTML = quote; 
//the above finds the element by id, then replaces the innerHTML with the quote variable


var element = document.getElementById("second-quote");
var jsString = element.innerHTML;

console.log(element);
console.log(jsString);