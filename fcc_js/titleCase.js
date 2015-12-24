// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// String.charAt()

function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  var capitalized = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.substring(1, word.length);
  });

  return capitalized.join(' ');
}
