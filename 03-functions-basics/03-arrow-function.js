const user = {
    username:"rashi",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`); //this- it reffers the current context
     //console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

// console.log(this);


//in browser we have a global object that is widoe object

// function chai(){
//    let username = "RAshi"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "RAshi"
//     console.log(this.username);
// }
// chai()


// const chai =()=>{
//     let username = "RAshi"
//     console.log(this);//not work it gives undefined
// }
// chai()


// const addTwo = (num1, num2)=>{
//     return num1 + num2 //explicitly means when use return keyword
// }
// console.log(addTwo(3,4));

// const addTwo = (num1, num2)=> num1 + num2
// console.log(addTwo(3,4));

// const addTwo = (num1, num2)=> (num1 + num2)
// console.log(addTwo(3,4)); //explicitly means when we dont use return keyword

const addTwo = (num1, num2)=> ({username:"rashi"}) //object ko return karne k liye parenthisis ko lagana hi pdega
console.log(addTwo(3,4));



// hoisting=> Hoisting is a behaviour where the variable and function declaration are conceptually moved to the top of their current scope before any code execuion.

//Types of Hoisting:

//Variable hoisting: Only the declarations are hoisted, not the assignments. So, using a variable before its assignment results in undefined.
//Function hoisting: Both the declaration and the function body are hoisted. This allows you to call functions before their definition in the code.


//callback-> callback in javascript is function passed as a argument to another function. They essentially mini-program that get executed when certain event occur or conditions are met within the main function.

