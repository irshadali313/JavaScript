// optional chaining

const car = {
    brand: "BMW",
    model: "Top",
    price: "80L"
}

// console.log(car?.brand)

// symbol
let p_id = Symbol("productId")
let p_id2 = Symbol("productId")
const product1 = {
    p_name: "adidas casual shoe",
    [p_id]: "pa1245",
    p_price: 7899
}


// console.log(product1[p_id]);

// let sym1 = Symbol.for("psid")
// let sym2 = Symbol.for("psid")

// console.log(sym1);
// console.log(Symbol.keyFor(sym1));

// converting Object to primitive type
// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };

// conversions demo:
// console.log(String(user)); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500

// primitive data
// let num = new Number(19)
// console.log(num.toFixed(2));

let billion = 1_000_000_000;
// console.log(billion);

let billion_short = 8.5e9
// console.log(billion_short);

let lpa = 8.12e3
// console.log(lpa);


let sum = 0.1 + 0.2;
// console.log(sum.toFixed(1))


let str2 = "hello jama"
// console.log( str.at(-6) );
// console.log(str[-6]);
// for (let char of str){
//   // console.log(char);

// }

// console.log(str.indexOf("j"));

// console.log( "Widget".includes("W", 0) );

let str = "stringify";

// these are same for substring
// console.log( str.substring(2, 6) ); // "ring" 
// console.log( str.substring(6, 2) ); // "ring"

// ...but not for slice:
// console.log( str.slice(2, 6) ); // "ring" (the same)
// console.log( str.slice(6, 2) )

// str.slice(0, 6)

console.log(str);






























