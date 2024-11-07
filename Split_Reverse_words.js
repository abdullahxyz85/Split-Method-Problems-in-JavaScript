// Problem 6:
// Reverse Words in a Sentence
// Write a function that reverses the order of words in a sentence.

// let sentence = "JavaScript makes web development easier";
// Expected output: "easier development web makes JavaScript"
let sentence = "JavaScript makes web developement easier";

output = sentence.split(" ").reverse().join(" ");
console.log(output);
