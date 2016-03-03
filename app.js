var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding : 'utf8', highWaterMark: 16 * 1024}); //highwatermark specifies the size of the buffer

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');


readable.on('data', function(chunk) { //listen for the data event and write each chunk progressively to the other blank file
    console.log(chunk.length);
    writable.write(chunk);
})