// let canPartition = function (num) {
//     let sum = 0;
//     for(let i = 0; i < num.length; i ++) sum += num[i];
//     //numbers dont evenly divide into 2 subsets
//     if (sum %2 !== 0) return false;

//     function rec(num, sum, i) {
//         if (sum === 0) return true;
//         if (num.length === 0 || i >= num.length) return false;

//         if (num[i] <= sum) {
//             if (rec(num, sum - num[i], i + 1)) return true;
//         }
//         return rec(num, sum, i + 1);
//     }

//     return rec(num, sum/2, 0);
// }

// console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
// console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
// console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);//part 2


const canPartitionDP = function(num) {
    const dp = [];
    let sum = 0;
    for (let i = 0; i < num.length; i ++) sum += num[i];
    if (sum %2 !== 0) return false;
    
    function rec(dp, num, sum, i) {
        if (sum === 0) return true;

        if (num.length === 0 || i >= num.length) return false;

        dp[i] = dp[i] || [];

        if (typeof dp[i][sum] === 'undefined') {
            if (num[i] <= sum) {
                if (rec(dp, num, sum - num[i], i + 1)) {
                    dp[i][sum] = true;
                    return true;
                }
            }
            dp[i][sum] = rec(dp, num, sum, i + 1);
        }
        return dp[i][sum];
    }   

    return rec(dp, num, sum / 2, 0);
}


console.log(`Can partitioning be done: ---> ${canPartitionDP([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartitionDP([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartitionDP([2, 3, 4, 6])}`);
