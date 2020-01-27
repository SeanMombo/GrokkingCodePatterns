//// https://leetcode.com/problems/sliding-window-maximum/
// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

// Example:

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7] 
// Explanation: 

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Note:
// You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

// Follow up:
// Could you solve it in linear time?


//// This solution is O(N * logK) time
let Heap = require('collections/heap');

var maxSlidingWindow = function(nums, k) {
    const maxHeap = new Heap();
    const results = [];
    for(i = 0; i < k; i ++) {
        maxHeap.push(nums[i]);
    }
    results.push(maxHeap.peek());

    let l = 0;

    for(i = k; i < nums.length; i ++) {
        maxHeap.delete(nums[l++]);
        maxHeap.push(nums[i]);
        results.push(maxHeap.peek());
    }

    return results;
}


var maxSlidingWindow2 = function(nums, k) {
    let res=[];
    if(!nums.length) return res;
    let deque=[];

    nums.forEach((n, i) => {
        while(deque.length != 0 && deque[deque.length - 1] < n) {
            deque.pop();
        }
        deque.push(n);

        if (i >= (k-1)) {
            res.push(deque[0]);
            if (deque[0] === nums[i-(k-1)]) {
                deque.shift(); 
            }
        }   
    });
    return res;
};


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], k = 3));
console.log(maxSlidingWindow2([1,3,-1,-3,5,3,6,7], k = 3));
// [1,3,-1,-3,5,3,6,7]

// [1]
// [1,3], max = 3; l = 1;
// [1,3,-1], max = 3; l = 1; [3];
// [3,-1,-3], max = 3; l = 1; [3,3];
// [-1,-3,5], max = 5; l = 1; [3,3];