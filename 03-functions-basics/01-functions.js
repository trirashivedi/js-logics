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


const user = {
    username : "Rashi",
    price:1555
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} 
    and price is ${anyobject.price}`);
}

// handleobject(user)

handleobject({
    username:"rashi",
    price : 155
})

const myNewArray = [400,200,300,500]

function returnSecondvalues(getArray){
    return getArray[1]
}
// console.log(returnSecondvalues(myNewArray));

console.log(returnSecondvalues([200,400,500,600]));




