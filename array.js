// array -- ordered collection of elements

let arr = [1, "two", true, function () { console.log("three") }]

// console.log(arr[3]);
// console.log(arr[2]);
// console.log(arr.at(-2));

let fruits = ["apple", "banana"]

// let fr = fruits.shift()
// let er = fruits.pop()

fruits.unshift("kiwi", "mango")

fruits.push("pineapple", "cherry")

// console.log(fruits);


// for (const fruit of fruits) {
//     console.log(fruit);

// }
fruits[199] = "guava"
// console.log(fruits.length);
// console.log(fruits[100]);


// const app = new Array(3)

// app[4] = "po"
// console.log(app.length);


let del_arr = [4, 7, 12, 3]

// delete del_arr[2];

// console.log(del_arr[2]);

// Instead of using delete object method use splice

del_arr.splice(1, 3)
del_arr.splice(1, 0, "new item", "new item2")

// console.log(del_arr);

del_arr.forEach((item, index, all) => {
    // console.log(`Item : ${item} at pos ${index+1}`);

})


let fruit = ['Apple', 'Orange', 'Apple', 0]

// console.log( fruit.indexOf(false) ); // 0 (first Apple)   the checking is strict (===)
// console.log( fruit.lastIndexOf('Apple') ); // 2 (last Apple)


const arr3 = [NaN, 0];
// console.log( arr3.indexOf(NaN) ); // -1 (wrong, should be 0)
// console.log( arr3.includes(0) );

let student = [
    { id: 101, name: "john" },
    { id: 102, name: "sawyer" },
    { id: 101, name: "john" },
    { id: 102, name: "sawyer" },
    { id: 103, name: "bruce wayne" },
    { id: 101, name: "john" },
    { id: 102, name: "sawyer" },


]

let num = [58, 78, 985, 79]
let user = student.find(item => item.id == 102);   // do not use {} brackets
let user2 = student.find(item => item.id > 100); //   find only returns first found element
let finder = student.find((stu) => stu.name == "john");

// console.log(user2);


// to find all the element use filter
let user3 = student.filter(item => item.id > 101)


// Map 
let superHero = ["Hulk", "CaptainAmerican", "IronMan"]
let user4 = superHero.map((item) => item.length * 100)

// console.log(user4);

// sort
let age = [12, 20, 18, 5]
// let ty = age.sort()

// console.log(age);

// to solve this problem
// function compare(a,b) {
//     if(a>b) return 1;
//     if(a==b) return 0;
//     if(a<b) return -1;
// }

// console.log(age.sort(compare));
// console.log(age.sort((a,b)=> a-b));  // Easy way 
// console.log(age.sort((a,b)=> b-a));  

// if dont want to make changes on original array use toSorted()
// let sortedAge = age.toSorted((a,b)=> a-b)
// console.log(sortedAge);
// console.log(age);


// reverse
// age.reverse()
// console.log(age);



// split and join
let ctoarray = "jhonny, kate, hurley, james"

let converted = ctoarray.split(", ")
let deconvert = converted.join(",")
// let converted = ctoarray.split(", ",2)

// console.log(converted[2]);
let allsplit = ctoarray.split("")
// console.log(converted);
// console.log(deconvert);

// console.log(allsplit);

// console.log(typeof converted);




// When we need to iterate over an array – we can use forEach, for or for..of.

// When we need to iterate and return the data for each element – we can use map.

// Reduce
let value = [1, 3, 4, 2]
let result = value.reduce((intial, current) => intial + current, 5)
// console.log(result);

// console.log(typeof {});




//  array destructure
const arrname = ["jack","etipio","koli"]

const[first,,last] = arrname
// console.log(last);


// rest patern
const city = ["berlin","tokyo","los angeles","london","mexico"]

const[city1,city2,...rest] = city

console.log(rest[0]);










