const http = require('http');
const rpio = require('rpio');
rpio.open(11, rpio.OUTPUT);

http.createServer((req, res) => {
    if (req.url == '/favicon.ico'){
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    trigger(req.url);
    res.end('Hello')
}).listen(8866);
console.log('run ok');

function turnOn() {
    rpio.write(11, rpio.HIGH);
}
function trunOut() {
    rpio.write(11, rpio.LOW);
}
function BlingBling() {
    let len = 0;
    trunOn();
    setInterval(() => {
        if (len == 5) {
            return;
        }
        trunOut();
    },100);
}
function trigger(URL) {
    if (URL == '/turnOn'){
        turnOn();
    }
    if (URL == '/trunOut'){
        trunOut();
    }
    if (URL == '/BlingBling'){
        BlingBling();
    }
}