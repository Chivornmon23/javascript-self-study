// function declaration = define a reusable block of code that performs a specific task


// function expression = a way to define functions as values or variables

setTimeout(function(){
    console.log("Hello, Leangyi!");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element){
    return Math.pow(element, 2);
});
console.log(squares);

const cubes = numbers.map(function (element){
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 != 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total)


