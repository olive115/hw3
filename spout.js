var x = 230;
var y = 220;
speed = 1

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 240, 20);
  rect(195,215,45,20)

  // draw drip
  ellipse(x, y, 10);

  // down 3 pixels each frame, but maybe should be accelerating?
  y = y +3
  

  // if invisible for a full “height” amount…
  if (y > height) {
    // reset
    y = 220;
  }
}
