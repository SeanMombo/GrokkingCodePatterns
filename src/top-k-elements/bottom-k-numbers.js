const Heap = require('collections/heap'); //http://www.collectionsjs.com



function find_k_smallest_numbers(nums, k) {
    const maxHeap = new Heap();

    for(let i = 0; i < k; i ++) {
        maxHeap.push(nums[i])
    }

    for(let i = k; i < nums.length; i ++) {
        if (nums[i] < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(nums[i]);
        }
    }

    return maxHeap.peek();
}

console.log(`Here are the top K numbers: ${find_k_smallest_numbers([3, 1, 5, 12, 2, 11], 3)}`);
console.log(`Here are the top K numbers: ${find_k_smallest_numbers([5, 12, 11, -1, 12], 3)}`);