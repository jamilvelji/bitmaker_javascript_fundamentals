// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// function tellFortune(numChildren, partner, location, jobTitle) {
//   console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numChildren + " kids.");
// };
// // Test Input
// tellFortune(15, "Jessical Alba", "New York", "billionaire");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.

// function calculateAge(birthYear, currentYear) {
//   var currentAge = currentYear - birthYear;
//   console.log("You are " + currentAge + " years old.");
// };
// calculateAge(1988, 2014);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Assumption of life expenctancy = 81 years old (avg for Canada)

// function calculateSupply (age, amountPerDay) {
//   var lifeExpectancy = 81 * 365;
//   var ageInDays = lifeExpectancy - (age * 365);
//   var totalSnacks = ageInDays * amountPerDay;

//   console.log("You will need " + totalSnacks + " to last you utnil the ripe old age of 81");
// };
// calculateSupply(26, 2);
// calculateSupply(15, 2);
// calculateSupply(30, 3);


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// function calcCircumfrence(radius) {
//   var circumference = 2 * (Math.PI) * radius;
//   console.log("The circumference is " + circumference);
// };

// calcCircumfrence(10);

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// function calcArea(radius) {
//   var areaOfCircle = Math.PI * (radius * radius);
//   console.log("The area is " + areaOfCircle)
// };
// calcArea(10);

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// function celciusToFahrenheit (tempInC) {
//   var tempInF = (tempInC * 1.8) + 32;
//   console.log(tempInC + "°C is " + tempInF + "°F")
// };
// celciusToFahrenheit(25);

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// function fahrenheitToCelcius (tempInF) {
//   var tempInC = (tempInF - 32) / 1.8;
//   console.log(tempInF + "°F is " + tempInC + "°C")
// };
// fahrenheitToCelcius(75);

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

