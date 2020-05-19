
// function topological_sort(vertices, edges) {
//     // A
//     const sorted = [];
//     if (vertices <= 0) return [];

//     const inDeg = Array(vertices).fill(0); // count of incoming edges
//     const graph = Array(vertices).fill(0).map(() => Array()); // adjacency list graph

//     // B
//     for (let edge of edges) {
//         const [u,v] = edge;
//         graph[u].push(v);
//         inDeg[v]++;
//     }

//     // C
//     const sources = [];
//     for(let i = 0; i < inDeg.length; i ++) {
//         if (inDeg[i] === 0) {
//             sources.unshift(i);
//         }
//     }

//     // D
//     while(sources.length > 0) {
//         const vertex = sources.pop();
//         sorted.push(vertex);

//         // search for child nodes in graph
//         for (let child of graph[vertex]) {
//             //decrement all inDeg values of each child node
//             inDeg[child]--;
//             if (inDeg[child] === 0) {
//                 sources.unshift(child)
//             }
//         };
//     }

//     // E
//     if (sorted.length !== vertices) {
//         return [];
//     }
    
//     return sorted;

// }


// console.log(topological_sort(4, [[3, 2],[3, 0],[2, 0],[2, 1]]));

// // console.log(`Topological sort: ${
// //     topological_sort(5, [
// //         [4, 2],
// //         [4, 3],
// //         [2, 0],
// //         [2, 1],
// //         [3, 1],
// //     ])}`);
// // console.log(`Topological sort: ${
// //     topological_sort(7, [
// //         [6, 4],
// //         [6, 2],
// //         [5, 3],
// //         [5, 4],
// //         [3, 0],
// //         [3, 1],
// //         [3, 2],
// //         [4, 1],
// //     ])}`);



// function print_orders(tasks, prerequisites) {
//     const sortedOrder = [];
//     if (tasks <= 0) {
//         return sortedOrder;
//     }

//     // a. Initialize the graph
//     const inDegree = Array(tasks).fill(0); // count of incoming edges
//     const graph = Array(tasks).fill(0).map(() => Array()); // adjacency list graph

//     // b. Build the graph
//     prerequisites.forEach((prerequisite) => {
//         const parent = prerequisite[0],
//             child = prerequisite[1];
//         graph[parent].push(child); // put the child into it's parent's list
//         inDegree[child]++; // increment child's inDegree
//     });


//     // c. Find all sources i.e., all vertices with 0 in-degrees
//     const sources = [];
//     for (i = 0; i < inDegree.length; i++) {
//         if (inDegree[i] === 0) {
//             sources.push(i);
//         }
//     }

//     print_all_topological_sorts(graph, inDegree, sources, sortedOrder);
// }

// function print_all_topological_sorts(graph, inDegree, sources, sortedOrder) {
//     if (sources.length > 0) {
//         for (let i = 0; i < sources.length; i++) {
//             const vertex = sources[i];
//             sortedOrder.push(vertex);
//             const sourcesForNextCall = sources.slice(0); // clone current sources
//             console.log(sourcesForNextCall)
//             // only remove the current source, all other sources should remain in the queue for the next call
//             sourcesForNextCall.splice(i, 1);
            
//             // get the node's children to decrement their in-degrees
//             graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
//                 inDegree[child]--;
//                 if (inDegree[child] === 0) {
//                     sourcesForNextCall.push(child);
//                 }
//             });

//             // recursive call to print other orderings from the remaining (and new) sources
//             print_all_topological_sorts(graph, inDegree, sourcesForNextCall, sortedOrder);

//             // backtrack, remove the vertex from the sorted order and put all of its children back to consider
//             // the next source instead of the current vertex
//             sortedOrder.splice(sortedOrder.indexOf(vertex), 1);
//             for (p = 0; p < graph[vertex].length; p++) {
//                 inDegree[graph[vertex][p]] += 1;
//             }
//         }
//     }

//     // if sortedOrder doesn't contain all tasks, either we've a cyclic dependency between tasks, or
//     // we have not processed all the tasks in this recursive call
//     if (sortedOrder.length === inDegree.length) {
//         console.log(sortedOrder);
//     }
// }






function print_orders(vertices, edges) {
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
            sources.push(i);
        }
    }

    
    function helper(sources, sorted) {
        if (sources.length > 0) {
            for(let i = 0; i < sources.length; i++) {
                const v = sources[i]
                sorted.push(v);
                // clone sources, and remove current source from it.
                const newSources = sources.slice(0);
                // console.log(newSources)
                newSources.splice(newSources.indexOf(v), 1);
                
                for(let child of graph[v]) {
                    inDeg[child]--;
                    if (inDeg[child] === 0) {
                        newSources.push(child);
                    }
                }

                helper(newSources, sorted);
                
                sorted.splice(sorted.indexOf(v), 1);
                for (p = 0; p < graph[v].length; p++) {
                    inDeg[graph[v][p]] += 1;
                }
            }
        }
        if (sorted.length === inDeg.length) {
            console.log(sorted)
        }
    }

    helper(sources, sorted);
    
    
}



// console.log('Task Orders: ');
// print_orders(3, [
//     [0, 1],
//     [1, 2],
// ]);

// console.log('Task Orders: ');
// print_orders(4, [
//     [3, 2],
//     [3, 0],
//     [2, 0],
//     [2, 1],
// ]);

console.log('Task Orders: ');
print_orders(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
]);
