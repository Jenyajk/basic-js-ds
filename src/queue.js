const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    if (this.length === 0) {
      return null;
    }
    else {
      return this.head;
    }
  }

  enqueue(el) {
    if (this.length === 0) {
      this.head = new ListNode(el)
    }
    else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(el);
    }
    this.length++;
  }
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    else {
      let head = this.head;
      this.head = head.next;
      this.length--;
      return head.value;
    }
  }
}

module.exports = {
  Queue
};
