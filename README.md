# hw3

Q1. function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;
  is the code that draws the blades of grass.
  
 Q2. 
  if (x > width) {
    x = random(10);
    h = h + 3; 
    is the code that makes the lawn mower run. It comes 
