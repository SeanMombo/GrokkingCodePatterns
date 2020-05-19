const heap = require('collections/heap')

class Job {
    constructor(start, end, load) {
        this.start = start;
        this.end = end;
        this.load = load;
    }
};

const find_max_cpu_load = function(jobs) {
    const maxHeap = new heap([], null, (a,b) => a.end - b.end);
    let load = jobs[0].load;
    let maxLoad = load;
    let i = 1;
    maxHeap.push(jobs[0]);

    while(i < jobs.length && maxHeap.length) {
        let cur = jobs[i]
        if (cur.start <= maxHeap.peek().end && cur.end >= maxHeap.peek().start) {
            load += cur.load;
            maxHeap.push(cur);
        } else {
            while (maxHeap.length && cur.start <= maxHeap.peek().end) {
                load -= maxHeap.pop().load;
            }
            maxHeap.push(cur);
        }
        i++;
        maxLoad = Math.max(maxLoad, load);
    }
    
    return maxLoad;
};


// console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
// [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
[new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
// console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
// [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)
