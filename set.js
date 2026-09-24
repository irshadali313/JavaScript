// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.


let set = new Set(["name", "john"])

// console.log(set);

// for (const element of set) {
//     console.log(element);

// }

// set.forEach((ele,key,set) => {
//     console.log(set);

// });




//WeakMap

let person = { name: "jhon", age: 29 }
const map = new Map()
const wmap = new WeakMap()
map.set(person, "secret_document")
wmap.set(person,"secret_document")
person = null
console.log(map);
console.log(wmap);





