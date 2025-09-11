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
    isLoaded() {
        return this.capacity * this.loadFactor <= this.size;
    }

    resize() {
        let bucketsResized = new Array(Math.ceil(this.capacity * 1.5))
        let keysBackup = this.entries()
        for (let i = 0; i < bucketsResized.length; i++) {
            bucketsResized[i] = new LinkedList();
        }
        this.buckets = bucketsResized
        this.capacity = Math.ceil(this.capacity * 1.5)
        this.size = 0
        for (let i = 0; i < keysBackup.length; i++) {
            this.set(keysBackup[i][0], keysBackup[i][1])
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
        if (typeof key !== 'string') {
            throw new TypeError('La clave debe ser un string');
        }
        if (typeof value !== 'string') {
            throw new TypeError('El valor debe ser un string');
        }
        if (this.has(key)) {
            throw new Error('La clave ya existe');
        }
        const index = this.hash(key);
        this.buckets[index].insert(key, value);
        this.size++;
        if (this.isLoaded()) {
            this.resize()
        }
    }

    get(key) {
        let result = this.entries().find(el => el[0] === key)
        return result ? result[1] : null
    }
    has(key) {
        return this.entries().some(el => el[0] === key)
    }
    entries() {
        const all = [];
        for (const bucket of this.buckets) {
            let current = bucket.head;
            while (current) {
                all.push([current.key, current.value]);
                current = current.next;
            }
        }
        return all;
    }
}
