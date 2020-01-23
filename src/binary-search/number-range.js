

const find_range = function(arr, key) {
    
    let left = 0;
    let right = 0;

    const binarySearch = (arr, key, findMax) => {
        let n = arr.length;
        let l = 0;
        let r = n - 1; 
        let index = -1;

        while (l <= r) {
            let mid = Math.floor(l + (r-l)/2);
            let guess = arr[mid];
    
            if (key < guess) {
                r = mid - 1;
            } else if (key > guess) {
                l = mid + 1;
            } else {
                index = mid;
                if (findMax) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }   
        return index;
    }
    
    right = binarySearch(arr, key, 0);
    if (arr[right] != key) return [-1,-1];
    left = binarySearch(arr, key, 1);

    return [left, right]

};


  
  console.log(find_range([4, 6, 6, 6, 9], 6))
  console.log(find_range([1, 3, 8, 10, 15], 10))
  console.log(find_range([1, 3, 8, 10, 15], 12))

