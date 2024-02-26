
const myNums = [1,2,3]

//reduce have 2 things to executed accumulator and currentvalue
// const myTotal = myNums.reduce(function(accumulator, currentValue){
//     console.log(`accumulator ${accumulator} and currentValue ${currentValue}`);
//     return accumulator + currentValue
// },0)

// console.log(myTotal);

const myTotal = myNums.reduce((accumulator,currentvalue) =>accumulator + currentvalue, 0 )
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "react Course",
        price : 12999
    },
    {
        itemName : "python Course",
        price : 19999
    }
]

const priceToPay = shoppingCart.reduce((accumulator,item) => accumulator + item.price,0)

console.log(priceToPay);
