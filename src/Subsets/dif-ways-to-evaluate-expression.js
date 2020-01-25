




function diff_ways_to_evaluate_expression(input) {
    let map = {};

    function dfs(map, input) {
        if (input in map) 
            return map[input];

        const result = [];

        if (!(input.includes('+')) && !(input.includes('-')) && !(input.includes('*'))) {
            result.push(parseInt(input));
        } else {
            for(let i = 0; i < input.length; i ++) {
                const char = input[i];

                if (isNaN(parseInt(char, 10))) {
                    const left = dfs(map, input.substring(0,i));
                    const right = dfs(map,input.substring(i+1));

                    for(l of left) {
                        for(r of right) {
                            if (char === '+') result.push(l+r);
                            if (char === '-') result.push(l-r);
                            if (char === '*') result.push(l*r);
                        }
                    }
                }
            }
        }
        map[input] = result;
        return result;
    }

    return dfs(map, input);
}


console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('1+2*3')}`);
console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('2*3-4-5')}`);


