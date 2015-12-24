// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Global String Object

function repeat(str, num) {
  var result = str;
  // repeat after me
  if (num < 0) {
    return "";
  }
  for (var count = 0; count < num - 1; count++) {
    result += str;
  }
  return result;
}
