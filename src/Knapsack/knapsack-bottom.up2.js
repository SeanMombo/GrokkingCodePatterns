
// function solveKnapsack(profits, wieghts, capacity) {
//     const m = profits.length;
//     const n = capacity + 1;
//     const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    
//     for(let i = 0; i < m; i++) {
//         dp[i][0] = 0;
//     }

//     for(let c = 1; c < n; c++) {
//         if (weights[0] <= capacity)
//             dp[0][c] = profits[0];
//     }
    
//     for(let i = 1; i < m; i++) {
//         for(let c = 1; c < n; c++) {
//             let p1 = 0, p2 = 0;

//             if (weights[i] <= c) p1 = profits[i] + dp[i-1][c - weights[i]];
//             p2 = dp[i-1][c];

//             dp[i][c] = Math.max(p1, p2);
//         }
//     }
//     //console.log(dp)
//     return dp[m-1][n-1]
// }

// var profits = [1, 6, 10, 16];
// var weights = [1, 2, 3, 5];
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);



// find 2 subsets with the min difference between them
function canPartition(nums) {
    const n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) sum += nums[i];
    let requiredSum = Math.floor(sum/2);

    const dp = Array(n).fill(false).map(() => Array(sum).fill(false));

    for(let i = 0; i < n; i ++) {
        dp[i][0] = true;
    }

    for(let i = 1; i <= requiredSum; i ++) {
        dp[0][i] = nums[0] === i;
    }
    // console.log(dp)

    for(let i = 1; i < n; i ++) {
        for(let s = 1; s <= requiredSum; s ++) {
            dp[i][s] = dp[i-1][s] || (s >= nums[i] && dp[i-1][s-nums[i]]);
        }
    }
    console.log(dp)
    console.log(sum)
    let sum1 = 0;
    for(let s = requiredSum; s >= 0; s--) {
        if (dp[n-1][s] === true) {
            sum1 = s;
            break;
        }
    }
    
    const sum2 = sum - sum1;
    return Math.abs(sum2 - sum1);
}


// console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
// console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);