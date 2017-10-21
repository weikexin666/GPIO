const http = require('http');
const rpio = require('rpio');
const fs = require('fs');
rpio.open(11, rpio.OUTPUT);

http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return;
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/html'});
    trigger(req.url);
    if (req.url == '/index') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.end(data.toString());
        })
        return;
    }
    res.end('Hello')
}).listen(1314);
console.log('run ok');

function turnOn() {
    rpio.write(11, rpio.HIGH);
}

function turnOut() {
    rpio.write(11, rpio.LOW);
}

function BlingBling() {
    var len = 0;
    var timer =
        setInterval(() => {
            turnOn();
            setTimeout(() => {
                turnOut();
            }, 500);
            if (len == 10) {
                clearInterval(timer)
            }
            len++;
        }, 510);
}

function trigger(URL) {
    if (URL == '/turnOn') {
        turnOn();
    }
    if (URL == '/turnOut') {
        turnOut();
    }
    if (URL == '/BlingBling') {
        BlingBling();
    }
}