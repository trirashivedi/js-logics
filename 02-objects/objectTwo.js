//const tinderUser = new Object() //this is a singleton object

const tinderUser = {} //this is not a singleton objects

 tinderUser.id="66666ty"
 tinderUser.name= "sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rash",
            lastname:"trivedi"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = { obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)// object.assign(target,source)

const obj3 = {...obj1,...obj2}

// console.log(obj3);

 
const users= [
    {
        id:1,
        email:"f@hgmail.com"
    },
    {
        id:1,
        email:"f@hgmail.com"
    },
    {
        id:1,
        email:"f@hgmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//destructuring objects

const course = {
    cousename: "js in hindi",
    price:"999",
    courseInstructor:"rashi"
}

//course.courseInstructor //syntacticall objects

const {courseInstructor:instructor} = course //object destructure
// console.log(courseInstructor);

console.log(instructor);
  

