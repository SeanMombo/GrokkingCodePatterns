var numsSameConsecDiff = function(N, K) {
    const res = new Set();
    
    function helper(num) {
        
        if (Math.floor(Math.log10(num) + 1) === N || (num === 0)) {
            if (num === 0 && N != 1) return;
            res.add(num);
            return;
        }
        
        for(let i = 0; i < 10; i ++) {
            if (num === undefined) {
                helper(i);
               
            } else {
                if (Math.abs(num % 10 - i) === K) {
                    helper(num * 10 + i);
                }
            }
        }
    }
    helper(undefined)
    return [...res];
};


console.log(numsSameConsecDiff(2,0))



var matrixBlockSum = function(mat, K) {
    let sum = [], ans = [];
    let numR = mat.length, numC = mat[0].length;
    
    // create prefix sum array
    for (let r = 0; r < numR; r++) {
        sum[r] = [];
        for (let c = 0; c < numC; c++) {
            if (r === 0 && c === 0) {
                sum[r][c] = mat[r][c];
            } else if (r === 0 && c > 0) {
                sum[r][c] = mat[r][c] + sum[r][c-1];
            }  else if (r > 0 && c === 0) {
                sum[r][c] = mat[r][c] + sum[r-1][c];
            } else {
                sum[r][c] = mat[r][c] + sum[r-1][c] + sum[r][c-1] - sum[r-1][c-1];
            }
        }
    }
    
    // find range sum for each index
    for (let r = 0; r < numR; r++) {
        ans[r] = [];
        for (let c = 0; c < numC; c++) {
            let r1 = Math.max(r-K, 0),      c1 = Math.max(c-K, 0),
                r2 = Math.min(r+K, numR-1), c2 = Math.min(c+K, numC-1);
            
            if (r1 === 0 && c1 === 0) {
                ans[r][c] = sum[r2][c2]
            } else if (r1 === 0 && c1 > 0) {
                ans[r][c] = sum[r2][c2] - sum[r2][c1-1];
            }  else if (r1 > 0 && c1 === 0) {
                ans[r][c] = sum[r2][c2] - sum[r1-1][c2];
            } else {
                ans[r][c] = sum[r2][c2] - sum[r1-1][c2] - sum[r2][c1-1] + sum[r1-1][c1-1]
            }
        }
    }
    
    return ans;
};
