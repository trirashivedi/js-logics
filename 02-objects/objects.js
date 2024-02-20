//singleton


//object literals
//Object.create // this are constructor object in this singleton are created

const mySym = Symbol("key1")

const jsUser = {
    name:"Rashi",
    "full name":"Rashi trivedi",
    [mySym]:"myKey1",
    age:18,
    location:"jaipur",
    email:"arshi@gmail.com",
    isLoggedIn:"false",
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


jsUser.email = "rashhh@gmail.com";
Object.freeze(jsUser)
jsUser.email = "huh@gmail.com"

console.log(jsUser);
