function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
   background(170);
  
  push();
  translate(200,200);
  scale(1/5);
  //original
  modulo(0,161,159,0,120,119,0,0,0)
  pop();
  
  
  push();
  translate(40,40);
  scale(1/5);
  //cafes
  modulo(160,80,0,140,60,0,205,100,150);
  pop();
  
  push();
  translate(220,40);
  rotate(180);
  scale(1/5);
  //verdes
  modulo(62,67,53,42,47,33,100,100,50);
  pop();
  
  push();
  translate(360,40);
  rotate(180);
  scale(1/5);
  //grises
  modulo(106,106,107,86,86,87,200,100,200);
  pop();
  
  push();
  translate(40,120);
  scale(1/5);
  rotate(90);
  //verdes
  modulo(62,67,53,42,47,33,100,100,50);
  pop();
  
  push();
  translate(120,120);
  rotate(90);
  scale(1/5);
  //grises
  modulo(106,106,107,86,86,87,205,100,150);
  pop();
  
  push();
  translate(200,120);
  scale(1/5);
  rotate(90);
  //cafes
  modulo(160,80,0,140,60,0,20,1,20);
  pop();
  
  push();
  translate(280,120);
  scale(1/5);
  rotate(90);
  //verdes
  modulo(62,67,53,42,47,33,200,100,200);
  pop();
  
  push();
  translate(360,120);
  rotate(90);
  scale(1/5);
  //morados
  modulo(133,109,167,106,83,138,100,100,50);
  pop();
  
    
  push();
  translate(40,280);
  rotate(270);
  scale(1/5);
  //morados
  modulo(133,109,167,106,83,138,205,100,150);
  pop();
  
  push();
  translate(120,280);
  scale(1/5);
  rotate(270);
  //cafes
  modulo(160,80,0,140,60,0,100,100,50);
  pop();
  
  push();
  translate(200,280);
  scale(1/5);
  rotate(270);
  //morados
  modulo(133,109,167,106,83,138,20,1,20);
  pop();
  
  push();
  translate(280,280);
  scale(1/5);
  rotate(270);
  //grises
  modulo(106,106,107,86,86,87,100,100,50);
  pop();
  
  push();
  translate(360,280);
  scale(1/5);
  rotate(270);
  //verdes
  modulo(62,67,53,42,47,33,205,100,150);
  pop();
  
  push();
  translate(40,360);
  scale(1/5);
  rotate(0);
  //grises
  modulo(106,106,107,86,86,87,100,100,50);
  pop();
  
  push();
  translate(160,360);
  rotate(0);
  scale(1/5);
  //cafes
  modulo(160,80,0,140,60,0,200,100,200);
  pop();

  push();
  translate(360,360);
  scale(1/5);
  rotate(180);
  //morados
  modulo(133,109,167,106,83,138,205,100,150);
  pop();
}  
function modulo(r,g,b,r2,g2,b2,espacio,tam,tam2){
  push();
  translate(-200,-200);
  noStroke()
  //COLORCLARO
  fill (r,g,b);
  //tamaño2
  triangle (200,200,200,300,250+tam2,250);
  //tamaño2
  triangle (200,100,200,200,250+tam2,150);
  //espacio eje x
  triangle (300+espacio,200,250+espacio,150,250+espacio,250);
  triangle (150,150,200,200,150,250);
  //espacio eje x
  triangle (250+espacio,350,300+espacio,300,300+espacio,400);
  triangle (150,350,100,300,100,400);
  triangle (50,150,0,200,50,250);
  triangle (100,100,100,0,150,50);
  //espacio eje x
  triangle (350+espacio,150,350+espacio,250,400+espacio,200);
  //espacio eje x
  triangle (300+espacio,100,300+espacio,0,250+espacio,50);
  //ROSADO
  fill (169,22,80);
  triangle (200,200,200,300,150,250);
  triangle (200,100,150,150,200,200);
  //espacio eje x //tamaño
  triangle(250+espacio,150,250+espacio,250,200,200);
  triangle (100,200,150,150,150,250);
  //espacio eje x
  triangle (300+espacio,300,300+espacio,400,350+espacio,350);
  triangle (100,300,50,350,100,400);
  triangle (100,200,50,150,50,250);  
  triangle (50,50,100,100,100,0);
  //espacio eje x
  triangle (300+espacio,200,350+espacio,250,350+espacio,150);
  //espacio eje x
  triangle (300+espacio,100,350+espacio,50,300+espacio,0); 
  //COLOROSCURO
  fill (r2,g2,b2);
  //espacio eje x
  triangle (300+espacio,0,350+espacio,50,400+espacio,0);
  //espacio eje x
  triangle (300+espacio,400,350+espacio,350,400+espacio,400);
  triangle (100,400,150,350,200,400);
  triangle (100,0,150,50,200,0);
  triangle (0,200,50,250,0,300);
  //espacio eje x y tamaño
  quad  (400+espacio,400,300+espacio,300,300+espacio,200,400+espacio+tam,300+tam);
  //espacio eje x
  triangle (400+espacio,100,400+espacio,200,350+espacio,150);
  quad (0,0,0,100,100,200,100,100);
  //espacio eje x //tamaño
  quad(200+espacio,0,300+espacio,100,300+espacio,200,200+tam,100-tam);
  //tamaño
  quad(200,400,100,300,100,200,200+tam,300+tam);
  //BURDEO
  fill (139,10,50);
  triangle (0,0,50,50,100,0);
  //espacio eje x
  triangle(200+espacio,0,300+espacio,0,250+espacio,50);
  triangle(0,400,100,400,50,350);
  //espacio eje x
  triangle(200+espacio,400,300+espacio,400,250+espacio,350);
  triangle(0,100,0,200,50,150);
  //espacio eje x
  triangle(400+espacio,300,400+espacio,200,350+espacio,250);
  //tamaño
  quad(100,200,100,100,200,0,200+tam,100-tam);
  //espacio eje x 
  quad(400+espacio,0,300+espacio,100,300+espacio,200,400+espacio+tam,100-tam);
  quad(100,200,100,300,0,400,0,300);
  //espacio eje x y tamaño
  quad(200+espacio,400,300+espacio,300,300+espacio,200,200+tam,300+tam);
  pop();  
}