const Heap = require('collections/heap');

class Meeting {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
};

function min_meeting_rooms(meetings) {
    // sort the meetings by start time
    meetings.sort((a, b) => a.start - b.start);

    let numRooms = 0;
    let minHeap = new Heap([], null, ((a,b) => b.end - a.end));

    // loop through all meetings
    for(let i = 0; i < meetings.length; i ++) {
        //loop through minheap and remove all meetings that end before current meeting starts
        
        while(minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
            minHeap.pop();
        }
        //add current meeting to minHeap
        minHeap.push(meetings[i]);
        //set numRooms to the max size of the heap
        numRooms = Math.max(numRooms, minHeap.length);
        console.log(minHeap.toArray());
    }
    return numRooms;
}


// console.log(`Minimum meeting rooms required: ` +
//     `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);
// console.log(`Minimum meeting rooms required: ` +
//     `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`);
// console.log(`Minimum meeting rooms required: ` +
//     `${min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`);
// console.log(`Minimum meeting rooms required: ` +
//     `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);
