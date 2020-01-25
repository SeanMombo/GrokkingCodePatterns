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

    while(maxHeap.length > 0) {
        let [freq, char] = maxHeap.pop();
        
    }
 
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

