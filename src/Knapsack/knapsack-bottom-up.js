let solveKnapsack = function (profits, weights, capacity) {
   const n = profits.length;
   if (capacity <=0 || n == 0 || weights.length != n) return 0;

   const dp = Array(n).fill(0).map(() => Array(capacity + 1).fill(0));

   for(let i = 0; i < n; i ++) dp[i][0] = 0;

   for (let c = 0; c <= capacity; c ++) {
       if (weights[0] <= c) dp[0][c] = profits[0];
   }

   for (let i = 1; i < n; i ++) {
       for (let c = 1; c <= capacity; c++) {
           let profit1 = 0;
           let profit2 = 0;

           if (weights[i] <= c) profit1 = profits[i] + dp[i -1] [c - weights[i]];

           profit2 = dp[i - 1] [c];

           dp[i][c] = Math.max(profit1, profit2);
       }
   }
   return dp[n - 1][capacity];
}


var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
