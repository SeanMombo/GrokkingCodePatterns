
function topological_sort(vertices, edges) {
    // A
    const sorted = [];
    if (vertices <= 0) return [];

    const inDeg = Array(vertices).fill(0); // count of incoming edges
    const graph = Array(vertices).fill(0).map(() => Array()); // adjacency list graph

    // B
    for (let edge of edges) {
        const [u,v] = edge;
        graph[u].push(v);
        inDeg[v]++;
    }

    // C
    const sources = [];
    for(let i = 0; i < inDeg.length; i ++) {
        if (inDeg[i] === 0) {
            sources.unshift(i);
        }
    }

    // D
    while(sources.length > 0) {
        const vertex = sources.pop();
        sorted.push(vertex);

        // search for child nodes in graph
        for (let child of graph[vertex]) {
            //decrement all inDeg values of each child node
            inDeg[child]--;
            if (inDeg[child] === 0) {
                sources.unshift(child)
            }
        };
    }

    // E
    if (sorted.length !== vertices) {
        return [];
    }
    
    return sorted;

}


console.log(topological_sort(4, [[3, 2],[3, 0],[2, 0],[2, 1]]));

// console.log(`Topological sort: ${
//     topological_sort(5, [
//         [4, 2],
//         [4, 3],
//         [2, 0],
//         [2, 1],
//         [3, 1],
//     ])}`);
// console.log(`Topological sort: ${
//     topological_sort(7, [
//         [6, 4],
//         [6, 2],
//         [5, 3],
//         [5, 4],
//         [3, 0],
//         [3, 1],
//         [3, 2],
//         [4, 1],
//     ])}`);