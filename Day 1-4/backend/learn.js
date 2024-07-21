const fs = require('fs')
fs.writeFile('xyz.txt', 'jfdkjfkdfdkfjkdsfjksadf', function (error) {

})
fs.readFile('xy.txt', 'utf8', function (error, data) {
    if (error) {
        console.log('No file avail')
    }
    else {

        console.log(data);
    }
})