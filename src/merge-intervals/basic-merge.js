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


const mergeOld = (arr) => {
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


var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    const results = [];
    
    let prevStart = intervals[0][0];
    let prevEnd = intervals[0][1];
    
    for(let i = 1; i < intervals.length; i ++) {
        
        if (intervals[i][0] <= prevEnd) {
            prevEnd = Math.max(intervals[i][1], prevEnd);
        } else {
            results.push([prevStart, prevEnd]);
            prevStart = intervals[i][0];
            prevEnd = intervals[i][1];
        }

    }
    results.push([prevStart, prevEnd]);
    return results;
};
//[[1,3],[2,6],[8,10],[15,18]]
const arr = [new Interval(1,3), new Interval(2,6), new Interval(8, 10), new Interval(15, 18)];

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));



