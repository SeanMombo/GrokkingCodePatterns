
class MyCalendar  {
    constructor () {
        this.bookings = [];
    }
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let b = this.bookings;
    
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 */

MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(50, 60); // returns true
MyCalendar.book(10, 40); // returns true
MyCalendar.book(5, 15); // returns false
MyCalendar.book(5, 10); // returns true
MyCalendar.book(25, 55); // returns true
 

