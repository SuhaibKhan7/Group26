const http = require('http');
const fs=require('fs');
const host = '127.0.0.1';
const port = 4000;
let users = [];
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'POST' && req.url === '/signup') {
        console.log('signing')
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        })
        req.on('end', () => {
            const { username, password } = JSON.parse(body);
            if (!username || !password) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'invalid input' }))
                return;
            }
            else {
                users.push({ username, password })
fs.writeFile(  'abc.txt' , 'how are you',function(error){}     )

                console.log(users)
                res.statusCode = 200;
                res.end(JSON.stringify({ usr: users }))
                return;
            }
        })

    }

    else if (req.method == 'PATCH' && req.url == '/update') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        })
        req.on('end', () => {

            const { oldusername, newusername } = JSON.parse(body);

            const userIndex = users.findIndex(usr => usr.username === oldusername)
            if (userIndex == -1) {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: 'User not Found' }))
            }
            else {
                res.statusCode = 200;
                users[userIndex].username = newusername; 
                res.end(JSON.stringify({ usr: users }))
            }


        })




    }






    else {
        res.setStatus = 501;
        res.end(JSON.stringify({ message: "No route Found" }))
    }


})

server.listen(port, host, () => {
    console.log(`server running at port ${host} : ${port}`)
})