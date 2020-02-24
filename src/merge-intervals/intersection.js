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

const intersection = function(A, B) {

    let result = [];
    let i = 0, j = 0;

    // loop through both lists. 
    while (i < A.length & j < B.length) {
        // remember the 4 possible overlaps
        let aOverB = A[i].start >= B[j].start && A[i].start <= B[j].end;
        let bOverA = B[j].start >= A[i].start && B[j].start <= A[i].end;
    
        // if either is overlapping
        if (aOverB || bOverA) {
            //merge
            const mergeStart = Math.min(A[i].start, B[j].start);
            const mergeEnd = Math.max(A[i].end, B[j].end);
            const mergeInterval = new Interval(mergeStart, mergeEnd);
            result.push(mergeInterval);
        }

        if (A[i].end < B[j].end) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}

const arr1 = [new Interval(1,3), new Interval(5, 6), new Interval(7, 9)];
const arr2 = [new Interval(2,3), new Interval(5, 7)];

console.log(intersection(arr1,arr2));
