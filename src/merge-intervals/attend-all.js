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

const attendAll = function(arr) {
    //ascending order by start time, a - b
    arr.sort((a,b) => a.start - b.start);

    let i = 1;
    let prevEnd = arr[0].end;

    while(i < arr.length) {
        if (arr[i].start < prevEnd) {
            return false
        } else {
            prevEnd = arr[i].end;
            i++;
        }
    }
    return true;
}

const arr = [new Interval(1,4), new Interval(2,5), new Interval(7,9)];

console.log(attendAll(arr));