//// https://leetcode.com/problems/remove-covered-intervals/
// 1288. Remove Covered Intervals
// Given a list of intervals, remove all intervals that are covered by another interval in the list. Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

//     After doing so, return the number of remaining intervals.
    
     
    
//     Example 1:
    
//     Input: intervals = [[1,4],[3,6],[2,8]]
//     Output: 2
//     Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
     
    
//     Constraints:
    
//     1 <= intervals.length <= 1000
//     0 <= intervals[i][0] < intervals[i][1] <= 10^5
//     intervals[i] != intervals[j] for all i != j

var removeCoveredIntervals = function(arr) {
    if (arr.length === 0) return 0;
    arr.sort((a,b)=>a[0]-b[0]);
    
    let numRemoved = 0;
    let l = arr[0][0], r = arr[0][1];
    
    for(let i = 1; i < arr.length; i ++) {
        let [cl, cr] = arr[i];
        
        if (cl >= l && cr <= r) {
            numRemoved++;
        } else {
            l = cl;
            r = cr;
        }
    }
    return arr.length - numRemoved;
};

console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]));
