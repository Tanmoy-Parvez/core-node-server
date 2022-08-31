const http = require('http');
const url = require('url');
const fs = require('fs');

//normal server configuration

/* const server = http.createServer(function (req, res) {
    const url = req.url;
    if (url == "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ greetings: "Hello node js" }))
    }
    else if (url == "/home") { 
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<p>Hello Coders</p>");
        res.end()
    }
}); */



// exploring url modules

/* const server = http.createServer(function (req, res) {
    const address_url = "http://localhost:5000/user?name=tanmoy&country=BD";
    const parsed_url = url.parse(address_url);
    const queryObj = parsed_url.query
    const hostUrl = parsed_url.host
    console.log("Parsed Url: ", parsed_url);
    console.log("Query parameter: " + queryObj);
    console.log("Host url: " + hostUrl);
});
 */


// exploring node js file system

const server = http.createServer(function (req, res) {
    
});

const port = 5000;

server.listen(port, () => {
    console.log("Server running on port " + port);
});

