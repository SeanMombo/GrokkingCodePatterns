const Heap = require('collections/heap'); //http://www.collectionsjs.com


function find_k_frequent_numbers(nums, k) {
    let freq = {};
    for(i in nums) {
        //put n in hashmap if it doesnt exist, increment it once it does.
        let n = nums[i];
        if (!(n in freq)){
            freq[n] = 0;
        }
        freq[n]++;
    }

    const minHeap = new Heap([], null, ((a,b)=>b[0]-a[0]));

    Object.keys(freq).forEach(n => {
        minHeap.push([freq[n], n]);
        if (minHeap.length > k) {
            minHeap.pop();
        }
    });

    const result = [];
    while(minHeap.length) {
        result.push(minHeap.pop()[1]);
    }
    return result;
}


console.log(`Here are the K frequent numbers: ${
    find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`);

console.log(`Here are the K frequent numbers: ${
    find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`);