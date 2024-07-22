const http = require('http')
const fs = require('fs')
const path = require('path');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filePath, 'utf-8', function (error, data) {
            if (error) {
                console.log('Unable to send file');
            }
            else {
                res.end(data);
            }

        })
    }
    else {
        res.end('Route not found')
    }


});

server.listen(3600);