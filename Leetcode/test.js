var networkDelayTime = function(times, N, K) {
    let maxSum = -1;
    const hash = {};
    const vis = {};
    
    for(edge of times) {
        const [u, v, w] = edge;
        
        if (!(u in hash)) {
            hash[u] = [];
        }
        hash[u].push([v,w]);
    }
    
    function bfs(node, sum) {
        
        if (hash[node] == undefined) {
            maxSum = Math.max(sum, maxSum);
            return;
        }
        vis[node] = 1;
        if (Object.keys(vis).length === N) {
            maxSum = Math.max(sum, maxSum); 
            return;
        }

        for(let edge of hash[node]) {
            if (sum === -1) sum = 0
            bfs(edge[0], sum + edge[1]);
        }
    }
    
    bfs(K, -1);
    return maxSum;
};


console.log(networkDelayTime([[1,2,1],[2,1,3]],2, 2));



