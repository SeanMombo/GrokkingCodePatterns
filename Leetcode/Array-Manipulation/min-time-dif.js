
// https://leetcode.com/problems/minimum-time-difference/
// 539. Minimum Time Difference
// Medium

var findMinDifference = function(timePoints) {
    for(const [index, time] of timePoints.entries()) {
        let [h, m] = time.split(':');
        h = Number(h); m = Number(m);
        timePoints[index] = h * 60 + m;
    }
    timePoints.sort((a,b) => {
        return a-b
    })

    function timeDif(t1, t2) {
        return 720 - Math.abs(Math.abs(t1-t2) - 720);
    }

    let minDif = Infinity;
    for(let i = 1; i < timePoints.length; i ++) {
        minDif = Math.min(minDif, timeDif(timePoints[i], timePoints[i-1]));
    }

    minDif = Math.min(minDif, timeDif(timePoints[timePoints.length-1], timePoints[0]));
    return minDif;
};

console.log(findMinDifference(["23:59","00:00", "14:25", "12:10", "19:40"]));