const Heap = require('collections/heap'); //http://www.collectionsjs.com

function find_maximum_distinct_elements(nums, k) {

    //// Populate hashmap with number frequencies
    let freq = {};
    nums.forEach(num => {
        if (!(num in freq)) freq[num] = 0;
        freq[num]++;
    });

    //// create and populate min heap. Object = [freq, num]
    const minHeap = new Heap([], null, ((a,b) => b[0] - a[0]));

    Object.keys(freq).forEach(key => {
        minHeap.push([freq[key], key]);
    });

    const result = [];
    while (minHeap.length) {
        let [freq, num] = minHeap.pop();
        while(freq > 1 && k > 0) {
            freq--;
            k--;
        }
        if (freq === 1) {
            result.push(num);
        }
    }
    if (k > 0) result.splice(0, k);

    return result;
}


console.log(`Maximum distinct numbers after removing K numbers: ${
    find_maximum_distinct_elements([7, 3, 5, 8, 5, 3, 3], 2)}`);
console.log(`Maximum distinct numbers after removing K numbers: ${
    find_maximum_distinct_elements([3, 5, 12, 11, 12], 3)}`);
console.log(`Maximum distinct numbers after removing K numbers: ${
    find_maximum_distinct_elements([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)}`);



// [7, 3, 5, 8, 5, 3, 3]

// {8:1, 7:1, 3:3, 5:2}