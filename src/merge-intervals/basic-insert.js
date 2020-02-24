class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const insert = function(arr, newInterval) {
    // create result array for intervals 
    const merged = [];

    // use while loop init to 0, instead of for loop
    let i = 0;

    //Bounds check AND check if we can insert newInterval or not
    // We loop through and ignore everything before our insertion location
    while (i < arr.length && arr[i].end < newInterval.start) {
        merged.push(arr[i]);
        i++;
    }
    //We have arrived at the end of the list, or we've arrived at our insertion location

    while (i < arr.length && arr[i].start <= newInterval.end) {
        const curr = arr[i];
        //Merge any intervals that overlap the interval we are inserting
            // min the start values so our new interval starts as early as possible
            newInterval.start = Math.min(curr.start, newInterval.start);
            // max the end values so it ends as late as possible
            newInterval.end = Math.max(curr.end, newInterval.end);
        i++;
    }
    merged.push(newInterval);

    // add the remaining intervals
    while(i < arr.length) {
        merged.push(arr[i]);
        i++;
    }
    return merged; 
}

const arr = [new Interval(1,3), new Interval(4, 9), new Interval(15, 17), new Interval(19, 30)];

console.log(insert(arr, new Interval(10, 16)));

// [
//     Interval { start: 1, end: 3 },
//     Interval { start: 4, end: 9 },
//     Interval { start: 10, end: 17 },
//     Interval { start: 19, end: 30 }
// ]