//callbacks

const fs = require('node:fs');

console.log('Read first file');
fs.readFile('./document.txt', 'utf8',(err, text) => {
    console.log(text)
});

console.log('--->do things while you read');

console.log('Read second file');
fs.readFile('./document2.txt', 'utf8',(err, text) =>{
    console.log(text)
});

