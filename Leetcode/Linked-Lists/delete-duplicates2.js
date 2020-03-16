function ListNode(val) {
this.val = val;
this.next = null;
}
 


var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    
    let cur = head;
    let ret = head;
    let prev = new ListNode(null);
    
    while(cur && cur.next) {
        console.log(cur.val, prev.val)
        while(cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        
        prev.next = cur.next;
        prev = cur;
        cur = cur.next;
    }
    
    return head;
};



const head = new ListNode(1);
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next =new ListNode(3)
head.next.next.next.next =new ListNode(4)
head.next.next.next.next.next = new ListNode(5)
head.next.next.next.next.next.next = new ListNode(5);

console.log(deleteDuplicates(head))