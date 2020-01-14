class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
  
    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
}
  
  
const merge = function(intervals) {
    if (intervals.length < 2) {
        return intervals;
      }
    const merged = []
    intervals.sort((a,b) => a.start - b.start);

    let startPrev = intervals[0].start,
        endPrev = intervals[0].end;

    for(let i = 1; i < intervals.length; i ++) {
        const interval = intervals[i];

        // current interval starts at earlier value than previous end
        if (interval.start <= endPrev) {
            endPrev = Math.max(interval.end, endPrev);
        } else {
            merged.push(new Interval(startPrev, endPrev));
            startPrev = interval.start;
            endPrev = interval.end;
        }
    }
    merged.push(new Interval(startPrev, endPrev));
    return merged;

};


const insert = function(intervals, new_interval) {
    merged = [];
    
    let start;
    let end;

    let newStart = new_interval.start;
    let newEnd = new_interval.end;

    for(let i = 0; i < intervals.length; i ++) {
        let interval = intervals[i];
        
    
        if (newStart <= end) {
            end = interval.end;
        }

        start = interval.start;
    }

    return merged;
};

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 6]);
result = "";
for(i=0; i < intervals.length; i++)
result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 10]);
result = "";
for(i=0; i < intervals.length; i++)
result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

intervals = insert([[2, 3], [5, 7]], [1, 4]);
result = "";
for(i=0; i < intervals.length; i++)
result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);