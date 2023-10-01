//promises

const fs = require('node/promises');

console.log('Read first file');
fs.readFile('./document.txt', 'utf8') 
    .then (text => {
    console.log(text)
});

console.log('--->do things while you read');

console.log('Read second file');
fs.readFile('./document2.txt', 'utf8') 
.the( text =>{
    console.log(text)
});

