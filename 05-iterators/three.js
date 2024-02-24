//for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);

}

// const map = new Map()
// map.set('IN', "India")
// map.set('Fr', "France")
// map.set('Gr', "Germany")
// map.set('IN', "India")

//console.log(map);


// for (const [key,value] of map) {
//    // console.log(key, ':-', value );
// }

// const myObject = {
//     game1 :'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key,value] of myObject) {
//    // console.log(key, ':' , value)
// }//not working bcz objects are not iteratable



// For in loop gives always keys

const myObject = {
    game1 :'NFS',
    game2 : 'Spiderman'
}

for (const key in myObject) {
   // console.log(`${key} is shortcut for ${myObject[key]}`);
}
 
const programming = ['js','rb','py']
 for (const key in programming) {
   // console.log(programming[key]);
 }

const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('Gr', "Germany")
map.set('IN', "India")

for (const key in map) {
   console.log(key);
}