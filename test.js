/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let a1=[],
        copy=l1;
    
    while(l1 !== null) {
        a1.push(l1.val+l2.val);
        l1=l1.next;
        l2=l2.next;
    }
    //a1.reverse();

    
    for(i in a1) {
        copy.val=a1[i];
        copy=copy.next;
    }
    return copy;
};