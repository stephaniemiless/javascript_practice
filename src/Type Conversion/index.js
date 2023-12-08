// Type Conversion = change the datatype of a value to another
//                   (strings, numbers, boolean)

//these answers are given in string form 
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log(age);

let x;
let y;
let z;

x = Number("3.14");
console.log(x, typeof x);

y = String(3.14);
console.log(y, typeof y);

//empty string will be false
//anything else is true

//useful to see if a user skips an input box...

z = Boolean("pizza");
console.log(z, typeof z);