// how to define an object

var x = "humidity";

var weather = {
	currentTemp: 82,
	isRaining: false,
	humidity: "too much",
	"is-sunny": true
};

console.log(weather);

weather.location = "nashville";
weather["zipCode"] = 37212;

console.log(weather);

console.log(weather.isRaining);
console.log(weather["humidity"]);
console.log(weather["is-sunny"]); //doesn't work

console.log("humidity", weather.x); //doesn't work
console.log("humidity", weather[x]);