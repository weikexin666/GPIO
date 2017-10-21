const http = require('http');
http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log('user');
    res.end('Hello');
}).listen(3344);
console.log('run ok');