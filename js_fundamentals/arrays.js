// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
var myArray = ["Red", "Blue", "Green", "Purple", "White"]

for (var ii = 0, len = myArray.length; ii < len; ii++) {
  console.log("My " + (ii + 1) + "st choice is " + myArray[ii]);
};


