let num = "78999"
let strNum = Number(num)
// console.log(strNum);



let sum = 2 + "8"
// console.log(sum);

// Value checker
// const val = null >= 0

// if(val){
//     console.log("True Value");
    
// }else{
//     console.log("False value");
// }



// Math
// console.log(2**3);
// let x  = 5
// let result1 = ++x;
// let result2 = x++;

// console.log(result2);
// console.log(x);

// string functions
let data = "i    want be an    react dev"
let splitData = data.split("")
// console.log(typeof splitData);
let delkeys = [1,2,3,4,9,12,15,16,17,18,24]

for(i=0;i<delkeys.length;i++)
{
   delete splitData[delkeys[i]]
    //  console.log(splitData[i]);
    

}

console.log(Object.values(splitData));
// console.log(String(splitData).replaceAll(",",""))






// console.log(data.includes("d ev"));
// console.log(data.replaceAll(" ","#"));
let trimmed = data.trim()
// console.log(data);
// console.log(trimmed);




// let arrData = data.split(" ");
// console.log(arrData[0]);


// let user = { name: 'John' };
// let admin = user;
// admin.name = 'Pete'; // changed by the "admin" reference
// (user.name);










