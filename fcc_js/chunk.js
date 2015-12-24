// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Array.push()

function chunk(arr, size) {
  var result = [];
  var index = 0;
  while (index < arr.length) {
    var sub = [];
    var count = size;
    while (count > 0 && index < arr.length) {
      sub.push(arr[index]);
      index++;
      count--;
    }
    result.push(sub);
    sub = [];
  }
  return result;
}
