// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// function greaterNum(numberOne, numberTwo) {
//   if (numberOne === numberTwo) {
//     console.log("The numbers are the same");
//   } else if (numberOne > numberTwo) {
//     console.log(numberOne + " is greater than " + numberTwo);
//   } else {
//     console.log(numberTwo + " is greater than " + numberOne);
//   }
// };

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// function helloWorld(languageCode) {
//   if (languageCode == 'en') {
//     console.log("Hello, World");
//   } else if (languageCode == 'es') {
//     console.log("Hola, Mundo");
//   } else if (languageCode == 'jpn') {
//     console.log("こんにちは、世界中のみなさん");
//   } else if (languageCode == 'th') {
//     consoel.log("สวัสดีโลก");
//   }
// };

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// function assignGrade(numberScore) {
//   if (numberScore >= 83) {
//     console.log("Your grade is A");
//   } else if (numberScore >= 72) {
//     console.log("Your grade is B");
//   } else if (numberScore >= 62) {
//     console.log("Your grade is C");
//   } else if (numberScore >= 52) {
//     console.log("Your grade is D");
//   } else {
//     console.log("Your grade is F");
//   }
// };

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
  if (number > 1) {
    console.log(number + " " + noun + "s");
  } else {
    console.log(number + " " + noun);
  }
};


