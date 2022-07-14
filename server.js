// This is a local server using NodeJS
// REMEMBER: You have to reload VSC each time a change is made to Server File
// by using CTRL C in the terminal

// This sets up the initial server framework
const http = require('http');

// This to bring in a HTML File
const fs = require('fs');

// For Lodash dependency See Package-JSON for stuffand the Node_Modules
// folder which was just created when installed.  There is no need to go 
// into this folder at any time tho.
// Naming convention is to use the _ to identify as lodash
const _ = require('lodash');

// this will call back each time a request is made to server. 
// so if request made to get homepadge, this will run.
// This give you access to request and response objects
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // LODASH
    const num = _.random(0,20);
    console.log(num);

    // Using lodash with a function
    let greet = _.once(() => {
        console.log("HOLA")
    });
    
    greet();
    greet();

    // Set Header Content Type
    res.setHeader('Content-Type', 'text/html');

    // use the write response to write actual HTML
    /*
    res.write("<h1>Hello people</h1>");
    res.write("<p>Here is a bunch of text to put here</p>");
    // then end the request
    res.end();
    */

    // To route to other pages including 404 using Switch Statement
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;   // add the status code 200 for okay
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;

        // vvv This is a redirect vvv
        case '/about-you':
            res.statusCode = 301;   // 301 is perminantly moved
            res.setHeader('location', '/about');
            res.end();
            break;
        case '/contact':
            path += 'contact.html'
            res.statusCode = 200;
            break;
        default: 
            path += '404.html'
            res.statusCode = 404;
            break;

    }
    

    // To bring in a HTML File
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);

            res.end(data);
        }
    })

});

// This will just be sitting here unless we add a method
// This method listens to requests made
// need to add server and hostname, and callback function
server.listen(3000, 'localhost', ()=> {
    // This fires when start listening
    console.log("Listening for Requests on port 3000...");
})


