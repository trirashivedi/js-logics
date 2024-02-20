function sayMyname(){
    console.log("R");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("i");
}
//sayMyname (refrence)

//sayMyname()

// function addTwonumbers(number1,number2){
//     console.log(number1+number2);
//     return number1 + number2
// }

function addTwonumbers(number1,number2){

    // let result = number1 + number2
    // return result (both are right but difrent way)
    return number1 + number2
}

// addTwonumbers(3,4)
// addTwonumbers(3,null)



const result = addTwonumbers(3,4)
// console.log("Result:",result);


function loginUserMessage(username){
    return` ${username} just logged in`
}

console.log(loginUserMessage("rashi"));

