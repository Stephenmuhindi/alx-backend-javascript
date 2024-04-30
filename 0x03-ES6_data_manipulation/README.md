1. How to use map, filter, and reduce on arrays:
map: Applies a function to each element of an array and returns a new array with the results
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

filter: Creates a new array with all elements that pass the test implemented by the provided function
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

reduce: Executes a reducer function on each element of the array, resulting in a single output value
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

  Typed Arrays:
Typed Arrays are array-like objects that provide a way to work with binary data. They are part of the ECMAScript 6 specification
const buffer = new ArrayBuffer(16); // Create a buffer of 16 bytes
const intArray = new Int32Array(buffer); // Create a 32-bit integer array
intArray[0] = 42;
console.log(intArray[0]); // Output: 42

The Set, Map, and WeakLink Data Structures:
Set: A collection of unique values, where each value may occur only once
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet); // Output: Set { 1, 2, 3 }

Map: A collection of key-value pairs, where each key may occur only once.
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap); // Output: Map { 'a' => 1, 'b' => 2 }

WeakLink: A special type of collection that allows references to objects without preventing those objects from being garbage collected
let obj1 = { key: 'value' };
let obj2 = { key: 'value' };
const weakMap = new WeakMap();
weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');
console.log(weakMap.get(obj1)); // Output: 'value1'


