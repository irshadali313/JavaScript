// Garbage Collection
// let user = {
//   name: "John"
// };

// let admin = user;

// user = null

// console.log(admin);


// const nums = {
//     "aer1":"one",
//     2:"two",
//     3:"three",
//     "user": "jhon",
//     1:"ascending order",
// }
// console.log(nums["aer1"]);
// let objKey = Object.keys(nums)
// console.log(typeof objKey);

// looping for keys in obj
// for(key in nums){
//     console.log(key);   
// }

// object destructor
// const cohort = {
//     course_duraion: "90min",
//     cource_name: "App dev",
//     cource_instructor: "fishallen"
// }

// const {cource_instructor:instructor} = cohort
// console.log(cohort["cource_instructor"]);


// constructor function
// function User(){
//     console.log(new.target);
    
// }

// User()
// new User()


//Scale and billing
// function Generic(name,isVeg,price,weight){
//    this.name = name,
//    this.isVeg = isVeg,
//    this.price = price,
//    this.weight = weight,
//    this.bill = Math.floor(price * weight)
// }

// const Cabbage = new Generic("cabbage",true,80,1.300,);
// const Tomato = new Generic("Tomato",true,25,1.580)

// console.log(Cabbage.bill);
// console.log(Tomato.bill);


// function greet(user){
//     return `welcome to community, dear ${user}`
// }

// let greets = greet("Jhon Locke")
// console.log(greets);

// function sum(num1, num2){
//     console.log(num1+num2);
    
// }
// sum(5,8)

function sum(...num2){
    console.log(num2);
    
}

function sum(...num1){
    console.log(num1);
    
}
// sum(5,5)

// const add = (num1,num2) =>{

//    return num1 + num2           //never works on arrow()

// }

// add(5,5)

 
// trying to pass object as a key to object
let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123;
// console.log(visitsCountObj);




function calculateSalary(salary)
{
    let sum = 0;

    for (const income of Object.values(salary) ){
        console.log(income);

        sum+= income
        
    }
    return sum;
}

let emp = {
    "jhon": 8000,
    "smith": 75000,
    "gosen": 8900
}
 
// console.log(calculateSalary(emp));




// Object destruction

const options = {
    size :{
        width:500,
        height: 850
    },
    items : ["lays","chocolate"]
}

const {size:{width,height},items:[item1,item2],head="defaulthead"} = options

// console.log(height);



// property flag and descriptor

const person = {
    name:"irshad ali",
    age: 21,
    address: "darul"
}

// console.log(Object.getOwnPropertyDescriptor(person,"name"));


let user = {
    name:"james",
    age: 78
}

Object.defineProperty(user,"name",{
    writable: false,
    enumerable: false,
    configurable: false
})

for (const key in user) {

    // console.log(key);
    
    
}


// console.log(user.name);









