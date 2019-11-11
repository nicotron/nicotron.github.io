function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  //viejo
  push();
  translate(240,60);
  scale(0.20) ;
  rotate(0);
  tarea();
  pop();
   
  //viejo
  push();
  translate(341,179);
  scale(0.20);
  rotate(0);
  tarea();
  pop();
  
  //viejo
  push();
  translate(122,179);
  scale(0.20);
  rotate(0);
  tarea();
  pop();
  
  //viejo
  push();
  translate(21,57);
  scale(0.20);
  rotate(0);
  tarea();
  pop();
  
  //viejo
  push();
  translate(240,300);
  scale(0.20);
  rotate(0);
  tarea();
  pop();
  
  //viejo
  push();
  translate(21,300);
  scale(0.20);
  rotate(0);
  tarea();
  pop();
  
  //viejo
  push();
  translate(341,423);
  scale(0.20);
  rotate(0);
  tarea();
  pop();
  
  //nuevo
  push();
  translate(390,21);
  rotate(radians(90));
  scale(0.20);
  modulo2();
  pop();
  
  //nuevo
  push();
  translate(170,21);
  rotate(radians(90));
  scale(0.20);
  modulo2();
  pop();
  
  //nuevo
  push();
  translate(272,139);
  rotate(radians(90));
  scale(0.20);
  modulo2();
  pop();
  
  //nuevo
  push();
  translate(390,259);
  rotate(radians(90));
  scale(0.20);
  modulo2();
  pop();
  
  //nuevo
  push();
  translate(52,139);
  rotate(radians(90));
  scale(0.20);
  modulo2();
  pop();
  
  //nuevo
  push();
  translate(170,259);
  rotate(radians(90));
  scale(0.20);
  modulo2();
  pop();
  
  //nuevo
  push();
  translate(271,380);
  rotate(radians(90));
  scale(0.20);
  modulo2();
  pop();
  
  //viejo
  push();
  translate(119,423);
  scale(0.20);
  rotate(0);
  tarea();
  pop();
  
  //nuevo
  push();
  translate(50,380);
  rotate(radians(90));
  scale(0.20);
  modulo2();
  pop();
  
  

  
 
}
  
function tarea() {
  push();
  translate(-200,-200);

 fill (225,99,58) ;
  noStroke();
  circle (102,102, 203 );
  circle (299,102,203) ;
  circle (299,299, 203) ;
  circle(102, 299, 203) ;
  fill (205,43,39);
  noStroke();
  circle (102,102,160);
  circle( 299,102,160) ;
  circle(299,299,160);
  circle (102,299,160) ;
  fill (0,29,171) ;
  noStroke();
  circle(102,102,116);
  circle(299,102,116);
  circle(299,299,116);
  circle(102,299,116);
  
  fill(6,8,94);
  noStroke() ;
  circle(102,102,80);
  circle(299,102,80);
  circle(299,299,80);
  circle(102,299,80);
  fill(11,6,29);
  noStroke();
  square(101,102,200);
  square(-94,290,200);
  square(-94,-94,200);
  square(291,-85,200);
  square(295,295,200);
  fill(255,255,255);
  noStroke() ;
  circle(102,299,45);
  circle(102,102,45);
  circle(299,102,45);
  circle(300,300,45);
  
  
  fill(255,99,58);
  noStroke();
  circle(201,202,203);
  circle(5,391,203) ;
  circle(5,5,203);
  circle(392,14,203);
  circle(396,396,203);
  fill(205,43,39);
  noStroke();
  circle(200,203,160);
  circle(5,393,160);
  circle(5,4,160);
  circle(393,15,160);
  circle(398,395,160);
  fill(0,29,171);
  noStroke();
  circle(5,7,116);
  circle(392,18,116);
  circle(397,394,116);
  circle(5,390,116);
  circle(200,204,116);
  fill(6,8,94);
  noStroke();
  circle(5,6,80);
  circle(5,390,80);
  circle(397,392,80);
  circle(392,17,80);
  circle(200,205,80);
  fill(255,255,255);
  noStroke();
  circle(200,205,45);
  circle(5,6,45);
  circle(5,390,45);
  circle(397,392,45);
  circle(392,16,45);
 pop();
}

 function modulo2(){ // modulo nuevo
  
  
  //celeste
  fill(225,99,58);
  noStroke();
  square(-1,16,100);
  square(300,16,100);
  square(-1,150,100);
  square(300,150,100);
  square(300,285,100);
  square(-1,285,100);
  square(150,285,100);
  square(150,150,100);
  square(150,16,100);
  
  
  
  //rosado
  fill(6,8,94);
  noStroke();
  circle(9,66,140);
  circle(9,200,140);
  circle(9,335,140);
  circle(200,66,100); 
  circle(200,200,100);
  circle(200,335,100);
  
  circle(392,66,140);
  circle(392,200,140);
  circle(392,335,140);
  
  //azul
   fill(255,99,58);
  circle(9,66,80); 
  circle(9,200,80);
  circle(9,335,80);
  circle(392,66,80);
  circle(392,200,80);
  circle(392,335,80);
  
  //amarillo
  fill(242,241,184);
  noStroke();
  circle(392,66,40);
  circle(392,200,40);
  circle(392,335,40);
  circle(9,66,40);
  circle(9,200,40);
  circle(9,335,40);
  
  
  //celeste encima
  fill(168,203,219);
  noStroke();
  circle(200,66,50);
  circle(200,200,50);
  circle(200,335,50);
  
  //amarillo encima
  fill(205,43,39);
  noStroke();
  circle(200,200,30);
  circle(200,335,30);
  circle(200,66,30);
  
  //rosado claro
   fill(237,215,234); 
  noStroke();
  circle(116,133,100);
  circle(285,133,100);
  circle(116,268,100);
  circle(285,268,100);
  circle(116,404,100);
  circle(285,404,100);
  circle(116,-1,100);
  circle(285,-1,100);
  
  //azul encima
  fill(0,29,171);
  noStroke();
  circle(116,133,50);
  circle(285,133,50);
  circle(116,268,50);
  circle(285,268,50);
  circle(116,404,50);
  circle(285,404,50);
  circle(116,-1,50);
  circle(285,-1,50);
  circle(200,200,20);
  circle(200,66,20);
  circle(200,335,20);
  circle(9,66,20);
  circle(9,200,20);
  circle(9,335,20);
  circle(392,66,20);
  circle(392,200,20);
  circle(392,335,20);
  
  //amarillo
  fill(242,241,184);
  noStroke();
  circle(116,-1,25);
  circle(285,-1,25);
  circle(285,404,25);
  circle(116,404,25);
  circle(116,133,25);
  circle(285,133,25);
  circle(116,268,25);
  circle(285,268,25);
  }





  
  
  
