///https://leetcode.com/problems/push-dominoes/
// 838. Push Dominoes
// Medium

// There are N dominoes in a line, and we place each domino vertically upright.

// In the beginning, we simultaneously push some of the dominoes either to the left or to the right.



// After each second, each domino that is falling to the left pushes the adjacent domino on the left.

// Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

// When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

// For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

// Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.

// Return a string representing the final state. 

// Example 1:

// Input: ".L.R...LR..L.."
// Output: "LL.RR.LLRRLL.."
// Example 2:

// Input: "RR.L"
// Output: "RR.L"
// Explanation: The first domino expends no additional force on the second domino.

/**
 * @param {string} dominoes
 * @return {string}
 */

var pushDominoes = function(dominoes) {
    const res = [];
    const L = [];
    const R = [];
    //loop through domiones and create hash map of indicies with L and R as keys
    for(let i = 0; i < dominoes.length; i++) {
        const c = dominoes[i];

        if (c === "L") L.push(i);
        if (c === "R") R.push(i);
    }
    
    let i = 0;
    let j = 0;



    while(i < L.length && j < R.length) {

        if (L[i] < R[j]) {
            
            const temp = [];
            while(temp.length <= L[i])
            {
                temp.push("L");
            }
            res.push(...temp)
            i++;
        }

        if (R[j] < L[i]) {
            const dist = (L[i] - R[j]) + 1;
            const mid = Math.floor(dist/2);
            let ix = 0;

            while(res.length < R[j]) {
                res.push(".");
            }
            const temp = [];
            while(ix <= mid*2) {
                if (ix < mid) {
                    temp.push("R");
                } else if (ix > mid) {
                    temp.push("L");
                } 
                ix++;
            }
            
            if (dist %2 !== 0) {
                temp.splice(mid, 0, '.');
            }
           
            res.push(...temp);
            j++;
            i++;
        }
        
    }
    
    if (L[i-1] > R[j-1]) {
        while(res.length < dominoes.length) {
            res.push(".");
        }
    }
    if (L[i-1] < R[j-1]) {
        while(res.length < dominoes.length) {
            res.push("R");
        }
    }
    return res.join('');
};

console.log(pushDominoes("RR.L"))