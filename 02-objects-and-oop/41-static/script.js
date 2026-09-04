// static = keyword that defines properties or methods that belong to a class itself rather than
//   the objects created from thaat class (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getcircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getcircumference(10))
console.log(MathUtil.getArea(10))

class User{
    static userCount = 0;

    constructor (username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online.`)
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}
const user1 = new User("Messi")
const user2 = new User("Chivorn")
const user3 = new User("Ronaldo")
const user4 = new User("Neymar")

console.log(user1.username)
user1.sayHello();
console.log(user2.username)
user2.sayHello();
console.log(user3.username)
user3.sayHello();
console.log(user4.username)
user4.sayHello();

User.getUserCount();
