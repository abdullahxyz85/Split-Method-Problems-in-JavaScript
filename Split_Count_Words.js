//Count Words in Sentence:
//Write a function that takes a sentence as input and
//returns the number of words by using split.

// Input: "The quick brown fox jumps over the lazy dog"
// Expected Output: 9
let str = "The quick brown fox jumps over the lazy dog";
function countWords(str) {
  let output = str.split(" ");

  return output.length;
}
console.log(countWords(str));
