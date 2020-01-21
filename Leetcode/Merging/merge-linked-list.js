/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

//// https://leetcode.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function(l1, l2) {   
    let p1 = l1;
    let p2 = l2;
    let p3 = new ListNode(null);
    let head = p3;

    while(p1 && p2) {
        if(p1.val < p2.val) {
            p3.next = p1;
            p1 = p1.next;
            p3 = p3.next;
        } else {
            p3.next = p2;
            p2 = p2.next;
            p3 = p3.next;
        }
    }
    p3.next = p1 || p2;
    return head.next;
};

//// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length == 0) return null;
    if (lists.length == 1) return lists[0];
    
    // uses previous mergeTwoLists function
    let merged = mergeTwoLists(lists[0], lists[1]);
    
    if (lists.length > 2){
        for(let i = 2; i < lists.length; i ++) {
            merged = mergeTwoLists(merged, lists[i]);
        }
    }
    return merged;
};
