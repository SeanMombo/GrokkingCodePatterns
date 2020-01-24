const Deque = require('collections/deque');


const string_case_permutations = (str) => {
    let permutations = [];
    permutations.push(str);

    for(let i = 0; i < str.length; i ++) {
        if (isNaN(parseInt(str[i], 10))) {
            const n = permutations.length;
            
            //Loop through all permutations
            for (j = 0; j < n; j++) {
                //get current permutation
                const str = permutations[j].split('');
                
                if (str[i] === str[i].toLowerCase()) {
                    str[i] = str[i].toUpperCase();
                } else {
                    str[i] = str[i].toLowerCase();
                }

                //push new permutation to the list.
                //we never pop off the list so it only grows.
                permutations.push(str.join(''))
                
            }
            
        }
    }

    return permutations;
}


console.log(`String permutations are: ${string_case_permutations('ad52')}`);
console.log(`String permutations are: ${string_case_permutations('ab7c')}`);