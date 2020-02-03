
// let solveKnapsack = function (profits, weights, capacity) {
//     const k = profits.length;
    
//     function rec(capacity, i) {
//         if (capacity < 0 || i >= k) return 0;
        

//         let profit1 = 0;
//         if (weights[i] <= capacity) {
//             profit1 = profits[i] + rec(capacity - weights[i], i + 1);
//         }

//         let profit2 = rec(capacity, i + 1);

//         return Math.max(profit1, profit2);
//     }

//     return rec(capacity, 0);
// }



// var profits = [1, 6, 10, 16];
// var weights = [1, 2, 3, 5];
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);



let solveKnapsackMemoization = function (profits, weights, capacity) {
    const k = profits.length;
    const dp = [];

    function rec(capacity, i) {
        if (capacity < 0 || i >= k) return 0;
        
        dp[i] = dp[i] || [];
        if (typeof dp[i][capacity] !==  'undefined') {
            return dp[i][capacity];
        }

        
        let profit1 = 0;
        if (weights[i] <= capacity) {
            profit1 = profits[i] + rec(capacity - weights[i], i + 1);
        }

        let profit2 = rec(capacity, i + 1);

        dp[i][capacity] = Math.max(profit1, profit2);
        return dp[i][capacity];
    }

    return rec(capacity, 0);
}



var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsackMemoization(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsackMemoization(profits, weights, 6)}`);
