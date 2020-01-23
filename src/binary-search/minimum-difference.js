


const search_min_diff_element = function(arr, key) {

    const binarySearch = (arr, key) => {
        let n = arr.length;
        let l = 0;
        let r = n - 1; 
        let index = -1;
        let minDif = Infinity;

        while (l <= r) {
            let mid = Math.floor(l + (r-l)/2);
            let guess = arr[mid];
            let dif = Math.abs(guess - key);
            
            if (dif < minDif) {
                minDif = dif;
                index = guess;
            }

            if (key < guess) {
                r = mid - 1;
            } else if (key > guess) {
                l = mid + 1;
            } else {
                return index;
            }
        }   
        return index;
    }

    return binarySearch(arr, key);
};
  

console.log(search_min_diff_element([4, 6, 10], 7))
console.log(search_min_diff_element([4, 6, 10], 4))
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))
console.log(search_min_diff_element([4, 6, 10], 17))

