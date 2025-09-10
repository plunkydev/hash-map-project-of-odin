import { Node } from './node.js';
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insert(key, value) {
        const newNode = new Node(key, value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
}

export { LinkedList };