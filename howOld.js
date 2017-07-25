// 1. How many hours are in a year

var secondsInMinute = 60;
var minutesInAHour = 60;
var hoursInADay = 24;
var daysInAYear = 365;

var hourInYear = (hoursInADay * daysInAYear);

console.log("1.",hourInYear);

//2. How many minutes are in a decade

var minutesInADecade = (hourInYear * minutesInAHour * 10);

console.log ("2.",minutesInADecade);

//3. How many seconds old are you

var age = 31
var secondsOld = (secondsInMinute * minutesInAHour * hoursInADay * daysInAYear * age);

console.log("3.",secondsOld);

//4. If they are older than 40, console I'm old, else I'm young

if (age > 40) {
	console.log("4. You old AF");
}

else {
	console.log("4. Nah, you ok");
	}

