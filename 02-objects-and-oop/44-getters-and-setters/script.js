// getter = special method that makes a property readable 
// setter = special method that makes a property writable 

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width; 
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth 
            // using the underscore "_" to tell other developer that this is a private property
        }
        else{
            console.error("Width must be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight
        }
        else{
            console.error("Height must be a positive number")
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}
const rectangle = new Rectangle(3, 3);
rectangle.width = 15; 
rectangle.height = 23
console.log(`The width of a rectangle: ${rectangle.width}`);
console.log(`The height of a rectangle: ${rectangle.height}`);
console.log(`The area of a rectangle ${rectangle.area}`);


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName; 
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string.")
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string.")
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        } 
        else{
            console.error("Age must be a non-negative number")
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    get age(){
        return this._age;
    }
}
const person = new Person("Chivorn", "Messi", 10);
console.log(`First name: ${person.firstName}`)
console.log(`Last name: ${person.lastName}`)
console.log(`Full Name: ${person.fullName}`)
console.log(`Age: ${person.age}`)