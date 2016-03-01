'use strict';

var EventEmitter =  require('events');

//export the class itself using the class expression..this is amazing
module.exports = class Greetr extends EventEmitter{ //Whoop whoop...awesome..inheritance construct thats familiar
    constructor(){
        super(); //this looks familiar? equiv to EventEmitter.call(this);
        this.greeting = 'Hello World';
    }
    
    greet(data){
        console.log(`${ this.greeting } : ${ data }`);
        this.emit('greet', data);
    }
}
