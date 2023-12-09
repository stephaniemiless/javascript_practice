// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "steph"; //string
let age = 18; //integer (numbers)
let isStudent = true; //boolean

console.log(firstName, "is"); //is the same as...
console.log(firstName + " is");
console.log(age + 1);
console.log("Enrolled:", isStudent);

//changing html things:

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + isStudent;
