import { HashMap } from '/src/hash-map.js';
const test = new HashMap(16, 0.75)

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
test.set('lion', 'golden')
/* test.set('monkey', 'tan')
test.set('notebook', 'silver')
test.set('orange', 'orange')
test.set('pencil', 'yellow')
test.set('queen', 'purple')
test.set('robot', 'metallic')
test.set('sun', 'yellow') */
console.log(test)