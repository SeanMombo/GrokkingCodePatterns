var Heap = require("collections/heap");


const findMeetingTimes = (sched1, range1, sched2, range2) => {

    let results = [];
    //create min heap 
    let minHeap = new Heap([], null, (a,b) => b[1] - a[1]);
    let i = 0;

    for (i = 0; i < sched1.length; i++) {

        while (minHeap.length > 0 && )  {

        }
    }
}



console.log(findMeetingTimes(
    [ ['9:00', '10:00'], ['12:00', '13:00'], ['16:00','18:00'] ],
    ['9:00', '20:00'],
    [ ['10:00', '11:30'], ['12:30', '14:30'], ['14:30','15:00'], ['16:00', '17:00']],
    ['10:00', '18:30']
    ));