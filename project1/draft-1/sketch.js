// variables
let c1, c2;
var state0 = true;
var state1 = false;
var state2 = false;
var state3 = false;
var column;
var distinction;
var face;
var handPipe;
var hand;
var hat;
var ladyUmbrella;
var manScooter;
var ronLisa;
var woodySuit;
var pour;
var train;
var mountain;
var skiArm;
var village;

// -------------------------

// setup canvas window
function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(38, 31, 50);
  c2 = color(0, 0, 0);
  column = loadImage("dada-imgs/column.png");
  distinction = loadImage("dada-imgs/distinction.png");
  face = loadImage("dada-imgs/face.png");
  handPipe = loadImage("dada-imgs/hand-pipe.png");
  hand = loadImage("dada-imgs/hand.png");
  hat = loadImage("dada-imgs/hat.png");
  ladyUmbrella = loadImage("dada-imgs/lady-umbrella.png");
  manScooter = loadImage("dada-imgs/man-scooter.png");
  ronLisa = loadImage("dada-imgs/ron-lisa.png");
  woodySuit = loadImage("dada-imgs/woody-suit.png");
  pour = loadImage("dada-imgs/pour.png");
  train = loadImage("dada-imgs/railroad.png");
  mountain = loadImage("dada-imgs/mountain-word.png");
  skiArm = loadImage("dada-imgs/ski-arm.png");
  village = loadImage("dada-imgs/village.png");
}

// -------------------------

