//// https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7

// array contains no duplicates

const search_ceiling_of_a_number = function(arr, key) {
  
    let start = 0;
    let end = arr.length - 1;
  
    if (key > arr[end]) { // if the 'key' is bigger than the biggest element
      return -1;
    }
    while (start <= end) {
      let mid = Math.floor(start + (end - start )/2);
  
      let guess = arr[mid];
  
      if (guess === key) {
        return mid;
      } else if (guess < key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return start;
  };
  
  
  console.log(search_ceiling_of_a_number([4, 6, 10], 6))
  console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
  console.log(search_ceiling_of_a_number([4, 6, 10], 17))
  console.log(search_ceiling_of_a_number([4, 6, 10], -1))