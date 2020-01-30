//// https://leetcode.com/problems/find-k-th-smallest-pair-distance/
const Heap = require('collections/heap');

var smallestDistancePair = function(nums, k) {
    let maxHeap = new Heap([], null, ((a,b) => a - b));

    for(let i = 0; i < nums.length-1; i++) {
        let dist = nums[i+1] - nums[i];
        maxHeap.push(dist);
        if (maxHeap.length > k) {
            maxHeap.pop();
        }
    }
    return maxHeap.peek();
};

console.log(smallestDistancePair([1,3,1], 1))