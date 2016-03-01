var obj = {
    name: 'John Doe',
    greet:  function(){
        console.log(`Hello ${ this.name }`); // the strange loking piece of string is the new template literal feature in ES6 for concatenating strings
    }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe'});
obj.greet.apply({ name: 'Jane Doe'});