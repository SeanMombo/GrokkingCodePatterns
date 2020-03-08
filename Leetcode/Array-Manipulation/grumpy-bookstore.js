//https://leetcode.com/problems/grumpy-bookstore-owner/
// 1052. Grumpy Bookstore Owner
// Medium

var maxSatisfied = function(cust, grumpy, X) {
    // let maxHappy = 0, curHappy = 0;
    // let i = 0, size = 0, xIndex = 0;
    
    let sum = 0, maxSum = 0;
    let xIndex = 0;

    let l = 0;
    
    for(let r = 0; r < cust.length; r ++) {
        sum += grumpy[r] * cust[r]
        if (r >= X - 1){
            if (sum > maxSum) {
                xIndex = l;
                maxSum = sum;
            }
            sum -= grumpy[l] * cust[l];
            l++;
        }
    }

    for (let i = xIndex; i < xIndex + X; i++) {
        grumpy[i] = 0;
    }
    
    let res = 0;
    for (i = 0; i < cust.length; i++) {
        res += Math.abs(grumpy[i]-1) * cust[i];
    }
    
    return res;
};

console.log(maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3))

console.log(maxSatisfied( [3,2,5],[0,1,1],2));
   
console.log(maxSatisfied([5,8],[0,1],1)) //13

console.log(maxSatisfied([4,10,10], [1,1,0],2))//24
console.log(maxSatisfied(
    [9,10,4,5],
    [1,0,1,1],
    1));

console.log(maxSatisfied([2,6,6,9],
    [0,0,1,1],
    1))

console.log(maxSatisfied([3],[1],1));

console.log(maxSatisfied(
    [3,8,8,7,1],
    [1,1,1,1,1],
    3));



// const arr = [0,1,2,3];

// function slidingWindow(arr, X) {

//     let sum = 0, maxSum = 0;
//     let xIndex = 0, size = 0;

//     let i = 0;

//     while(i < arr.length) {
//         if (i < X) {
//             sum += arr[i];
//         } else {
//             sum -= arr[i-X];
//             sum += arr[i];
//         }
//         if (sum >= maxSum) {
//             xIndex = i - X;
//             if (X === 1) xIndex ++;
//             maxSum = sum;
//         }
//         console.log(sum, xIndex)
//         i++;
//     }

//     return xIndex;
// }

// console.log(slidingWindow(arr, 1))