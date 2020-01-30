let Deque = require('collections/deque');

const permutations = (arr) => {
    let numsLength = arr.length,
        result = [];

    let permutations = new Deque();
    permutations.push([]);

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const n = permutations.length;

        for (let b = 0; b < n; b++) {
            const oldPerm = permutations.shift();

            for(let j = 0; j < oldPerm.length + 1; j ++) {
                const newPerm = oldPerm.slice(0);
                newPerm.splice(j, 0, num);

                if (newPerm.length === numsLength) {
                    result.push(newPerm);
                } else {
                    permutations.push(newPerm)
                }
            }
        }
    }
    return result
}

console.log(permutations([1,3,5]));


