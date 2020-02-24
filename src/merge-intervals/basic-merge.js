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


const merge = (arr) => {
    if (arr.length < 2) return arr;

    //create array for merged intervals
    const merged = [];
    // sort input array in ascending order by starting value
    arr.sort((a,b) => a.start - b.start);

    //store previous interval into variable
    let prevStart = arr[0].start
    let prevEnd = arr[0].end;

    //start loop at 1 since we've already used the first index
    for(let i = 1; i < arr.length; i ++) {
        const curr = arr[i];
        
        //if current start is less than 
        if (curr.start <= prevEnd) {
            //set prevEnd to the max of itself or the previous end
            prevEnd = Math.max(curr.end, prevEnd);
        } else {
            merged.push(new Interval(prevStart, prevEnd));
            prevStart = curr.start;
            prevEnd = curr.end;
        }
    }
    merged.push(new Interval(prevStart, prevEnd));
    return merged;
}

const arr = [new Interval(1,4), new Interval(2,6), new Interval(7, 9), new Interval(10, 11)];

console.log(merge(arr));