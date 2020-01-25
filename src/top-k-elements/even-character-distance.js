//problem 1
const Heap = require('collections/heap'); //http://www.collectionsjs.com
const Deque = require('collections/deque'); 


function reorganize_string(str, k) { 
    const freq = {};
    const arr = str.split('');

    arr.forEach(n => {
        if (!(n in freq)) freq[n] = 0;
        freq[n] ++;
    });

    const maxHeap = new Heap([], null, (a,b) => a[0] - b[0]);

    Object.keys(freq).forEach(k => {
        maxHeap.push([freq[k], k]);
    });

    const queue = new Deque();
    let newStr = [];

    while(maxHeap.length > 0) {
        let [freq, char] = maxHeap.pop();
        newStr.push(char);

        queue.push([char, freq - 1]);
        if (queue.length === k) {
            [char, freq] = queue.shift();
            if (freq > 0) {
                maxHeap.push([freq, char]);
            }
        }
    }
    return newStr.length === str.length ? newStr.join('') : '';
}


console.log(`Reorganized string: ${reorganize_string('mmpp', 2)}`);
console.log(`Reorganized string: ${reorganize_string('Programming', 3)}`);
console.log(`Reorganized string: ${reorganize_string('aab', 2)}`);
console.log(`Reorganized string: ${reorganize_string('aapa', 3)}`);

// 'Programming'

// 'mmggrr Pniao'

// let queue = [[1,r], [1,g], [1,m]]
// let obj = {

// } 
// let len = 8; //8 distinct chars
// let size = 11; //11 chars

// 'mgrP mgroain'

