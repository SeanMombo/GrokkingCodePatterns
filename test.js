/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coords) {
    
    let slope = (coords[1][1]-coords[0][1]) / (coords[1][0]-coords[0][0]);
    
    for(let i = 1; i < coords.length; i ++) {
        let curSlope = (coords[i][1]-coords[i-1][1]) / (coords[i][0]-coords[i-1][0]);

        if (curSlope != slope) return false;
    }
    return true;
};

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));