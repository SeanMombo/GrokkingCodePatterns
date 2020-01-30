

function pair_with_target_sum(arr, targetSum) {
    let l = 0;
    let r = arr.length-1;

    while(l<r) {
        if (arr[l] + arr[r] === targetSum) {
            return [l, r];
        } else if (arr[l] + arr[r] < targetSum) {
            l++;
        } else {
            r--;
        }
    }
    return -1;
}

// console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
// console.log(pair_with_target_sum([2, 5, 9, 11], 11));


function remove_duplicates(arr) {
    let l = 0;
    let num = arr[l];

    let r = 1;
    while(r < arr.length) {
        if (arr[r] === num) {
            arr.splice(r, 1);
        } else {
            l = r;
            num = arr[l];
            r++;  
        }
    }
    return arr;
}

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));

function make_squares(arr) {
    let l = 0;
    let r = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            l = i;
            r = l - 1;
            break;
        }
    }

    let result = [];
    //// Runs while both pointers are active
    while(l < arr.length && r >= 0) {
        let l2 = arr[l]*arr[l];
        let r2 = arr[r]*arr[r];
        if (l2 <= r2) {
            result.push(l2);
            l++;
        } else {
            result.push(r2);
            r--;
        }
    }

    while(l < arr.length) {
        let l2 = arr[l]*arr[l];
        result.push(l2);
        l++;
    }

    while(r >= 0) {
        let r2 = arr[r]*arr[r];
        result.push(r2);
        r--;
    }
    return result;
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);