const Heap = require('collections/heap'); 

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

class EmployeeInterval {
    constructor(interval, employeeIndex, intervalIndex) {
        this.interval = interval; // interval representing employee's working hours
        // index of the list containing working hours of this employee
        this.employeeIndex = employeeIndex;
        this.intervalIndex = intervalIndex; // index of the interval in the employee list
    }
}

function find_employee_free_time(schedule) {

    if (schedule === null ) {
        return result;
    }
    const minHeap = new Heap([], null, ((a,b) => a.interval.start < b.interval.start));
    const results = [];
    //add the first interval of each employee to the heap
    let i = 0;
    while (i < schedule.length) {
        //need to keep track of which interval belongs to which employee
        const empInterval = new EmployeeInterval(schedule[i][0], i, 0)
        minHeap.push(empInterval);
        i++;
    }

    let previousInterval = minHeap.peek().interval;

    while(minHeap.length > 0) {
 
        let heapTop = minHeap.pop();
        
        if (heapTop.interval.start > previousInterval.end) {
            results.push(new Interval(previousInterval.end, heapTop.interval.start));
            previousInterval = heapTop.interval;
        } else { //overlap, update previousInterval if it ends before current interval
            if (previousInterval.end < heapTop.interval.end) {
                previousInterval = heapTop.interval;
            }
        }

        const employeeSchedule = schedule[heapTop.employeeIndex];
        heapTop.intervalIndex++;
        if (heapTop.intervalIndex < employeeSchedule.length) {
          
            const empInterval = new EmployeeInterval(
                employeeSchedule[heapTop.intervalIndex], 
                heapTop.employeeIndex, 
                heapTop.intervalIndex);
                
            minHeap.push(empInterval);
        }
    }
    return results;
}

// Free intervals: [3, 5]
// Free intervals: [4, 6][8, 9]
// Free intervals: [5, 7]

let input = [
    [new Interval(1, 3), new Interval(5, 6)],
    [new Interval(2, 3), new Interval(6, 8)],
];
process.stdout.write('Free intervals: ', end = '');
let result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

input = [
    [new Interval(1, 3), new Interval(9, 12)],
    [new Interval(2, 4)],
    [new Interval(6, 8)],
];
process.stdout.write('Free intervals: ', end = '');
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

input = [
    [new Interval(1, 3)],
    [new Interval(2, 4)],
    [new Interval(3, 5), new Interval(7, 9)],
];
process.stdout.write('Free intervals: ', end = '');
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();