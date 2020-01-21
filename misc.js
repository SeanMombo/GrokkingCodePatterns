/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
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

// console.log(spiralOrder([[2,5],[8,4],[0,-1]]))


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



