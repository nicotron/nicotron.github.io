function setup() {
  createCanvas(400, 400);
 angleMode (DEGREES);
 }

function draw() { 
  background(98,91,117);
  

  
  push();
  translate(350,350);
  scale(1/4);
  modulo2 (0,1,52,238,235,194,40,20,10);
  pop();
  
    push();
  translate(250,250);
  scale(1/4);
  //modulo2 (1,82,138,139,191,169,10,20,30);
  pop();
  
    push();
  translate(250,350);
  scale(1/4);
  modulo2 (165,167,173,0,1,52,20,50,20);
  pop();
  
    push();
  translate(150,350);
  scale(1/4);
  modulo2 (0,82,138,0,0,24,40,50,10);
  pop();
  
    push();
  translate(150,250);
  scale(1/4);
  //modulo2 (238,235,194,0,1,52,10,50,30);
  pop();
  
     push();
  translate(50,350);
  scale(1/4);
  modulo2 (198,215,160,198,190,169,20,50,20);
  pop();
  
     push();
  translate(50,250);
  scale(1/4);
  modulo2 (0,1,52,238,235,194,40,50,10);
  pop();
  
    push();
  translate(350,250);
  scale(1/4);
  modulo2 (198,215,160,0,1,51,20,20,30);
  pop();
  
   push();
  translate(50,150);
  scale(1/4);
  modulo2 (1,82,138,238,235,194,10,20,20);
  pop();
  
  
   push();
  translate(150,150);
  scale(1/4);
  //modulo2 (198,215,160,199,191,169,40,20,10);
  pop();
  
  
   push();
  translate(150,50);
  scale(1/4);
  modulo2 (165,167,173,0,1,52,10,20,20);
  pop();
  
      push();
  translate(250,150);
  scale(1/4);
  //modulo2 (165,167,173,1,82,138,20,50,30);
  pop();
  
  push();
  translate(350,150);
  scale(1/4);
  modulo2 (0,1,52,238,235,194,40,50,10);
  pop();
  
   push();
  translate(250,50);
  scale(1/4);
  modulo2 (238,235,194,1,82,138,10,50,20);
  pop();
  
    push();
  translate(350,50);
  scale(1/4);
  modulo2 (1,82,138,0,1,52,20,50,30);
  pop();
  
  
   push();
  translate(50,50);
  scale(1/4);
  modulo2 (198,215,160,0,1,52,30,50,10);
  pop();
  
     
  push();
  translate(200,200);
  scale(1/2);
  modulo2 (0,1,52,238,235,194,0,0,0);
  pop();
  
  }

   
  function modulo2(r,g,b,r2,g2,b2,espacio,tam,tam2){
  push();
  translate(-200,-200);
  noStroke ();
  fill (r,g,b );
  triangle (0+espacio,0,200+espacio,0,0+espacio,200);
  triangle (200,0,400,0,400,200);
  triangle (0,200,0,400,200+tam,400+tam);
  triangle (400,400,400,200,200,400);
  fill (43,78,102);
  triangle (0,0,0,120,120,0);
  triangle (0,400,0,280,120,400);
  triangle (400,0,400,120,280,0);
  triangle (400,400,400,280,280,400);
  fill (r2,g2,b2);
  triangle (0,0,0,40,40,0);
  triangle (400,400,400,360,360,400);
  triangle (400,0,400,40,360,0);
  triangle (0,400,40,400,0,360);
  fill (43,78,102);
  quad (100,100,300,100,300-tam2,300-tam2,100-tam2,300-tam2);
  fill (51,33,51);
  quad (140,140,260,140,260,260,140,260);
  fill (148,217,224);
  quad (180,180,220,180,220,220,180,220);
  pop();
    
  }
