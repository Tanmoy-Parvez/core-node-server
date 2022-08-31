const http = require('http');

const server= http.createServer(function (req, res) {
    const url = req.url;
    console.log(url);
});

const port = 5000;

server.listen(port, () => {
console.log("server listening on port " + port);
});

