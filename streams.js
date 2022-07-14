/*
 This is good for larger files. not just one offs.
this is so you dont have to fill up bucket full before sending.
it basically is like watching youtube. just loads bits at a time
*/
const fs = require('fs');
// const { isMainThread } = require('worker_threads')


// READ STREAM
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'} );

// WRITE STREAM
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log("-------NEW CHUNK--------");
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     // how to pass data down a stream
//     writeStream.write(chunk)
// });

// PIPING... A much easier way to write the above ^^^^
readStream.pipe(writeStream)
