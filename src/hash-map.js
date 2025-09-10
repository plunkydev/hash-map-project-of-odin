import { LinkedList } from './linkedList.js';
export class HashMap {
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
    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash = (hash * 31 + char.codePointAt(0)) % this.capacity;
        }
        return hash;
    }
    set(key, value) {
        const index = this.hash(key);
        this.buckets[index].insert(key, value);
        this.size++;
    }  
}
