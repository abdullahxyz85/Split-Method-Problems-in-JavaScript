//Problem 2: Extract Initials from a Name
//Given a full name,
//use split to extract the initials of each word in the name.

//let fullName = "Abdullah Jameel Bhatti";
//Expected output: "A J B"
let fullName = "Abdullah Jameel Bhatti";

let initial = fullName
  .split(" ")
  .map((words) => words[0])
  .join(" ");
console.log(initial);
