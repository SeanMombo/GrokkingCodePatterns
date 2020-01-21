/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//// https://leetcode.com/problems/spiral-matrix/
var spiralOrder = function(matrix) {
    
    if (matrix.length === 0) return [];
    // matrix[y][x];
    // dir = 0,1,2,3 = right,down,left,up
    
    let x = 0, 
        y = 0,
        dir = 0,
        result = [];
    
    while(matrix[y][x] !== null) {
        
        result.push(matrix[y][x]);
        matrix[y][x] = null;
        
        let c1,c2,c3,c4;
        
        c1 = checkBounds(matrix, y, x+1);
        c2 = checkBounds(matrix, y+1, x);
        c3 = checkBounds(matrix, y, x-1);
        c4 = checkBounds(matrix, y-1, x);
        
        if (!c1 && !c2 && !c3 && !c4) {
            return result;
        } else {
            if (dir === 0) {
                if (c1) x += 1;
                else {
                    dir++;
                    y += 1;
                }
            } else if (dir === 1) {
                if (c2) y += 1;
                else {
                    dir++;
                    x -= 1;
                    console.log(x,y)
                }
            } else if (dir === 2) {
                if (c3) x -= 1;
                else {
                    
                    dir++;
                    y -= 1;
                }
            } else if (dir === 3) {
                if (c4) y -= 1;
                else {
                    dir++;
                    x += 1;
                }
            }
        }
        dir %= 4;
        
    }
    return result;
};

var checkBounds = function(matrix, y, x) {
    let width = matrix[0].length;
    let height = matrix.length;

    let ret = (y >= 0 && y < height) && (x >= 0 && x < width) ? true : false;
    if (!ret) return false;
    if (matrix[y][x] === null) return false;
    return ret;
    
}
