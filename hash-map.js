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

const test = new HashMap(16, 0.75)
//pruebas para la funcion hash
console.log(test.hash("apple"))
console.log(test.hash('banana'))
console.log(test.hash('carrot'))
console.log(test.hash('dog'))
console.log(test.hash('elephant'))
console.log(test.hash('frog'))
console.log(test.hash('grape'))
console.log(test.hash('hat'))
console.log(test.hash('ice cream'))
console.log(test.hash('jacket'))
console.log(test.hash('kite'))
console.log(test.hash('lion'))
//pruebas para la funcion set
test.set("apple", "red")
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test);
