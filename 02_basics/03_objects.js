
//singleton
// object.create

// ====== object literals ==== //


const mySym = Symbol("Key1")

const JsUser = {
    name : "Rakesh",
    age : 25,
    [mySym] : "mykey1",
    location : "Pune",
    email : "Rakesh@meta.com",
    isLoggedIn : false,
    lastLoginDays: ['Monday', 'Friday']
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.email = "Rakesh@google.com";

// console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.email = "rakesh@nvidia.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); //to refer same object we can use "this"
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



