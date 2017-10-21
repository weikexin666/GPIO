const fs = require('fs');
const http = require('http');
http.createServer((req, res) => {
    if(req.url == '/favicon.ico') {
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == '/fs') {
        fs.readFile('./index.html', (err, data) => {
            if(err) {
                console.log(`err > ${err}`);
                return;
            }
            console.log(data.toString())
            res.end(data.toString())
        })
        return
    }
    res.end('Hello')
}).listen(8888)
