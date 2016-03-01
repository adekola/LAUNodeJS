var util =  require('util');

//function constructor
function Person(){
    this.firstname = 'John'; //refers to the object instantiated by the new keyword
    this.lastname = 'Doe';
}

//prototype extension to create and make available the greet function to all Person objects
Person.prototype.greet = function(){
    console.log('Hello'+ this.firstname + ' ' + this.lastname);
}

//function constrcutor
function Policeman(){
    // the call below essentially ensures that instance variables are set up for the newly created object using the code in the function ctor down the prototype chain
    Person.call(this); //think of this as the super constructor in C# or Java
    this.badgenumber = '1234';
}

//handy feature in the utils core module for realizing inheritance
util.inherits(Policeman, Person);
var officer =  new Policeman();
officer.greet();