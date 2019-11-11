function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill (12, 5, 29);
  triangle (0, 200, 200, 300, 400, 200);
  fill (13, 13, 178);
  noStroke();
  triangle (0, 0, 200, 100, 0, 200);
  noStroke();
  triangle (200, 300, 400, 200, 400, 400);
  fill (241, 90, 41);
  noStroke();
  triangle (0, 200, 200, 300, 0, 400);
  fill (12, 0, 98);
  noStroke ();
  triangle (0, 200, 200, 100, 400, 200);
  fill (236, 0, 140);
  triangle (400, 0, 200, 100, 400, 200);
}