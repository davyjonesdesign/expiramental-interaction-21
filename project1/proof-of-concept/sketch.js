// setting variables
var x = 300;
var y = 200;
var d = 50;
var stateDefault = true;
var state = false;
var state2 = false;
var state3 = false;
var state4 = false;

// setup canvas window
function setup() {
  createCanvas(windowWidth, 800);
  // noLoop();
  frameRate(7);
}

// 1st styled drawing
function draw1() {
  loop();
  noLoop();
  background(175, 255, 255);
  smooth();
  for (let i = 0; i < 55; i++) {
    noStroke();
    fill(random(255), random(200), random(200), 255);
    ellipse(random(width), random(height), random(50));
  }
  for (let i = 0; i < 55; i++) {
    noStroke();
    fill(random(255), random(200), random(200), 255);
    square(random(width), random(height), random(100), random(25));
  }
  fill(random(255), random(255), random(255));
  strokeWeight(10);
  stroke(255);
  textSize(50);
  textFont("hwt-mardell");
  textAlign(CENTER);
  text("insert info about escapism", 0, 300, width);
}

// 2nd styled drawing
function draw2() {
  noLoop();
  noStroke();
  background(100);
  fill(255);
  rect(x, y, d, d);
  textSize(50);
  textFont("flyswim");
  textAlign(CENTER);
  text("insert info about escapism", 0, 300, width);
}

// 3rd styled drawing
function draw3() {
  noLoop();
  noStroke();
  background(200);
  fill(0);
  ellipse(x, y, d, d);
  textSize(50);
  textFont("forgotten-futurist-shadow");
  textAlign(CENTER);
  text("insert info about escapism", 0, 300, width);
}

// 4th styled drawing
function draw4() {
  noLoop();
  noStroke();
  background(25);
  fill(150);
  ellipse(x, y, d, d);
  textSize(50);
  textFont("volina");
  textAlign(CENTER);
  text("insert info about escapism", 0, 300, width);
}

// call drawings per state status
function draw() {
  if (stateDefault) {
    noLoop();
    noStroke();
    background(25);
    fill(150);
    ellipse(x, y, d, d);
    textSize(200);
    textFont("volina");
    textAlign(CENTER);
    text("Esc", 0, 300, width);
    textSize(50);
    text("insert intro to escapism", 0, 600, width);

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
function keyReleased() {
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
    state = true;
  }
}
