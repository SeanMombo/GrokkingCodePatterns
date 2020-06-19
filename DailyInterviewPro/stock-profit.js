// You are given an array. Each element represents the price of a stock on that particular day. 
//Calculate and return the maximum profit you can make from buying and selling that stock only once.

// For example: [9, 11, 8, 5, 7, 10]

// Here, the optimal trade is to buy when the price is 5, and sell when it is 10, 
//so the return value should be 5 (profit = 10 - 5 = 5).

//maximize profit

// brute force
// time = O(N^2)
// space = O(1)
// function buy_and_sell(stocks) {
//     //variables
//     let maxProfit = -Infinity;

//     for(let i = 0; i < stocks.length; i++) {
//         let cur = stocks[i];

//         for(let j = i+1; j < stocks.length; j++) {
//             let dif = stocks[j] - cur;
//             maxProfit = Math.max(maxProfit, dif);
//         }
//     }
//     return maxProfit;
// }

function buy_and_sell(stocks) {
    //variables
    let minPrice = Infinity;
    let maxProfit = -Infinity;

    for(let i = 0; i < stocks.length; i++) {
        let cur = stocks[i];
        minPrice = Math.min(minPrice, cur);
        maxProfit = Math.max(cur - minPrice, maxProfit);
    }
    return maxProfit;
}

console.log(buy_and_sell([7, 1, 5, 3, 6, 4]));