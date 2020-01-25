const Heap = require('collections/heap'); //http://www.collectionsjs.com

function find_sum_of_elements(nums, k1, k2) {

    const maxHeap = new Heap(nums, [], ((a,b)=>b-a));
    const maxHeap2 = new Heap();

    let i = 0;
    let sum = 0;
    
    while(i < k1) {
        maxHeap.pop();
        i++;
    }
    
    while(i < k2-1) {
        sum += maxHeap.pop();
        i++;
    }
    
    return sum;
}

console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${
    find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`);
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${
    find_sum_of_elements([3, 5, 8, 7], 1, 4)}`);
