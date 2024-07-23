const http = require('http')
const fs = require('fs')
const path = require('path');
const server = http.createServer((req, res) => {
    let filepath = ''
    if (req.url === '/') {
        filepath = path.join(__dirname, 'public', 'home.html')

    }
    else if (req.url == '/login') {
        filepath = path.join(__dirname, 'public', 'login.html')

    }
    else if (req.url === '/signup') {
        filepath = path.join(__dirname, 'public', 'signup.html')

    }
    else {
        res.statusCode = 404
        res.end('Not Found')
        return;
    }

    fs.readFile(filepath, 'utf-8', function (error, data) {
        // res.writeHead(200, 'Content-Type', 'text/html')
        res.end(data);
    })
});

server.listen(3600);