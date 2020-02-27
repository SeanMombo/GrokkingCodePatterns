//https://leetcode.com/problems/fruit-into-baskets/
// 904. Fruit Into Baskets
// Medium

// In a row of trees, the i-th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure?

// Example 1:

// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].
// Example 2:

// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].
// Example 3:

// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2].
// Example 4:

// Input: [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can collect [1,2,1,1,2].
// If we started at the first tree or the eighth tree, we would only collect 4 fruits.
var totalFruit = function(tree) {
    if (tree.length === 0) return 0;
    if (tree.length === 1) return 1;
    
    let maxFruit = 0;
    const hash = {};
    let l = 0, r = 0;
    
    while (l < tree.length) {
        
        while (hash.length <= 2 && r < tree.length) {
            const t = tree[r];

            // expand right and add tree to hash
            if (!(t in hash)) {
                hash[t] = 0;
            } 
            hash[t] ++;
            r++;
        }
        
        //calculate max length of subarray
        if (hash.length > 2) //if we expanded to 3 trees, exclude the last fruit
            maxFruit = Math.max(maxFruit, r - l - 1);
        else //if we expanded to the end of the array, include the last fruit
            maxFruit = Math.max(maxFruit, r - l)
        
        while(tree.length === 3) {
            const t = tree[l];
            
            //shrink from left and remove trees from hash
            hash[t] --;
            if (hash[t] <= 0) delete hash[t];
            l++;
        }
    }
    return maxFruit;
};