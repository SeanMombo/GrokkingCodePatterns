

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let copy = JSON.parse(JSON.stringify(board));
    let width = board[0].length;
    let height = board.length;
    //live cell, <2 dies
    //live cell >=2 and <=3 lives
    //live cell >3 dies
    //dead cell == 3, lives
    let low = 2;
    let high = 3;
    
    for(let i = 0; i < width; i ++) {
        for(let j = 0; j < height; j ++) {
            let sum = getSum(copy, i, j, width, height);
            if (copy[j][i] == 1) {
                if (sum < low || sum > high) 
                    board[j][i] = 0;
                else
                    board[j][i] = 1;
            } else {
                if (sum === high) 
                    board[j][i] = 1;
                else
                    board[j][i] = 0;
            }  
        }
    }
    return board
};

var getSum = function (copy, x, y, w, h) {
    let sum = 0;
    
    for(let n = -1; n <= 1; n ++) {
        for(let m = -1; m <= 1; m ++) {
            let xx = x + n;
            let yy = y + m;

            if (xx >= 0 && xx < w && yy >= 0 && yy < h) {
                if (!(n===0 && m===0)) {
                    sum += copy[yy][xx];
                }
            } 
        }
    }

    return sum;
}; 


let g = gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);

for(i in g) {
    console.log(g[i])
}