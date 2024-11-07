// Split by Comma and Trim Whitespace:
// Given a comma-separated string,
// use split to convert it into an array,
// and trim any leading or trailing whitespace from each element.

// Input: "apple, banana , cherry , date "
// Expected Output: ["apple", "banana", "cherry", "date"]
let str = "apple, banana , cherry , date";

let output = str.split(",");
console.log(output);
