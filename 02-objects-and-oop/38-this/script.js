// this = reference to the object where THIS is used 
//      (the object depends on the immediate context)
//      person.name = this.name

const person1 = {
    myName: "Messi", 
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.myName}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
    myName: "kk", 
    favFood: "hamburger",
    sayHello: function(){console.log(`Hi! I am ${this.myName}`)},
    eat: function(){console.log(`${this.myName} is eating ${this.favFood}`)}
}
person1.sayHello();
person2.eat();