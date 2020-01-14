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
    
    let i = 0;

    //skip and add all intervals that end before new_interval starts
    while (i < intervals.length && intervals[i].end < new_interval.start) {
        merged.push(intervals[i]);
        i += 1;
    }

    //merge all intervals that overlap with new_interval
    while(i < intervals.length && intervals[i].start <= new_interval.end) {
        new_interval.start = Math.min(intervals[i].start, new_interval.start);
        new_interval.end = Math.max(intervals[i].end, new_interval.end);
        i += 1;
    }

    merged.push(new_interval);

    //add whatever is left
    while(i < intervals.length) {
        merged.push(intervals[i])
        i += 1;
    }
    return merged;
};


const intersection = function(intervals_a, intervals_b) {
    let result = [];
    let i = 0, j = 0;
    
    //while both variables are still within bounds
    while (i < intervals_a.length && j < intervals_b.length) {
        //if the start value of intervalA is within intervalB
        let aOverlapsB = intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;
        let bOverlapsA = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;

        if (aOverlapsB || bOverlapsA) {
            let newStart = Math.max(intervals_a[i].start, intervals_b[j].start);
            let newEnd = Math.min(intervals_a[i].end, intervals_b[j].end);
            result.push(new Interval(newStart, newEnd));   
        }

        if (intervals_a[i].end < intervals_b[j].end) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};
  


const can_attend_all_appointments = function(intervals) {
    intervals.sort((a,b) => a.start - b.start);
    let i = 1;
    let end = intervals[0].end;

    while(i < intervals.length) {
        if (intervals[i].start < end ) {
            return false;
        }
        end = intervals[i].end;
        i ++; 
    }
    return true;
};
// my alt solution
// const can_attend_all_appointments = function(intervals) {
//     intervals.sort((a,b) => a.start - b.start);
//     let i = 1;
    
//     for(let i = 0; i < intervals.length; i ++) {
//         let end = intervals[i].end;
//         let j = i + 1;

//         while(j < intervals.length) {
//             if (end > intervals[j].start) {
//                 return false;
//             }
//             j ++;  
//         }
//     }
//     return true;
// };


class Meeting {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
};

function min_meeting_rooms(meetings) {
    // sort the meetings by start time
    meetings.sort((a, b) => a.start - b.start);

    let minRooms = 0,
        minHeap = new Heap([], null, ((a, b) => b.end - a.end));
    for (i = 0; i < meetings.length; i++) {
        // remove all the meetings that have ended
        while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
            minHeap.pop();
        }
        // add the current meeting into min_heap
        minHeap.push(meetings[i]);
        // all active meetings are in the min_heap, so we need rooms for all of them.
        minRooms = Math.max(minRooms, minHeap.length);
    }
    return minRooms;
}

class Job {
    constructor(start, end, cpu_load) {
        this.start = start;
        this.end = end;
        this.cpu_load = cpu_load;
    }
};

const find_max_cpu_load = function(jobs) {
    jobs.sort((a,b) => a.start - b.start);
    let overlap = [];

    if (jobs[1].start < jobs[0].end) {
        overlap.push(jobs[0]);
    }

    for(let i = 1; i < jobs.length; i++) {
        if (jobs[i].start < jobs[i-1].end) {
            overlap.push(jobs[i]);
        }
    }
    if (overlap.length === 0) {
        const l = jobs.reduce((prevMax, el) => {
            return el.cpu_load > prevMax ? el.cpu_load : prevMax;
        }, 0);
        return l
    } else {
        // console.log(overlap)
        let sum = 0;
        for(j in overlap) {
            sum+=overlap[j].cpu_load;
        }
        return sum;
    }
};

// console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
// [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
// console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
// [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
// console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
// [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)

