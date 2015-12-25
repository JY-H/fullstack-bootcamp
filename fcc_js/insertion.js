// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
//
// For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function where(arr, num) {
  arr.sort(function(previous, current) {
    return previous - current;
  });

  var index = 0;
  var previous = arr[0];
  //check for if element should be inserted in front
  if (num <= arr[0]) {
    return 0;
  }
  
  //normal cases
  for (var i = 1; i < arr.length; i++) {
    if (num >= previous && num <= arr[i]) {
      return i;
    }else{
      previous = arr[i];
    }
  }
  return i;
}
