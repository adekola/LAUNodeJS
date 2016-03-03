var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed  = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip(); //this is a transfrom stream, which compresses each chunk sent to it

//returns the destination stream that's passed in as the parameter
readable.pipe(writable).pipe; //a nifty and neat way to copy data from one stream to the other

//read, pipe to gzip (for compression), then pipe to the compressed stream for saving to file
readable.pipe(gzip).pipe(compressed);
