
function solveKnapsack(profits, wieghts, capacity) {
    const m = profits.length;
    const n = capacity + 1;
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    
    for(let i = 0; i < m; i++) {
        dp[i][0] = 0;
    }

    for(let c = 1; c < n; c++) {
        if (weights[0] <= capacity)
            dp[0][c] = profits[0];
    }
    
    for(let i = 1; i < m; i++) {
        for(let c = 1; c < n; c++) {
            let p1 = 0, p2 = 0;

            if (weights[i] <= c) p1 = profits[i] + dp[i-1][c - weights[i]];
            p2 = dp[i-1][c];

            dp[i][c] = Math.max(p1, p2);
        }
    }
    //console.log(dp)
    return dp[m-1][n-1]
}

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);