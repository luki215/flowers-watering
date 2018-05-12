var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

const pumpsHW = [
        new Gpio(4,  'out'),
        new Gpio(17, 'out'),
        new Gpio(27, 'out'),
        new Gpio(22, 'out'),
      ];
      
pumpsHW.forEach(p => {p.writeSync(1) });

// pumps.forEach(pump => {pump.writeSync(1)});

let turnOn = (id) => {
    pumpsHW[id].writeSync(0);
  }

let turnOff = (id) => {
    pumpsHW[id].writeSync(1);
  }

module.exports.turnOn = turnOn;
module.exports.turnOff = turnOff;

/*

var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 5000); //stop blinking after 5 seconds
*/