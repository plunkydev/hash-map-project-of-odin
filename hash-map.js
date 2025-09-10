class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

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
class HashMap {
    constructor(capacity, loadFactor) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity);
        this.size = 0;

        // Initialize the buckets with LinkedList instances
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new LinkedList();
        }
    }
}

const map = new HashMap(16, 0.75)

console.log(map.buckets)