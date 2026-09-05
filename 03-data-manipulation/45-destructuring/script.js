// destructuring = extract values from arrays and objects,
//      then assign them to variables in a convenient way
//      [] = to perform array destructuring 
//      {} = to perform object destructuring

// Example 1
// swap the value of two variables
let a = 1; 
let b = 2;;

[a,b] = [b,a] 

console.log(a)
console.log(b)

//     Example 2
// Swap 2 elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors)

//Example 3
// Assign array elements to variables

const colors1 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// Example 4
//  Extract values from objects

const person1 = {
    firstName: "messi",
    lastName: "leo",
    age: 39,
    job: "footballer"
}
const person2 = {
    firstName: "Ronaldo",
    lastName: "Christ",
    age: 32,
    job: "footballer"
}

const {firstName, lastName, age, job} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Example 5
// Destructure in function parameters

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
}
const person3 = {
    firstName: "Chivorn",
    lastName: "MON",
    age: 20,
    job: "Unemployed"
}
displayPerson(person3);