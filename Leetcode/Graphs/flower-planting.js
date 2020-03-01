// https://leetcode.com/problems/flower-planting-with-no-adjacent/ 
// 1042. Flower Planting With No Adjacent
// Easy

// You have N gardens, labelled 1 to N.  In each garden, you want to plant one of 4 types of flowers.

// paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.

// Also, there is no garden that has more than 3 paths coming into or leaving it.

// Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

// Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)-th garden.  The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

// Example 1:
// Input: N = 3, paths = [[1,2],[2,3],[3,1]]
// Output: [1,2,3]

// Example 2:
// Input: N = 4, paths = [[1,2],[3,4]]
// Output: [1,2,1,2]

// Example 3
// Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
// Output: [1,2,3,4]

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    const hash = {};
    
    for(path of paths) {
        const [x, y] = path;
        
        if (!(x in hash)) {
            hash[x] = [];
        }
        hash[x].push(y);
        
        if (!(y in hash)) {
            hash[y] = [];
        }
        hash[y].push(x);
    }

    
    const res = Array(N).fill();
    for(let key = 0; key < N; key ++) {
        const f = [1, 2, 3, 4];
        
        if (hash[key+1] !== undefined)
        {
            for(let i of hash[key+1])
            {
                if (res[i])
                    f.splice(f.indexOf(res[i]), 1);
            }
        }
            
        res[key+1] = f[0];
        
    }

    res.splice(0,1);
    return res;
};

const r = gardenNoAdj(3,[[1,2],[2,3],[3,1]])
console.log(r)