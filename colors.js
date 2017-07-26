console.log("Begin Colors Assignment")

//1. Make an array

var colors = "chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red"

colors = colors.split(", ")
console.log(colors);

//2. sort by alph

var sortedColors = colors.sort();
console.log(sortedColors);

//3. loop through the array and send each to the console "The color at <indexNumber> is <color name>"

for(var i = 0; i < sortedColors.length; i++) {
	console.log("The color at " + i + " is " + sortedColors[i]);
}