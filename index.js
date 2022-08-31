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
    
/* 
========= read data ========= 
*/

   // reading file asynchronously;
    fs.readFile("testFile.txt", (err, data) => { 
        if (err) {
            res.write("Data failed to read");
            res.end();
        }
        else { 
            res.write("From external file: " + data);
            res.end();
        }
    })

    // reading file synchronously;
    const data = fs.readFileSync("testFile.txt");
    res.write(data);
    res.end();

    /* 
    ========= write data ========= 
    */

    // writing file on existing file asynchronously;
    /* fs.writeFile("testFile.txt", "hello world from write data", (err) => {
        if (err) {
            res.write("Data failed to write");
            res.end();
        }
        else { 
            res.write("Data successfully written");
            res.end();

        }
    }) */

    // writing file on existing file asynchronously;
    fs.writeFile("newTestFile.txt", "Hello world from new node text file", (err) => {
        if (err) {
            res.write("Data failed to write");
            res.end();
        }
        else {
            res.write("Data successfully written");
            res.end();

        }
    })

});

const port = 5000;

server.listen(port, () => {
    console.log("Server running on port " + port);
});

