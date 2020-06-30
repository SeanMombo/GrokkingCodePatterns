
function smallest_missing(arr) {
    let n = arr.length;

    //shift all negative numbers to the left side of the array
    let j = 0;
    for(let i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    arr = arr.slice(j);
    n = arr.length;

    //traverse by index, flip the signs
    for(let i = 0; i < n; i++) {
        if (arr[Math.abs(arr[i]) - 1] > 0 && Math.abs(arr[i]) - 1 < n) {
            arr[Math.abs(arr[i]) - 1] = -arr[Math.abs(arr[i]) - 1];
        }
    }

    //traverse again and return the first positive index
    for(let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
}

console.log(smallest_missing([5, 1, 3, 8, 2, 4]));
console.log(smallest_missing([3, 4, -1, 1]));


//IMPORTANT TO UNDERSTAND!!!
//if there exists an int greater than the size of the array, smaller ints MUST have been skipped
