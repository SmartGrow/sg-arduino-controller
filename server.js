const express = require('express')
const app = express()

const five = require("johnny-five");
const board = new five.Board()

var pause = false;

board.on("ready", function() {
    

    this.pinMode(13, this.MODES.OUTPUT);
    
    this.loop(500, () => {
        if (!pause) {
            this.digitalWrite(13, this.pins[13].value ? 0 : 1);
        }
    });

});

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/toggle', (req, res) => {
    pause = !pause;
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))