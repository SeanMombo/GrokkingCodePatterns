

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

        while(left < right) {
            if (arr[i] + arr[left] + arr[right] === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if (arr[i] + arr[left] + arr[right] < 0) {
                left ++;
            } else {
                right --;
            }
        }

    }
    return triplets;
};

// console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
// console.log(search_triplets([-5, 2, -1, -2, 3]));


const triplet_sum_close_to_target = function(arr, target) {
    let minSum = Infinity;
    arr = arr.sort((a,b) => a - b);
    let k = arr.length;

    for (let i = 0; i < k; i ++) {
        let left = i + 1;
        let right = k - 1;

        while(left < right) {
            let t1 = arr[i], t2 = arr[left], t3 = arr[right]
            let tsum = t1+t2+t3;

            if (tsum === target) {
                left++;
                right--;
            } else if (tsum < target) {
                left ++;
            } else {
                right --;
            }
            minSum = Math.abs(target-tsum) < Math.abs(target-minSum) ? tsum : minSum;
        }
    }
    return minSum;
};
// console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
// console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
// console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));


const triplet_with_smaller_sum = function(arr, target) {
    count = 0;
    arr = arr.sort((a,b) => a - b);
    let k = arr.length;
    
    for (let i = 0; i < k; i ++) {
        let left = i + 1;
        let right = k - 1;

        while(left < right) {
            let t1 = arr[i], t2 = arr[left], t3 = arr[right]
            let tsum = t1+t2+t3;
            if (tsum >= target) {
                right--;
            } else if (tsum < target) {
                count += right-left;
                left++;
            }
        }
    }
    return count;
};

// console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
// console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));


const find_subarrays = function(arr, target) {

    result = [];
    let k = arr.length;
    let product = 1;
    let left = 0;
    for(right = 0; right < k; right ++) {
        product *= arr[right];
        //if product >= target
        while (product >= target && left < k) {
            product /= arr[left];
            left ++;
        }

        //if product < target
        let temp = new Array();

        for(let n = right; n > left - 1; n --) {

            temp.unshift(arr[n]);
            result.push(temp);
        }
    }
    return result;
};

// console.log(find_subarrays([2, 5, 3, 10], 30));

const dutch_flag_sort = function(arr) {
    let k = arr.length;
    let low = 0;
    let high = k - 1;

    let i = 0;

    while (i <= high) {
        if (arr[i] === 0) {
            [arr[i], arr[low]] = [arr[low], arr[i]];
            i++;
            low++;
        } else if (arr[i] === 2) {
            [arr[i], arr[high]] = [arr[high], arr[i]];
            high--;
        } else {
            i++;
        }
    }
    return arr;
};

// let arr = [1, 0, 2, 1, 0];
// dutch_flag_sort(arr);
// console.log(arr);

// arr = [2, 2, 0, 1, 2, 0];
// dutch_flag_sort(arr);
// console.log(arr);



const search_quadruplets = function(arr, target) {
    quadruplets = [];
    
    arr.sort((a,b) => a - b);
    let k = arr.length;
    
    for(i = 0; i < k-3; i ++) {
        for(j = i+1; j < k-2; j ++) {

            let left = j + 1;
            let right = k - 1;

            while (left < right) {
                let t1=arr[i], t2=arr[j], t3=arr[left], t4=arr[right];

                let sum = t1+t2+t3+t4;  
                
                if (sum === target) {
                    quadruplets.push([t1,t2,t3,t4]);
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return quadruplets;
};

// console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
// // Input: [4, 1, 2, -1, 1, -3], target=1
// // Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
// // Explanation: Both the quadruplets add up to the target.

const backspace_compare = function(str1, str2) {
    
    let index1 = str1.length - 1;
    let index2 = str2.length - 1;
    
    while (index1 >= 0 || index2 >= 0) {
        let i1 = getIndex(str1, index1);
        let i2 = getIndex(str2, index2);
       
        if (i1 < 0 && i2 < 0) return true;
        if (i1 < 0 || i2 < 0) return false;
        if (str1[i1] !== str2[i2]) return false;

        index1 = i1 - 1;
        index2 = i2 - 1;
    }

    return true;
};

const getIndex = (str, i) => {
    let numOffset = 0;
    while (i >= 0) {
        if (str[i] === '#') numOffset++;
        else if (numOffset > 0) numOffset --;
        else break;
        console.log(numOffset, str)
        i--;
    }
    return i;
}

let x = ['xy#z', 'xzz#'];

//str1="xy#z", str2="xzz#"

//console.log(backspace_compare('xy#z', 'xzz#'));
//console.log(backspace_compare('xy#z', 'xyz#'));
//console.log(backspace_compare('xp#', 'xyz##'));
//console.log(backspace_compare('xywrrmp', 'xywrrmu#p'));


const shortest_window_sort = function(arr) {
    let k = arr.length;
    let left = 0;
    let right = k - 1;

    for(i = 0; i < k; i ++) {
        left = i + 1;

        while (arr[i] < arr[left] && left < k) {
            left ++;
        } 
        if (left === k) {
            continue;
        }
        else {
            left --;
            break;
        } 
    }

    for(i = k; i >= 0; i --) {
        right = i - 1;

        while (arr[i] > arr[right] && right >= 0) {
            right --;
        } 
        if (right === k) {
            continue;
        }
        else {
            right--;
            break;
        } 
    }

    return [left, right, right-left+1]
};

// Input = [1, 3, 2, 0, -1, 7, 10]
// Output = 5;
// console.log(shortest_window_sort(Input));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));