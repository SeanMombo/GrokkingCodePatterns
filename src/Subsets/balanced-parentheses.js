


const generate_valid_parentheses = (n) => {
    let permutations = [];

    function helper(n, open, close, str, i) {
        if(open === n && close === n) {
            permutations.push(str.join(''));
        } else {
            if (open > close) {
                str[i] = ')';
                helper(n, open, close+1, str, i + 1);
            }
            if (open < n) {
                str[i] = '(';
                helper(n, open+1, close, str, i + 1);
            }
        }
    }
    helper(n, 0, 0, Array(2*n), 0);
    return permutations;
}

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`);
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`);