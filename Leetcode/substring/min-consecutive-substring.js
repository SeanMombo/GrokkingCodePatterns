// Given a string consisting of A, B and C return smallest substring where A B C appears consecutively
// Ex. Input: ABBC -> returns 4
// BCA -> none
// ABC -> 3
// ABBCABC -> 3 bc of ABC in the end

let Deque = require('collections/deque');

const smallest_consecutive_substring = (str) => {

    let a = new Deque(),
        b = new Deque(),
        c = new Deque();
    let minLen = Infinity;

    for(let i = 0; i < str.length; i ++) {
        let char = str[i];
        if (char==='A') a.push(i);
        else if (char==='B') b.push(i);
        else if (char==='C') c.push(i);
    }

    for(let i = 0; i < str.length; i ++) {
        if (a.peekBack() < b.peekBack() && b.peekBack() < c.peekBack()) {
            minLen = Math.min(minLen, (c.peekBack() - a.peekBack()) + 1);
        }

        if (str[i]=='C') a.pop();
        else if (str[i]=='B') b.pop();
        else if (str[i]=='A') c.pop();
    }
   
    return minLen === Infinity ? null : minLen;
}


console.log(smallest_consecutive_substring('ABBABCC'));
console.log(smallest_consecutive_substring('BCA'));
console.log(smallest_consecutive_substring('ABC'));
console.log(smallest_consecutive_substring('ABBCABC'));
