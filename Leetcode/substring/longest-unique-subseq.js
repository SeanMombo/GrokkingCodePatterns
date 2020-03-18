// https://leetcode.com/problems/longest-uncommon-subsequence-ii/

//const Heap = require('collections/heap')
var findLUSlength = function(strs) {

    //if lengths are equal, sort by alphabetical order, else sort by length.
    //const maxHeap = new Heap(strs, null, (a,b) => b.length == a.length ? b - a : b.length - a.length);

    const maxHeap = new Heap();
    for(str of strs) {
        maxHeap.offer(str)
    }
    
    while(maxHeap.size() > 1) {
        const top = maxHeap.poll();

        if (top !== maxHeap.peek()) {
            return top.length;
        } else {
            maxHeap.poll();       
        }
    }

    return -1;
};



class Heap {
    constructor(data = []) {
      this.data = data;
      this.comparator = (a, b) =>
        b.length - a.length || b.localeCompare(a);
      this.heapify();
    }
  
    // O(nlog(n)). In fact, O(n)
    heapify() {
      if (this.size() < 2) return;
      for (let i = 1; i < this.size(); i++) {
        this.bubbleUp(i);
      }
    }
  
    // O(1)
    peek() {
      if (this.size() === 0) return null;
      return this.data[0];
    }
  
    // O(log(n))
    offer(value) {
      this.data.push(value);
      this.bubbleUp(this.size() - 1);
    }
  
    // O(log(n))
    poll() {
      if (this.size() === 0) return null;
      const result = this.data[0];
      const last = this.data.pop();
      if (this.size() !== 0) {
        this.data[0] = last;
        this.bubbleDown(0);
      }
      return result;
    }
  
    // O(log(n))
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = (index - 1) >> 1;
        if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
          this.swap(index, parentIndex);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // O(log(n))
    bubbleDown(index) {
      const lastIndex = this.size() - 1;
      while (true) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        let findIndex = index;
        if (
          leftIndex <= lastIndex &&
          this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
        ) {
          findIndex = leftIndex;
        }
        if (
          rightIndex <= lastIndex &&
          this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
        ) {
          findIndex = rightIndex;
        }
        if (index !== findIndex) {
          this.swap(index, findIndex);
          index = findIndex;
        } else {
          break;
        }
      }
    }
  
    // O(1)
    swap(index1, index2) {
      [this.data[index1], this.data[index2]] = [
        this.data[index2],
        this.data[index1]
      ];
    }
  
    // O(1)
    size() {
      return this.data.length;
    }
  }
  
console.log(findLUSlength(["eae","aba","cdc", 'aaa']))