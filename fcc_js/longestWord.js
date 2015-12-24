// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// String.split()
// String.length

function findLongestWord(str) {
  var words = str.split(' ');
  words.sort(function(previous, current) {
    return current.length - previous.length;
  });

  return words[0].length;
}
