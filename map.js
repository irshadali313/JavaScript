// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.


const fruits = new Map()
// const code = {
//     code1: 105,
//     code2: 108,
//     code3:109
// }

const code = [4,8,15,16,23,42]

fruits.set("type","apple")
fruits.set("price",78)
fruits.set(code,109)


// console.log(fruits.entries());
// console.log(fruits.has(code));
// fruits.clear()
// console.log(typeof fruits);
// console.log(fruits.size);


// for (const element of fruits.values()) {
//     console.log(element);
    
// }

// fruits.forEach((item,key,all) => {
//     console.log(all);
    
// })

// another way to create map

const product = new Map([
    ["name","mobile"],
    ["isElectronic",true]
])

console.log(product);








