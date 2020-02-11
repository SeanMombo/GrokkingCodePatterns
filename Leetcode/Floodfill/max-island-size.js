//// https://leetcode.com/problems/max-area-of-island/solution/
// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const numR = grid.length;
    const numC = grid[0].length;
    
    const visited = {};
    
    function key(r, c) {
        return `${r}-${c}`;
    }
    
    function rec(r, c) {
        if (r < 0 || r >= numR || c < 0 || c >= numC ||
            (key(r,c) in visited) || grid[r][c] === 0) 
            return 0;

        visited[key(r,c)] = 1;
        
        return (1 + rec(r-1,c) + rec(r+1,c) + rec(r,c-1) + rec(r,c+1));
    }
    
    let maxArea = 0;
    for(let r = 0; r < numR; r++) {
        for(let c = 0; c < numC; c++) {
            maxArea = Math.max(maxArea, rec(r,c))
        }
    }
    return maxArea;
};

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]];

 console.log(maxAreaOfIsland(grid));