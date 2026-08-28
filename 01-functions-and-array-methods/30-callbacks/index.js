// callback = a function that is passed as an argument to another function.

//  used to handle asynchronous operations:
//      1. Reading a file 
//      2. Network requests
//      3. Interacting with databases

hello(stfu);
goodBye;

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodBye(){
    console.log("Good bye!")
}

function stfu(){
    console.log("SHUT THE FUCK UP!")
}

sum(displayPage, 2, 2)
function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}