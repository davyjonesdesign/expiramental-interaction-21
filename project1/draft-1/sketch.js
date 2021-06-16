// variables
let c1, c2;
var stateDefault = true;
var state = false;
var state2 = false;
var state3 = false;
var state4 = false;

// setup canvas window
function setup () {
    createCanvas(windowWidth, windowHeight);
    c1 = color(38, 31, 50);
    c2 = color(0, 0, 0);
}

// default styled Drawing
function drawDefault () {

}

// 1st styled drawing
function draw1 () {
    
}

// 2nd styled drawing
function draw2 () {

}

// 3rd styled drawing
function draw2 () {
    
}

// 4th styled drawing
function draw2 () {
    
}

// call drawings per state status
function draw () {
    if (stateDefault) {
      drawDefault();
    } else if (state) {
      draw1();
    } else if (state2) {
      draw2();
    } else if (state3) {
      draw3();
    } else if (state4) {
      draw4();
    }
  }

  // escape key input to change state status
function keyReleased () {
    if (keyCode === ESCAPE && stateDefault === true) {
      loop();
      stateDefault = !stateDefault;
      state = true;
    } else if (keyCode === ESCAPE && state === true) {
      loop();
      state = !state;
      state2 = true;
    } else if (keyCode === ESCAPE && state2 === true) {
      loop();
      state2 = !state2;
      state3 = true;
    } else if (keyCode === ESCAPE && state3 === true) {
      loop();
      state3 = !state3;
      state4 = true;
    } else if (keyCode === ESCAPE && state4 === true) {
      loop();
      state4 = !state4;
      stateDefault = true;
    }
  }