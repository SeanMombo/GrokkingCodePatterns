
const Heap = require('collections/heap');


class SlidingWindowMedian {
    constructor() {
        this.maxHeap = new Heap([], null, ((a,b)=>a-b));
        this.minHeap = new Heap([], null, ((a,b)=>b-a));
    }

    find_sliding_window_median(nums,k) {
        const result = Array(nums.length - k + 1).fill(0.0);

        for(let i = 0; i < nums.length; i++) {
            if(this.maxHeap.length === 0 || nums[i] <= this.maxHeap.peek()) {
                this.maxHeap.push(nums[i])
            }
        }
    }

    rebalance() {

    }
}


let slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);
console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);

