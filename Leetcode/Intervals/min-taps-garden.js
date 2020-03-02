// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/

// 1326. Minimum Number of Taps to Open to Water a Garden
// Hard

// There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point n. (i.e The length of the garden is n).

// There are n + 1 taps located at points [0, 1, ..., n] in the garden.

// Given an integer n and an integer array ranges of length n + 1 where ranges[i] (0-indexed) means the i-th tap can water the area [i - ranges[i], i + ranges[i]] if it was open.

// Return the minimum number of taps that should be open to water the whole garden, If the garden cannot be watered return -1.

 
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    const intervals = [];
    let i = 0;
    //convert ranges into intervals
    while(i < n+1) {
        intervals[i] = [i - ranges[i], i + ranges[i]];
        i++;
    }
    //sort by start time
    intervals.sort((a,b) => a[0] - b[0]);

    const res = [];
    res.push(intervals[0]);
    for (i = 1; i < n + 1; i ++) {
        if (intervals[i-1]){}
    }
};

console.log(minTaps(5, [3,4,1,1,0,0]))