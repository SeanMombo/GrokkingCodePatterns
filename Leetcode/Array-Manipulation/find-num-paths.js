/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let x = 0, y = 0;
    let visited = new Map();
    
    function dfs(x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n) return 0;
        if (visited.get([x,y])) return 0;
        if (x === m-1 && y === n-1) return 1;
        
        visited.set([x,y], 1);
        
        let l = !visited.get([x-1,y]) ? dfs(x-1,y) : null;
        let r = !visited.get([x+1,y]) ? dfs(x+1,y) : null;
        let u = !visited.get([x,y-1]) ? dfs(x,y-1) : null;
        let d = !visited.get([x,y+1]) ? dfs(x,y+1) : null;

        return l+r+u+d;

    }
    dfs(0, 0);
};

console.log(uniquePaths(3,2))