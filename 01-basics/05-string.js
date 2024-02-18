const name  = "Rashi";   
const repoCount = 50

 //console.log(name + repoCount + "value");

 console.log(`Hello my name ${name} and my repo count is ${repoCount}`);

 const gameName = new String('rashi_trivedi');


console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,4)//use negative value in slice 
console.log(anotherString);

const newStringOne = "  rashi   "
console.log(newStringOne);

console.log(newStringOne.trim());



