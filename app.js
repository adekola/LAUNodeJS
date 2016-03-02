var buf = new Buffer('Hello', 'utf8'); 
console.log(buf); //outputs in hx format
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());
