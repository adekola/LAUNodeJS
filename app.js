//ES6 typed arrays
var buffer = new ArrayBuffer(8); //Binary data. 8 bytes ==> 64bits. This is directly available in ES6
var view = new Int32Array(buffer);//used to look into the buffer. The type of the array determines how the buffer contents will be made available
view[0] = 5;
view[1] = 15;
view[2] = 33; //this doesn't get stored. by definition, the arraybuffer can hold up to 64bits of data. i.e. 2 integers (32 bits each)
console.log(view);
