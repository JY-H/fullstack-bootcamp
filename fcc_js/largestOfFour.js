// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:

function largestOfFour(arr) {
  var largest = [];
  for (var i = 0; i < arr.length; i++) {
    var max = arr[i][0];
    for (var index = 1; index < arr[i].length; index++) {
      if (arr[i][index] > max) {
        max = arr[i][index];
      }
    }
    largest.push(max);
  }
  return largest;
}
