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

    }
}