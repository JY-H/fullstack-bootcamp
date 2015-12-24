// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
//
// Note that the three dots at the end add to the string length.
//
// If the num is less than or equal to 3, then the length of the three dots is not added to the string length.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// String.slice()

function truncate(str, num) {
  if (str.length <= num) {
    return str;
  }

  if (num > 3) {
    num -= 3;
  }

  var truncated = str.slice(0, num);
  console.log(truncated);
  return truncated + "...";
}
