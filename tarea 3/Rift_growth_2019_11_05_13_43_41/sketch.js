  function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  
  push();
  translate(30, 80);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(0,100,100, 100, 100, 0, 0, 40, 50);
  pop();
  
  push();
  translate(76, 115);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(50,10,100, 100, 100, 0, -20, 10,0);
  pop();
 
   push();
  translate(76, 115);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(100,10,800, 100, 10, 0, -50, 20, -10);
  pop();
  
   push();
  translate(-76, -230);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(70,10,40, 100, 100, 50, 0, 30, 10);
  pop();
  
   push();
  translate(76, 115);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(50,10,100, 300, 300, 0, 10, 0, 0);
  pop();
  
   push();
  translate(76, 115);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(500,10,100, 200, 200, 0, 100, 20, 10);
  pop();
  
  push();
  translate(20, -115);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(400,90,10, 100, 20, 100, 100, 40, 40);
  pop();
  
  push();
  translate(-250, 150);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(500,10,100, 200, 200, 0, 0, 10, 40);
  pop();
  
  push();
  translate(230, -250);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2(500,10,100, 200, 200, 0, -40, 80, 30);
  pop();
}

function BlancaSistek2(r,g,b, r2, g2, b2, espacio,tam,tam2) {
  push();
  translate(-50,-50);
  //background(255);
  fill(r,g,b)
  noStroke();
  triangle(20, 85, 58, -30, 96-tam, 85-tam);
  fill(r2, g2, b2)
  noStroke();
  triangle(20+espacio, 85, 20+espacio, -30, 58+espacio, -30);
  fill(200,60,50)
  noStroke();
  triangle(58, -30, 96, 85, 96+tam2, -30+tam2);
  fill(255)
  noStroke();
  triangle(42, 20, 75, 20, 59, 85);
}
