// class Node {
//     constructor(value, next = null) {
//       this.value = value;
//       this.next = next;
//     }
  
//     print_list() {
//       let temp = this;
//       while (temp !== null) {
//         process.stdout.write(`${temp.value} `);
//         temp = temp.next;
//       }
//       console.log();
//     }
//   }


const reverse = function(head) {
    
    let next,
        prev = null;

    while(head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};

const reverse_sub_list = function(head, p, q) {
    if (p===q) return head; // if p and q are same index, there is nothing to reverse so just return the head;

    //// skip the first p-1 nodes;
    let i = 0;
    let cur = head, 
        prev = null;

    while(i < p-1) {
        prev = cur;
        cur = cur.next;
        i++;
    }

    const pMinusOne = prev;
    const pStart = cur;

    
    let next;
    prev = null;

    while(cur !== null && i < q) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        i++;
    }
    //// prev is now the head of the newly reversed sublist
    //// pMinusOne is the node before our sublist reversal
    //// head is the node after our sublist reversal

    //// connect both p-1 and q+1 to the rest of the linked list
    if (pMinusOne !== null)
        pMinusOne.next = prev;
    else
        head = prev;

    pStart.next = cur;

    return head;
};


const reverse_every_k_elements = function(head, k) {
    if (k <= 1 || head === null) return head;

    let cur = head,
        prev = null;

    while(true) {
        const nodeBeforeReversal = prev;
        const firstNodeOfReversal = cur;

        let next = null,
            i = 0;

        while(cur !== null && i < k) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
            i++;
        }

        if (nodeBeforeReversal !== null)
            nodeBeforeReversal.next = prev; //start of reversed sublist
        else 
            head = prev; // if nodeBeforeReversal == null then we want the start of the reversed sublist to be the start of the linked list

        firstNodeOfReversal.next = cur;

        if (cur === null)
            break;
        
        prev = firstNodeOfReversal;
    }
    return head;
}


const reverse_alternate_k_elements = function(head, k) {
    if (k <= 1 || head === null) return head;

    let cur = head,
        prev = null;

    while(true) {
        const nodeBeforeReversal = prev;
        const firstNodeOfReversal = cur;

        let next = null,
            i = 0;

        while(cur !== null && i < k) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
            i++;
        }

        if (nodeBeforeReversal !== null)
            nodeBeforeReversal.next = prev; //start of reversed sublist
        else 
            head = prev; // if nodeBeforeReversal == null then we want the start of the reversed sublist to be the start of the linked list

        firstNodeOfReversal.next = cur;

        i = 0;
        while (cur !== null && i < k) {
          prev = cur;
          cur = cur.next;
          i += 1;
        }

        if (cur === null)
            break;
    }
    return head;
}



class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      result = "";
      temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  
const rotate = function(head, rotations) {
    
    return head;
};
  
  
head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).get_list()}`)

