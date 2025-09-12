import { HashMap } from '/src/hash-map.js';
import { renderNode } from './node'
import './style.css'
const test = new HashMap()
const main = document.getElementById("data_hashMap")

const displayBucket = (index) => {
    const bucketDiv = document.getElementById(`node${index}`)
    bucketDiv.innerText = ''
    if (test.buckets[index].head === null) {
        bucketDiv.innerText = "null"
    } else {
        let current = test.buckets[index].head
        while(current) {
            bucketDiv.innerText += `  [${current.key} => ${current.value}] __`
            current = current.next
        }
    }
    return true
}




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
//pruebas para la funcion resize
//test.set('lion', 'golden')
/* test.set('monkey', 'tan')
test.set('notebook', 'silver')
test.set('orange', 'orange')
test.set('pencil', 'yellow')
test.set('queen', 'purple')
test.set('robot', 'metallic')
test.set('sun', 'yellow') */
//console.log(test.remove('dog'))
//test.set('tiger', 'orange')
//console.log(test.remove('lion'))
//console.log(test.clear())
//console.log(test.keys())
//console.log(test.values())
//console.log(displayBucket(9))
console.log(test.capacity)
for (let i = 0; i < test.capacity; i++) {
    main.appendChild(renderNode(i))
}
//iterar solo para prueba de la funcion displayBucket
for (let i = 0; i < test.capacity; i++) {
    displayBucket(i)
}