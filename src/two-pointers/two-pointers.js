const pair_with_target_sum = function(arr, target_sum) {
    let p1 = 0, p2 = arr.length-1;

    let numLoops = 100;

    while((arr[p1] + arr[p2] != target_sum) && numLoops > 0) {
        let sum = arr[p1] + arr[p2];
        if (sum > target_sum) {
            p2--;
        } else if (sum < target_sum) {
            p1++;
        }   
        numLoops--;
    }

    return [p1, p2];
  }

// console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
// console.log(pair_with_target_sum([2, 5, 9, 11], 11));


function remove_duplicates(arr) {
    let p1 = 1; p2 = 1;
    while(p1 < arr.length) {
        if (arr[p2 - 1] !== arr[p1]) {
            arr[p2] = arr[p1];
            p2++;
        }
        p1++;
    }

    return p2;
}
// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));


const make_squares = function(arr) {
    
    let n = arr.length;
    let highestIndex = n - 1;
    squares = Array(n).fill(0);
 
    let left = 0, 
        right = highestIndex;

    while(left <= right) {
        let leftSquare = arr[left]*arr[left];
        let rightSquare = arr[right]*arr[right];

        if (leftSquare > rightSquare) {
            squares[highestIndex] = leftSquare;
            left++;
        } else {
            squares[highestIndex] = rightSquare;
            right--;
        }
        highestIndex--;
    }

    return squares;
};

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]


// console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
// console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

const search_triplets = function(arr) {
    let triplets = [];

    arr = arr.sort((a,b) => a - b);
    let k = arr.length;

    for (let i = 0; i < k; i ++) {
        let left = i + 1;
        let right = k - 1;

        let t1 = arr[i], t2 = arr[left], t3 = arr[right];
        let tsum = arr[i] + arr[left] + arr[right];

        while(left < right) {
            if (arr[i] + arr[left] + arr[right] === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if (arr[i] + arr[left] + arr[right] < 0) {
                left++;
            } else {
                right --;
            }
        }

    }
    return triplets;
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));