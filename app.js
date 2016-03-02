function greet(callback){ //expects a callback fxn to be called from within the greet fxn
    console.log('Hello!');
    var data = {
      name: 'John Doe'  
    };
    callback(data);
}

greet(function(data) {
    console.log('The callback was invoked');
    console.log(data);
    
});