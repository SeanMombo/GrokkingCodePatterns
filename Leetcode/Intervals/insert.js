
var insert = function(intervals, newInterval) {
    let results = [];
    let i = 0;
    while(i < intervals.length && intervals[i][1] < newInterval[0]) {
        results.push([intervals[i][0], intervals[i][1]]);
        i++;
    }

    while(i < intervals.length && intervals[i][0] <= newInterval[1]) {
        const [iStart, iEnd] = intervals[i];
        newInterval[0] = Math.min(newInterval[0], iStart);
        newInterval[1] = Math.max(newInterval[1], iEnd);
        
        i++;
    }
    results.push([newInterval[0], newInterval[1]]);

    while(i < intervals.length) {
        results.push([intervals[i][0], intervals[i][1]]);
        i++;
    }   
    return results;
};
console.log(insert([[1,5]],[5,7]))