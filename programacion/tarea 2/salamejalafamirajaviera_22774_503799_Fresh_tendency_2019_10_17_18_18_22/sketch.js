function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(148,217,224);
  
  push();
  translate(350,350);
  rotate(180);
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(250,250);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(250,350);
  rotate(90)
  scale(1/4);
  modulo1();
  pop();

  push();
  translate(150,350);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(150,250);
  scale(1/4);
  modulo1();
  pop();

  push();
  translate(50,350);
  rotate (180);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(50,250);
  rotate (90);
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(350,250);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(50,150);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(150,150);
  rotate(90);
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(150,50);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(250,150);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(350,150);
  rotate (90);
  scale(1/4);
  modulo1();
  pop();

  push();
  translate(250,50);
  rotate (270);
  scale(1/4);
  modulo1();
  pop();

  push();
  translate(350,50);
  rotate ();
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(50,50);
  scale(1/4);
  rotate (90);
  modulo1();
  pop();









}

function modulo1(){
  push();
  translate(-200,-200);
 noStroke ();
  fill (148,217,244);
  triangle (0,0,200,0,0,200);
  noStroke ();
  fill (50,20,42);
  triangle (200,0,400,0,400,200);
  triangle (0,200,0,400,200,400);
  noStroke ();
  fill (148,217,224);
  triangle (400,200,200,400,400,400);
  noStroke ();
  fill (50,20,42);
  triangle (0,200,200,200,200,0);
  triangle (400,200,200,200,200,400);
  noStroke ();
  fill (148,217,224);
  triangle (200,200,0,200,200,400);
  triangle (200,200,200,0,400,200);
  noStroke();
  fill (50,20,42);
  triangle (0,160,0,0,160,0);
  triangle (200,40,200,200,360,200);
  triangle (400,240,240,400,400,400);
  triangle (200,360,200,200,40,200);
  noStroke ();
  fill (59,117,135);
  triangle (40,200,200,200,200,40);
  triangle (240,0,400,0,400,160);
  triangle (200,200,360,200,200,360);
  triangle (160,400,0,240,0,400);
  triangle (120,0,0,120,0,0);
  triangle (200,80,200,200,320,200);
  triangle (200,200,200,320,80,200);
  triangle (400,400,400,280,280,400);
  noStroke ();
  fill (50,20,42);
  triangle (0,0,0,80,80,0);
  triangle (200,80,200,200,80,200);
  triangle (280,0,400,120,400,0);
  triangle (320,200,200,200,200,320);
  triangle (0,280,120,400,0,400);
  triangle (200,200,120,200,200,280);
  triangle (200,120,200,200,280,200);
  triangle (80,0,80,0,0,0);
  triangle (400,320,400,400,320,400);
  noStroke ();
  fill (148,217,224);
  triangle (320,0,400,0,400,80);
  triangle (200,120,200,200,120,200);
  triangle (280,200,200,200,200,280);
  triangle (0,320,80,400,0,400);
  triangle (0,0,0,40,40,0);
  triangle (200,160,200,200,240,200);
  triangle (200,200,160,200,200,240);
  triangle (400,400,360,400,400,360);
  noStroke ();
  fill (50,20,42);
  triangle (0,360,40,400,0,400);
  triangle (200,160,200,200,160,200);
  triangle (200,200,240,200,200,240);
  triangle (400,0,400,40,360,0);
  pop();
  
}

function modulo2(){
  push();
  translate(-200,-200);
  noStroke ();
  fill (51,33,51);
  triangle (0,0,200,0,0,200);
  triangle (200,0,400,0,400,200);
  triangle (0,200,0,400,200,400);
  triangle (400,400,400,200,200,400);
  fill (43,78,102);
  triangle (0,0,0,120,120,0);
  triangle (0,400,0,280,120,400);
  triangle (400,0,400,120,280,0);
  triangle (400,400,400,280,280,400);
  fill (148,217,224);
  triangle (0,0,0,40,40,0);
  triangle (400,400,400,360,360,400);
  triangle (400,0,400,40,360,0);
  triangle (0,400,40,400,0,360);
  fill (43,78,102);
  quad (100,100,300,100,300,300,100,300);
  fill (51,33,51);
  quad (140,140,260,140,260,260,140,260);
  fill (148,217,224);
  quad (180,180,220,180,220,220,180,220);
  pop();
  
}