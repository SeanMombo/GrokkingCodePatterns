const Heap = require('collections/heap'); //http://www.collectionsjs.com


function find_closest_elements(arr, K, X) {
    const minHeap = new Heap([], null, ((a,b) => b[0] - a[0]));


    let i = 0;
    arr.forEach(el => {
        minHeap.push([Math.abs(el-X), el]);
        i++;
    });
    
    let result = [];
    i = 0;
    while(minHeap.length && i < K) {
        result.unshift(minHeap.pop()[1])
        i++;
    }
    result.sort();
    return result;
}


console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`);
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`);
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`);
