// variables
let c1, c2;
var stateDefault = true;
var state = false;
var state2 = false;
var state3 = false;
var state4 = false;

// -------------------------

// setup canvas window
function setup () {
  createCanvas(windowWidth, windowHeight);
  c1 = color(38, 31, 50);
  c2 = color(0, 0, 0);
}

// -------------------------

// extra drawings
// star
function star (x, y, radius1, radius2, npoints) {
  const angle = TWO_PI / npoints;
  const halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// gradient
function setGradient (x, y, w, h, c1, c2, axis) {
  noFill();
  // Left to right gradient
  for (let i = x; i <= x + w; i++) {
    const inter = map(i, x, x + w, 0, 1);
    const c = lerpColor(c1, c2, inter);
    stroke(c);
    line(i, y, i, y + h);
    line(x, i, x + w, i);
  }
}

// -------------------------

// default styled Drawing
function drawDefault () {
  noLoop();
  setGradient(0, 0, width, height, c1, c2, 2);

  // small ellipses
  stroke(191, 154, 37);
  fill(0, 0, 0, 0);
  strokeWeight(2);
  for (d = 0; d <= width + width / 3; d += 30) {
    ellipse(width / 2, height / 2, d, d);
  }

  // large ellipses
  stroke(191, 154, 37, 100);
  strokeWeight(4);
  fill(0, 0, 0, 40);
  // ellipses
  for (d = width / 1.4; d <= width + width / 3; d += 120) {
    ellipse(width / 2, height / 2, d, d);
  }

  // middle stars
  push();
  translate(width * 0.5, height * 0.5);
  fill(191, 154, 37, 20);
  star(0, 0, width / 6.5, width / 7.5, 8);
  fill(191, 154, 37, 30);
  star(0, 0, width / 6, width / 7, 8);
  fill(0, 0, 0, 40);
  star(0, 0, width / 10.5, width / 10.5, 4);
  fill(191, 154, 37, 60);
  star(0, 0, width / 10.5, width / 7.5, 8);
  fill(191, 154, 37, 80);
  star(0, 0, width / 9.5, width / 9.5, 4);
  pop();

  // middle star
  push();
  translate(width * 0.5, height * 0.5);
  rotate(PI / 2);
  fill(191, 154, 37, 100);
  star(0, 0, width / 10.5, width / 13, 8);
  fill(191, 154, 37, 100);
  star(0, 0, width / 12.5, width / 15, 8);
  pop();
  noFill();

  // border stars
  fill(0, 0, 0, 150);
  for (x = 0; x < width + 1; x += width) {
    push();
    translate(x, 0);
    star(0, 0, 100, 150, 8);
    fill(191, 154, 37, 50);
    star(0, 0, 70, 100, 8);
    fill(191, 154, 37, 100);
    star(0, 0, 40, 60, 8);
    pop();
    push();
    translate(x, height);
    star(0, 0, 100, 150, 8);
    fill(191, 154, 37, 50);
    star(0, 0, 70, 100, 8);
    fill(191, 154, 37, 100);
    star(0, 0, 40, 60, 8);
    pop();
    push();
    translate(x, height / 2);
    star(0, 0, 100, 150, 8);
    fill(191, 154, 37, 50);
    star(0, 0, 70, 100, 8);
    fill(191, 154, 37, 100);
    star(0, 0, 40, 60, 8);
    pop();
  }
  for (y = 0; y < height + 1; y += height) {
    push();
    translate(width / 2, y);
    star(0, 0, 100, 150, 8);
    fill(191, 154, 37, 50);
    star(0, 0, 70, 100, 8);
    fill(191, 154, 37, 100);
    star(0, 0, 40, 60, 8);
    pop();
  }
  // text

  textSize(50);
  textFont('Limelight');
  textAlign(CENTER);

  // text shadow
  strokeWeight(6);
  stroke(0, 0, 0, 100);
  noFill();
  text('E', -62, height / 2 - textSize() / 2 + 5, width);
  text('S', 0, height / 2 - textSize() / 2 + 5, width);
  text('C', 67, height / 2 - textSize() / 2 + 5, width);

  stroke(255, 255, 255, 50);
  noStroke();
  fill(255, 220, 140);
  text('E', -60, height / 2 - textSize() / 2, width);
  text('S', 0, height / 2 - textSize() / 2, width);
  text('C', 65, height / 2 - textSize() / 2, width);
}

// -------------------------

// 1st styled drawing
function draw1 () {
  noLoop();

  // squares background
  for (var y = 1; y <= height; y += 240) {
    for (var x = 0; x <= width; x += 120) {
      stroke(163, 183, 192);
      strokeWeight(3);
      fill(56, 53, 54);
      rect(x, y, 60);
      strokeWeight(4);
      fill(228, 220, 202);
      rect(x + 60, y, 60);
    }
  }
  for (var y = 61; y <= height; y += 120) {
    for (var x = -105; x <= width; x += 120) {
      stroke(163, 183, 192);
      strokeWeight(3);
      fill(56, 53, 54);
      rect(x, y, 60);
      strokeWeight(4);
      fill(228, 220, 202);
      rect(x + 60, y, 60);
    }
  }
  for (var y = 121; y <= height; y += 240) {
    for (var x = -90; x <= width; x += 120) {
      stroke(163, 183, 192);
      strokeWeight(3);
      fill(56, 53, 54);
      rect(x, y, 60);
      strokeWeight(4);
      fill(228, 220, 202);
      rect(x + 60, y, 60);
    }
  }
  // text box
  fill(163, 183, 192);
  strokeWeight();
  rect(width / 2 - 85, height / 2 - 35, 170, 70);
  stroke(56, 53, 54);
  strokeWeight(4);
  fill(228, 220, 202);
  rect(width / 2 - 75, height / 2 - 25, 150, 50);

  // text
  fill(56, 53, 54);
  stroke(56, 53, 54, 200);
  strokeWeight(3);
  textSize(60);
  textFont('Geostar Fill');
  textAlign(CENTER);
  text('esc', 8, height / 2 - textSize() / 2 - 4, width);
}

// -------------------------

// 2nd styled drawing
function draw2 () {}

// -------------------------

// 3rd styled drawing
function draw3 () {}

// -------------------------

// 4th styled drawing
function draw4 () {}

// -------------------------

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
