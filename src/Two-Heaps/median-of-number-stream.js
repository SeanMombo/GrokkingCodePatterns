const Heap = require('collections/heap');

class MedianOfAStream {
    constructor() {
        this.minHeap = new Heap([], null, ((a,b) => b-a));  // keeps track of the smallest of the largest
        this.maxHeap = new Heap([], null, ((a,b) => a-b));  // keeps track of the largest of the smallest
    }

    insert_num(num) {
        if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num)
            this.maxHeap.push(num);
        else 
            this.minHeap.push(num);

        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.maxHeap.length < this.minHeap.length) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }

    find_median() {
        if (this.maxHeap.length === this.minHeap.length) {
            return this.maxHeap.peek() / 2 + this.minHeap.peek() / 2;
        } else return this.maxHeap.peek();
    }

}



const medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);





