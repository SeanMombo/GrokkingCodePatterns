
const bitonic_search = (arr, key) => {
    let n = arr.length;
    let l = 0;
    let r = n - 1;

    while(l < r) {
        let mid = Math.floor(l + (r-l)/2);
        let guess = arr[mid];
        let next = arr[mid+1];

        if (key === guess) {
            return mid;
        } else {
            if (guess < next) { // in ascending half
                if (key < guess) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else { // in descending half
                if (key > guess) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
    }
    return -1;
}

console.log(bitonic_search([1, 3, 8, 4, 3], 4))
console.log(bitonic_search([3, 8, 3, 1], 8))


console.log(bitonic_search([1, 3, 8, 12], 12))
console.log(bitonic_search([10, 9, 8], 10))


