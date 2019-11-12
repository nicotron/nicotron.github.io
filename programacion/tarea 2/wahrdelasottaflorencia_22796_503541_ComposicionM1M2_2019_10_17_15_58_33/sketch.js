function setup() {
  createCanvas(400, 400);
  angleMode (DEGREES)
}

function draw() {
 background (169,22,80);
  
  push();
  translate(350,350);
  scale(1/4)
  modulo1();
  pop();
  
  push();
  translate(250,350)
  scale(1/4)
  modulo2();
  pop();
  
  push();
  translate(150,350);
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(50,350);
  scale(1/4);
  rotate(90)
  modulo2();
  pop();
  
  push();
  translate(50,250);
  scale(1/4);
  rotate(90);
  modulo1();
  pop();
  
  push();
  translate(150,250);
  scale(1/4);
  rotate(180)
  modulo2();
  pop();
  
  push();
  translate(250,250);
  rotate(90);
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(350,250);
  rotate(270);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(50,150);
  rotate(180);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(150,150);
  rotate();
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(250,150);
  rotate(90);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(350,150);
  rotate(180);
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(150,50);
  rotate(270);
  scale(1/4);
  modulo2();
  pop();
  
  push();
  translate(50,50);
  rotate();
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(250,50);
  rotate(90);
  scale(1/4);
  modulo1();
  pop();
  
  push();
  translate(350,50);
  rotate();
  scale(1/4);
  modulo2();
  pop();
  
  
  
}

function modulo1() {
  push();
  translate (-200,-200);
  noStroke ();
  fill (0,100,95);
  triangle (0,0,100,0,100,100);
  triangle (0,100,0,200,100,100);
  triangle (0,300,100,200,100,300);
  triangle (0,400,100,400,0,300);
  triangle (100,100,200,100,200,0);
  triangle (100,100,100,200,200,200);
  triangle (200,200,100,200,100,100);
  triangle (100,200,200,200,200,300);
  triangle (100,300,100,400,200,300);
  triangle (200,0,300,0,300,100);
  triangle (200,100,200,200,300,100);
  triangle (300,200,300,300,200,300);
  triangle (200,300,200,400,300,400);
  triangle (400,0,400,100,300,100);
  triangle (300,100,300,200,400,200);
  triangle (400,200,300,200,400,300);
  triangle (300,300,400,300,300,400);
  noStroke ();
  fill (100,0,40);
  triangle (10,100,60,100,10,50);
  triangle (100,10,100,60,150,10);
  triangle (210,50,210,100,260,100);
  triangle (300,10,300,60,350,10);
  triangle (100,190,100,140,50,190);
  triangle (190,100,140,100,190,150);
  triangle (300,140,300,190,250,190);
  triangle (390,100,390,150,340,100);
  triangle (0,210,50,210,0,260);
  triangle (110,250,110,300,160,300);
  triangle (250,210,200,210,200,260);
  triangle (310,300,310,250,360,300);
  triangle (40,300,90,300,90,350);
  triangle (200,390,150,390,200,340);
  triangle (240,300,290,300,290,350);
  triangle (400,340,400,390,350,390);
  noStroke ();
  fill (0,161,159);
  triangle (100,10,100,60,50,10);
  triangle (190,100,190,50,140,100);
  triangle (300,10,250,10,300,60);
  triangle (390,50,390,100,340,100);
  triangle (10,100,10,150,60,100);
  triangle (100,140,100,190,150,190);
  triangle (210,100,210,150,260,100);
  triangle (300,140,300,190,350,190);
  triangle (90,300,90,250,40,300);
  triangle (200,210,150,210,200,260);
  triangle (290,300,290,250,240,300);
  triangle (350,210,400,210,400,260);
  triangle (0,390,0,340,50,390);
  triangle (110,300,160,300,110,350);
  triangle (200,340,200,390,250,390);
  triangle (310,300,360,300,310,350);
  pop();
}


 function modulo2() { 
  push();
  translate (-200,-200);
  noStroke()
  fill (100,0,40);
  triangle (200,200,200,300,250,250);
  triangle (200,100,200,200,250,150);
  triangle (300,200,250,150,250,250);
  triangle (150,150,200,200,150,250);
  triangle (250,350,300,300,300,400);
  triangle (150,350,100,300,100,400);
  triangle (50,150,0,200,50,250);
  triangle (100,100,100,0,150,50);
  triangle (350,150,350,250,400,200);
  triangle (300,100,300,0,250,50);
  fill (0,161,159);
  triangle (200,200,200,300,150,250);
  triangle (200,100,150,150,200,200);
  triangle (200,200,250,150,250,250);
  triangle (100,200,150,150,150,250);
  triangle (300,300,300,400,350,350);
  triangle (100,300,50,350,100,400);
  triangle (100,200,50,150,50,250);  
  triangle (50,50,100,100,100,0);
  triangle (300,200,350,250,350,150);
  triangle (300,100,350,50,300,0); 
  fill (0,100,95)
  triangle (300,0,350,50,400,0);
  triangle (300,400,350,350,400,400);
  triangle (100,400,150,350,200,400);
  triangle (100,0,150,50,200,0);
  triangle (0,200,50,250,0,300);
  quad (300,200,300,300,400,400,400,300);
  triangle (400,100,400,200,350,150);
  quad (0,0,0,100,100,200,100,100);
  quad (200,0,200,100,300,200,300,100);
  quad (100,200,100,300,200,400,200,300);
  pop ();
}
   
   