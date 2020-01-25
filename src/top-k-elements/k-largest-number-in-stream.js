const Heap = require('collections/heap'); //http://www.collectionsjs.com

class KthLargestNumberInStream {
    constructor(nums, k) {
        this.nums = nums;
        this.k = k;
        this.minHeap = new Heap([], null, ((a,b)=>b-a));
        nums.forEach(n => this.add(n));
    }

    add(num) {
        this.minHeap.push(num);
        if (this.minHeap.length > this.k) this.minHeap.pop();
        return this.minHeap.peek();
    }
}


const kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);