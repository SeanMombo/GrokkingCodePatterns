class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }

    print_list() {
        let result = "";
        let temp = this;
        while (temp !== null) {
          result += temp.value + " ";
          temp = temp.next;
        }
        console.log(result);
      }
  }
  
const has_cycle = function(head) {
    let fast = head;
    let slow = head;

    while(1) {
        fast = fast.next.next;
        slow = slow.next;
    
        if (fast === null || fast.next === null) return false;
        if (slow.value === slow.value) return true;
    }  
}
  
  
//   head = new Node(1)
//   head.next = new Node(2)
//   head.next.next = new Node(3)
//   head.next.next.next = new Node(4)
//   head.next.next.next.next = new Node(5)
//   head.next.next.next.next.next = new Node(6)
//   console.log(`LinkedList has cycle: ${has_cycle(head)}`)
  
//   head.next.next.next.next.next.next = head.next.next
//   console.log(`LinkedList has cycle: ${has_cycle(head)}`)
  
//   head.next.next.next.next.next.next = head.next.next.next
//   console.log(`LinkedList has cycle: ${has_cycle(head)}`)
  

const find_cycle_start = function(head){
    let len = find_cycle_length(head);

    let p1=head, p2=head;
    
    for(i = 0; i < len; i ++) p1 = p1.next;

    while(p1 !== p2) {
        p1=p1.next;
        p2=p2.next;
    }

    return p1;
};

function find_cycle_length(head) {
    let slow = head,
      fast = head;
  
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) { // found the cycle
        return calculate_cycle_length(slow);
      }
    }
    return 0;
  }
  
  
  function calculate_cycle_length(slow) {
    let current = slow,
      cycle_length = 0;
    while (true) {
      current = current.next;
      cycle_length += 1;
      if (current === slow) {
        break;
      }
    }
    return cycle_length;
}

// head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)

// head.next.next.next.next.next.next = head.next.next
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// head.next.next.next.next.next.next = head.next.next.next
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// head.next.next.next.next.next.next = head
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)


const find_happy_number = function(num) {
    let digits = [];

    let fast = num;
    let slow = num;

    while(1) {
        fast = getSum(getSum(fast));
        slow = getSum(slow);

        if (fast === slow) return false;
        if (fast === 1) return true;
    }
};

const getSum = num => {
    let sum = 0;
    let digit = 0;
    while(num > 0) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}


// console.log(`${find_happy_number(23)}`)
// console.log(`${find_happy_number(12)}`)



const find_middle_of_linked_list = function(head) {
    
    let slow = head,
        fast = head;

        while (1) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === null || fast.next === null) return slow;
        }
}
  

// head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)

// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

// head.next.next.next.next.next = new Node(6)
// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

// head.next.next.next.next.next.next = new Node(7)
// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)



const is_palindromic_linked_list = function(head) {
    let middle = find_middle_of_linked_list(head);
    let middleValue = middle.value;

    let r1 = head,
        r2 = middle;

    let headSecondHalf = reverse(r2);
    let headSecondCopy = headSecondHalf;

    while (headSecondHalf !== null && r1 !== null) {
        if (headSecondHalf.value !== r1.value) break;
        headSecondHalf = headSecondHalf.next;
        r1 = r1.next;
    }
    reverse(headSecondCopy); // revert the reverse of the second half

    if (r1 === null || headSecondHalf === null) { // if both halves match
        return true;
    }

    return false;
};

// head = new Node(2)
// head.next = new Node(4)
// head.next.next = new Node(6)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(2)

// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

// head.next.next.next.next.next = new Node(2)
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

const reorder = function(head) {

    let middle = find_middle_of_linked_list(head);
    let middleReverseHead = reverse(middle);

    let headFirstHalf = head;

    while (headFirstHalf !== null && middleReverseHead !== null) {
        temp = headFirstHalf.next;
        headFirstHalf.next = middleReverseHead;
        headFirstHalf = temp;
    
        temp = middleReverseHead.next;
        middleReverseHead.next = headFirstHalf;
        middleReverseHead = temp;
    }
    // set the next of the last node to 'null'
    if (headFirstHalf !== null) {
        headFirstHalf.next = null;
    }
}
// 2 -> 4 -> 6 -> 8 -> 10 -> 12

// 2 -> 4 -> 6 -> 12 -> 10 -> 8 

// 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null

function reverse(head) {
    let prev = null;
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
  
head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()


