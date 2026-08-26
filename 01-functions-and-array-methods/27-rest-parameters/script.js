// Rest parameters = (...rest) allow a function work with a variable 
//      number of arguments by bundling them into an array

//      Spread = expands an array into seperate elements 
//      rest = bundles seperate elements into an arrau

function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "SpongeBob", "Squarepants", "III")
console.log(fullName);