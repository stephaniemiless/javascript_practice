// How to accept user input

// EASY WAY with a window prompt

let user = window.prompt("What's your name?");
console.log(user);


// DIFFICULT WAY html textbox (more practical)

let username;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}