'use strict'; //ensures you don't make silly mistakes, by having the compiler lookout for you...always use in production code

//minty new syntactic sugar for creating classes
class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    //this function is automatically placed on the prototype of this class. Without the .prototype syntax of before..clean, innit??
    greet(){
    console.log(`Hello, ${ this.firstname } ${ this.lastname }`);
    }
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

 