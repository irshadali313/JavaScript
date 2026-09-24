let car = {
    made:"toyota",
    type: "classic",
    model: 2026,
    registration_year: 2026
}

car.base  = 2025

let str = JSON.stringify(car,["made","type"],4)

console.log(str);





