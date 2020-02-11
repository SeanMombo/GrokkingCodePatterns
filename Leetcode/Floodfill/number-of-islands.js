// // https://leetcode.com/problems/number-of-islands/
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return grid;
    
    const numR = grid.length;
    const numC = grid[0].length;
    
    const seen = Array(numR).fill().map(() => Array(numC));
    
    function rec(r, c) {
        if (r < 0 || r >= numR || c < 0 || c >= numC || seen[r][c] || grid[r][c] === '0') {
            return;
        }    
        seen[r][c] = 1;
        
        rec(r-1,c);
        rec(r+1,c);
        rec(r,c-1);
        rec(r,c+1)
    }
    
    let numIslands = 0;
    for(let r = 0; r < numR; r ++) {
        for (let c = 0; c < numC; c ++)  {
            if (grid[r][c] === '1' && !seen[r][c]) {
                rec(r,c);
                numIslands++;
            }
        }
    }
    return numIslands;
};