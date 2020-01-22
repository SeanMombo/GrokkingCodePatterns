//// https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO


const binary_search = function(arr, key) {
  
    let left = 0;
    let right = arr.length - 1;
    let ascending = arr[left] < arr[right];
  
    while(left <= right) {
      let mid = Math.floor(left + (right-left)/2);
  
      let guess = arr[mid];
  
      if (guess === key) {
        return mid;
      }
      if (ascending) {
        if (guess < key) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        if (guess > key) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  };
  
  console.log(binary_search([4, 6, 10], 10))
  console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
  console.log(binary_search([10, 6, 4], 10))
  console.log(binary_search([10, 6, 4], 4))
  