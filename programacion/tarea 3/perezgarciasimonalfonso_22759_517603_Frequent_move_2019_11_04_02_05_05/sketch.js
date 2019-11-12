function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  pattern (105, 180, 215, 200, 130, 255, 190, 80, 100);

}

function pattern (tam1, tam2, esp, r1, g1, b1, r2, g2, b2) {
  noStroke ();
  fill (12, 5, 29);
  triangle (0, 200, 200, 300, 400, 200);
  fill (13, 13, b2);
  triangle (0, 0, 200, 100, 0, 200);
  triangle (200, 300, 400, 200, 400, 400);
  fill (241, 90, 41);
  triangle (0, 200, 200, 300, 0, 400);
  fill (12, 0, 98);
  triangle (0, 200, 200, 100, 400, 200);
  fill (236, 0, 140);
  triangle (400, 0, 200, 100, 400, 200);
  //ellipseMode (CENTER);
  push ();
  fill (0, 0, 0);
  ellipse (esp, 190, 360);
  fill (255, 255, 255);
  ellipse (esp, 210, 360);
  fill (13, 13, 178);
  ellipse (210, esp, 360);
  fill (241, 90, 41);
  ellipse (190, esp, 360);
  fill (236, g2, 140);
  ellipse (200, 200, 360);
  pop ();
  fill (13, 13, 178);
  rect (125, 125, 150, 150);
  fill (r2, 0, 0);
  ellipse (200, 300, 160);
  ellipse (200, 100, 160);
  ellipse (100, 200, tam2);
  ellipse (300, 200, tam2);
  fill (241, g1, 41)
  noStroke();
  quad (100, 120, 180, 200, 100, 280, 20, 200);
  quad (200, 20, 280, 100, 200, 180, 120, 100); 
  quad (300, 120, 380, 200, 300, 280, 220, 200);
  quad (200, 220, 280, 300, 200, 380, 120, 300);
  //rotate (angle);
  fill (13, 13, b1);
  square (60, 160, 80);
  square (160, 60, 80);
  square (260, 160, 80);
  square (160, 260, 80);
  fill (r1);
  ellipse (200, 200, 35);
  ellipse (200, 100, 70);
  ellipse (100, 200, tam1);
  ellipse (300, 200, tam1);
  ellipse (200, 300, 70);
}