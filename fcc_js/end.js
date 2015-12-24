// Check if a string (first argument) ends with the given target string (second argument).
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// String.substr()

function end(str, target) {
  var substring = str.substr(-1 * target.length);
  return substring == target;
}
