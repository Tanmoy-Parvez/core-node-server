const http = require('http');

const server = http.createServer(function (req, res) {
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
});

const port = 5000;

server.listen(port, () => {
    console.log("server listening on port " + port);
});

