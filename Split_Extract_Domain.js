// Problem 5: Extract Domain Name from Email
// Given an email address,
// extract the domain name (part after @).

// let email = "example@gmail.com";
// Expected output: "gmail.com"
let email = "example@gmail.com";

let output = email.split("@")[1];
console.log(output);
