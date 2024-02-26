const myNewNums = [1,2,3,4,5,6,7,8,9,10]

//add 10 in every nmber of array

// const newNums= myNewNums.map((num)=> num + 10)
// console.log(newNums);

//if we want block scope then
// const newNums= myNewNums.map((num)=> {num + 10})
// console.log(newNums);//output - undefined


//with block we can always use the return 
// const newNums= myNewNums.map((num)=>{return num + 10})
// console.log(newNums);


//map method in array
const newNums = myNewNums
          .map((num)=> num * 10) //values multiply by 10
          .map((num) => num + 1)
          //we also use filter in that loop
          .filter((num) => num >= 40)

 console.log(newNums);