const five = require("johnny-five");
const board = new five.Board({repl: false})

board.on("ready", function() {
    this.pinMode(13, this.MODES.OUTPUT);
    this.loop(500, () => {
        if (!pause) {
            this.digitalWrite(13, this.pins[13].value ? 0 : 1);
        }
    });
});
