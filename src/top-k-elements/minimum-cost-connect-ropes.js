const Heap = require('collections/heap'); //http://www.collectionsjs.com


function minimum_cost_to_connect_ropes(ropeLengths) {
    // add all ropes to heap
    const minHeap = new Heap(ropeLengths, null, ((a,b) => b - a));

    let sum = 0;
    // pop the 2 smallest values, then add the sum back to the heap; 
    // 2 ropes combine into one rope. Repeat until only one rope left
    while(minHeap.length > 1) {
        const temp = minHeap.pop() + minHeap.pop();
        sum += temp;
        minHeap.push(temp);
    }
    return sum;
}


console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`);
