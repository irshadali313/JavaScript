//  proto

let user = {
    firstname: this.firstname,
    lastname: this.lastname,

    get fullname() {
        return `${this.firstname} ${this.lastname}`
    },

    set fullname(value) {
        [this.firstname, this.lastname] = value.split(" ")
    }


}

let admin = {
    isAdmin: true,
    __proto__: user,
}

user.fullname = "albert einstain"


for (const prop in admin) {
    let isOwn = admin.hasOwnProperty(prop)

    if(isOwn){
        console.log(`our ${prop}`);
        
    }
    else{
        console.log(`parent ${prop}`);
        
    }


}

// console.log(isOwn);


//default proto type
