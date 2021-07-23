const {readFileSync, writeFileSync} = require ('fs');
console.log ('syart');

const first  = readFileSync ('./content/first.txt','utf8');
const second = readFileSync ('./content/second.txt','utf8');

writeFileSync('./content/third.txt',`Here is the result ${first} \n ${second}`,{flag:'a'});

console.log ('dopne with thi task');
console.log ('staring the next one ')