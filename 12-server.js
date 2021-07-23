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