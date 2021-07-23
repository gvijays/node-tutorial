
/*
console.log (__dirname);

setInterval(() => {
    console.log ("hello wiorkd");
}, 1000);*/

//Modules

const names = require ('./4-names');
const data = require ('./6-alternative-flavor');

const os = require ('os')

//info about current user

require('./7-mind-grenade');
//  names.sayHi("susan");
//  names.sayHi(names.vijy);
//  names.sayHi(names.sriram);

//method return the uptime

// const path = require ('path');

// const filejoin = path.join ('content','subfolder','text.txt')
// console.log (filejoin);

// console.log (path.basename(filejoin));


// const abs  = path.resolve(__dirname,'content','subfolder','text.txt');
// console.log (abs);


const http = require ('http')

const server = http.createServer ((req,res) => {


    if (req.url === '/'){

        res.end ('Welcome to our home paghe')
    }

    if (req.url === '/about')
    {
        res.end ('this is the about page ')
    }
//res.write('welome to our home page');
//res.end('<h1> we cant find the page</h1>');

})


server.listen (5000);