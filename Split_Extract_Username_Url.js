// Problem 8:
// Extract Username from URL
// Given a URL,
// extract the username (assuming it's the last part of the URL).

// let url = "https://website.com/profile/AbdullahJameel";
// Expected output: "AbdullahJameel"
let url = "https://website.com/profile/AbdullahJameel";

let output = url.split("/").pop();

console.log(output);
