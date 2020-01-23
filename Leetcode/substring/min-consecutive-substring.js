// Given a string consisting of A, B and C return smallest substring where A B C appears consecutively
// Ex. Input: ABBC -> returns 4
// BCA -> none
// ABC -> 3
// ABBCABC -> 3 bc of ABC in the end

const smallest_consecutive_substring = (str) => {

    let a = [],
        b = [],
        c = [];
    let minLen = Infinity;

    for(let i = 0; i < str.length; i ++) {
        let char = str[i];
        if (char==='A') a.unshift(i);
        else if (char==='B') b.unshift(i);
        else if (char==='C') c.unshift(i);

        if (a.length > 0 && b.length > 0 && c.length > 0) {
            
            if (a[a.length-1] < b[b.length-1] && b[b.length-1] < c[c.length-1]) {

                minLen = Math.min(minLen, c[c.length-1] - a[a.length-1]);
                a.pop();
            }
        }

        while (a[a.length-1] > b[b.length-1]) {
            b.pop();
        }
        while (b[b.length-1] > c[c.length-1]) {
            c.pop();
        }
    }
    return minLen === Infinity ? null : minLen + 1;
}


console.log(smallest_consecutive_substring('ABBABCC'));
console.log(smallest_consecutive_substring('BCA'));
console.log(smallest_consecutive_substring('ABC'));
console.log(smallest_consecutive_substring('ABBCABC'));
