class HashMap {
    constructor(capacity, loadFactor) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity);
        this.size = 0;
    }
    
}

const map = new HashMap(16, 0.75)

console.log(map.buckets.length)