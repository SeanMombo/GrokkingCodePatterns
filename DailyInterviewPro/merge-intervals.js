/*
You are given an array of intervals - that is, an array of tuples (start, end). 
The array may not be sorted, and could contain overlapping intervals. 
Return another array where the overlapping intervals are merged.

For example:
[(1, 3), (5, 8), (4, 10), (20, 25)]

This input should return [(1, 3), (4, 10), (20, 25)] 
since (5, 8) and (4, 10) can be merged into (4, 10).

eg.
print merge([(1, 3), (5, 8), (4, 10), (20, 25)])
# [(1, 3), (4, 10), (20, 25)]*/


// [(1, 3), (5, 8), (4, 10), (20, 25)]
// //worst case O(n^2) time complexity

// cur         = (4, 10)
// next        = (5, 8)
// newTuple    = 

// output      = [(1, 3), (4, 10) ]

const merge = (intervals) => {
    
    //variables
    //cur
    const merged = {};
    let ans = [];
    let i = 0;
    //loop
    for(let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        if (i in merged) continue;

        for(let j = i+1; j < intervals.length; j++) {
            
            let next = intervals[j];
            
            if ((next[0] >= cur[0] && next[0] <= cur[1]) ||
                (cur[0] >= next[0] && cur[0] <= next[1])) {
                    cur[0] = Math.min(cur[0], next[0]);
                    cur[1] = Math.max(cur[1], next[1]);
                    merged[i] = 1;
                    merged[j] = 1;
                }
        }

        merged[i] = 1;

        ans.push(cur);

    }
    return ans;
}

console.log(merge([ [5, 8], [4, 10], [20, 25], [1, 3]]));

