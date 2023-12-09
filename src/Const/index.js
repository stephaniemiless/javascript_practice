// const = a variable that can't be changed!!

//set pi as a constant so someone cannot change its value (we need pi to be correct!)
const PI = 3.14159;

// for consts, if it is a number of boolean, the name should be uppercase

let radius;
let circumference;

radius = Number(radius);

circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    //document.getElementById("myH1").textContent = "The circumference is " + circumference;
    //console.log("The circumference of the circle is " + circumference);

    document.getElementById("myH3").textContent = circumference + "cm";

}