// extra drawings
// star
function star(x, y, radius1, radius2, npoints) {
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
function setGradient(x, y, w, h, c1, c2, axis) {
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

// pop art tile
function popArt(x, y, w, h, r, g, b, r2, g2, b2, r3, g3, b3) {
  rect(x, y, w, h);
  noStroke();

  // mouth

  // top lip
  fill(r2, g2, b2);
  arc(w / 4 + x + w / 24, h / 2 + y, w / 6, 60, PI, 0);
  arc(w / 4 + x + w / 8, h / 2 + y, w / 6, 60, PI, 0);

  // bottom lip
  arc(w / 3 + x, h / 2 + y, w / 4, 145, 0, PI);

  // inner mouth
  fill(r3, g3, b3);
  arc(w / 3 + x, h / 2 + y - 1, w / 4 - w / 48, 100, 0, PI);
  arc(w / 3 + x, h / 2 + y, w / 4 - w / 48, 15, PI, 0);

  //   teeth
  fill(r, g, b);
  arc(w / 3 + x, h / 2 + y + 5, w / 4 - w / 22, h / 12, 0, PI);
  rect(w / 4 + x - w / 52, h / 2 + y, w / 4 - w / 22, h / 48);
  // toungue
  arc(w / 3 + x - w / 60, (2 * h) / 3 + y - h / 30, w / 24, h / 24, PI, 0);
  arc(w / 3 + x + w / 60, (2 * h) / 3 + y - h / 30, w / 24, h / 24, PI, 0);
  // outline
  noFill();
  stroke(r3, g3, b3);
  strokeWeight(6);
  arc(w / 3 + x, h / 2 + y + 2, w / 4 - w / 48, 90, 0, PI);
  arc(w / 3 + x, h / 2 + y, w / 4 - w / 48, 15, PI, 0);

  // speech bubble
  fill(r2, g2, b2);
  triangle(
    (2 * w) / 3 + x,
    h / 2 + y,
    (5 * w) / 9 + x,
    h / 3 + y,
    w / 2 + x,
    (4 * h) / 7 + y
  );
  ellipse((2 * w) / 3 + x, h / 3 + y, w / 3, h / 2);
  //   noStroke();
  triangle(
    (2 * w) / 3 + x,
    h / 2 + y,
    (5 * w) / 9 + x,
    h / 3 + y,
    w / 2 + x,
    (4 * h) / 7 + y
  );
  ellipse((2 * w) / 3 + x, h / 3 + y, w / 3, h / 2);

  textSize(60);
  textFont("Bangers");
  strokeWeight(10);
  stroke(r, g, b);
  text("ESC!", x + w / 6, h / 3 - textSize() / 2 + y + 2, w);
}

// -------------------------

// default styled Drawing
function draw0() {
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
  textFont("Limelight");
  textAlign(CENTER);

  // text shadow
  strokeWeight(6);
  stroke(0, 0, 0, 100);
  noFill();
  text("E", -62, height / 2 - textSize() / 2 + 5, width);
  text("S", 0, height / 2 - textSize() / 2 + 5, width);
  text("C", 67, height / 2 - textSize() / 2 + 5, width);

  stroke(255, 255, 255, 50);
  noStroke();
  fill(255, 220, 140);
  text("E", -60, height / 2 - textSize() / 2, width);
  text("S", 0, height / 2 - textSize() / 2, width);
  text("C", 65, height / 2 - textSize() / 2, width);
}

// -------------------------

// 1st styled drawing
function draw1() {
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
  textFont("Geostar Fill");
  textAlign(CENTER);
  text("esc", 8, height / 2 - textSize() / 2 - 4, width);
}

// -------------------------

// 2nd styled drawing
function draw2() {
  noLoop();
  background(0);
  noStroke();

  // col 1
  push();
  fill(255, 253, 10);
  popArt(
    0,
    0,
    width / 3 + 0.33,
    height / 3 + 0.33,
    141,
    188,
    14,
    42,
    36,
    126,
    255,
    253,
    10
  );
  pop();

  push();
  fill(247, 133, 10);
  popArt(
    0,
    height / 3,
    width / 3 + 0.33,
    height / 3 + 0.33,
    122,
    191,
    248,
    121,
    68,
    150,
    247,
    133,
    10
  );
  pop();

  push();
  fill(34, 110, 98);
  popArt(
    0,
    (2 * height) / 3,
    width / 3 + 0.33,
    height / 3 + 0.33,
    254,
    251,
    232,
    233,
    7,
    133,
    34,
    110,
    98
  );
  pop();

  // col 2
  push();
  fill(3, 131, 240);
  popArt(
    width / 3,
    0,
    width / 3 + 0.33,
    height / 3 + 0.33,
    248,
    249,
    109,
    229,
    6,
    123,
    3,
    131,
    240
  );
  pop();

  push();
  fill(228, 13, 31);
  popArt(
    width / 3,
    height / 3,
    width / 3 + 0.33,
    height / 3 + 0.33,
    248,
    246,
    248,
    33,
    33,
    35,
    228,
    13,
    31
  );
  pop();

  push();
  fill(255, 250, 8);
  popArt(
    width / 3,
    (2 * height) / 3,
    width / 3 + 0.33,
    height / 3 + 0.33,
    159,
    194,
    52,
    250,
    40,
    41,
    255,
    250,
    8
  );
  pop();

  // col 3
  push();
  fill(43, 33, 130);
  popArt(
    (2 * width) / 3,
    0,
    width / 3 + 0.33,
    height / 3 + 0.33,
    245,
    141,
    190,
    250,
    40,
    41,
    43,
    33,
    130
  );
  pop();

  push();
  fill(141, 185, 10);
  popArt(
    (2 * width) / 3,
    height / 3,
    width / 3 + 0.33,
    height / 3 + 0.33,
    248,
    249,
    109,
    238,
    104,
    7,
    141,
    185,
    10
  );
  pop();

  push();
  fill(228, 4, 126);
  popArt(
    (2 * width) / 3,
    (2 * height) / 3,
    width / 3 + 0.33,
    height / 3 + 0.33,
    238,
    117,
    13,
    37,
    30,
    125,
    228,
    4,
    126
  );
  pop();
}

// -------------------------

// 3rd styled drawing
function draw3() {
  noLoop();
  noStroke();
  background(250, 240, 220);

  // column
  push();
  translate (width - width / 20, height - height / 4 - height / 6);
  rotate(PI / 2);
  image(column, 0, 0, width / 4, height / 3);
  pop();

  // mountain
  push();
  translate(width / 2, height / 32);
  image(mountain, 0, 0, width - width / 3, height - height / 4);
  pop();

  // village
  push();
  translate(width / 10, height - height / 3 );
  image(village, 0, 0, width / 2 - width / 32, height / 3 + height / 32);
  pop();

  push();
  translate(-width / 12, 0);
  image(distinction, 0, 0, width / 4, height / 3);
  pop();

  // ski arm
  push();
  translate(width / 100, height / 4 );
  rotate(- QUARTER_PI  / 3)
  image(skiArm, 0, 0, width / 7, height / 4);
  pop();

  // pouring cup
  push();
  translate(width / 5 + width / 100, height / 36 );
  rotate(QUARTER_PI / 5)
  image(pour, 0, 0, width / 6, height / 3);
  pop();

  // suit
  push();
  translate(width / 16, height / 2 - height / 5);
  image(woodySuit, 0, 0, width / 3, height / 2);
  pop();

  

  // face
  push();
  translate(width / 2 + width / 84, height / 3  + height / 12);
  rotate(-QUARTER_PI);
  image(face, 0, 0, width / 3.3, height / 4 + height / 22);
  pop();

  // Ron Swanson Mona Lisa
  push();
  translate(width - width / 5, height / 4);
  rotate(-QUARTER_PI / 4)
  image(ronLisa, 0, 0, width / 6, height / 3);
  pop();

  // hand
  push();
  translate(width - width / 6 - width / 10, height / 22);
  rotate(QUARTER_PI / 2)
  image(hand, 0, 0, width / 5, height / 4);
  pop();

  // umbrella 
  push();
  translate(width / 3 + width / 20, height / 15);
  rotate(- QUARTER_PI / 2)
  image(ladyUmbrella, 0, 0, width / 3, height / 2);
  pop();

  // pipe and hand
  push();
  translate(width / 2  - width / 7, height - height / 4);
  rotate( - QUARTER_PI);
  rotate( - QUARTER_PI / 2);
  image(handPipe, 0, 0, width / 6, height / 3);
  pop();

  // train
  push();
  translate(width / 2, height / 2);
  image(train, 0, 0, width / 4 + width / 28, 5 * height / 9);
  pop();

  // hat
  push();
  translate(width / 2 - width / 24, height / 9);
  rotate(QUARTER_PI);
  image(hat, 0, 0, width / 5, height / 4);
  pop();

  // text
  push();
  translate( - width / 12, height / 32);
  noFill();
  stroke (255, 100, 100, 125); 
  strokeWeight(10);
  textSize(width / 4);
  rotate(QUARTER_PI / 3)
  textFont("Megrim");
  textAlign(CENTER);
  text("Esc", 0, height / 2 - textSize() / 2, width);
  pop();

  // man scooter
  push();
  translate(width / 64, height / 2 + height / 6);
  rotate(-QUARTER_PI / 4)
  image(manScooter, 0, 0, width / 10, height / 3);
  pop();

  

  
  
}

// -------------------------

// call drawings per state status
function draw() {
  if (state0) {
    draw0();
  } else if (state1) {
    draw1();
  } else if (state2) {
    draw2();
  } else if (state3) {
    draw3();
  }
}

// escape key input to change state status
function keyReleased() {
  if (keyCode === ESCAPE && state0 === true) {
    loop();
    state0 = !state0;
    state1 = true;
  } else if (keyCode === ESCAPE && state1 === true) {
    loop();
    state1 = !state1;
    state2 = true;
  } else if (keyCode === ESCAPE && state2 === true) {
    loop();
    state2 = !state2;
    state3 = true;
  } else if (keyCode === ESCAPE && state3 === true) {
    loop();
    state3 = !state3;
    state0 = true;
  }
}
