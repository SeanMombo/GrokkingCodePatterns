//merge k sorted lists
const Heap = require('collections/heap'); //http://www.collectionsjs.com



function find_Kth_smallest(lists, k) {
    const minHeap = new Heap([], null, ((a,b) => a[0] - b[0]));

    for(let i = 0; i < lists.length; i ++) {
        minHeap.push([lists[i][0], 0, lists[i]]);
    }

    let numberCount = 0,
        number = 0;
    
    while (minHeap.length) {
        [number, i, list] = minHeap.pop();
        numberCount += 1;

        if (numberCount === k)
            break;

        if (list.length > i + 1) {
            minHeap.push([list[i+1], i+1, list]);
        }
    }
    return number;
}


console.log(`Kth smallest number is: ${find_Kth_smallest([
    [2, 6, 8],
    [3, 6, 7],
    [1, 3, 4],
  ], 5)}`);
  