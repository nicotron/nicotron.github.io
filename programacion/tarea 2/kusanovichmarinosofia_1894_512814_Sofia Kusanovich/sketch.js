function setup() {
  createCanvas(400, 400);
 // angleMode(DEGREES)
}

function draw() {
    background(239,91,52);
  
push();
  translate(300,300)
  scale(0.25)
  rotate(0)
  rotate(radians(0));
  //llamo a la funcion
Sofia();
pop();
  
  push();
  translate(300,200)
  scale(0.25)
  kusa();
  pop();
  
  push();
  translate(300,100)
  scale(0.25)
  rotate(0)
  rotate(radians(0));
  //llamo a la funcion
Sofia();
  pop();
  
   push();
  translate(300,0)
  scale(0.25)
  kusa();
  pop();
  
  push();
  translate(100,200)
  scale(0.5)
  kusa();
  pop();
  
  push();
  translate(0,0)
  scale(0.5)
  rotate(0)
  rotate(radians(0));
  //llamo a la funcion
Sofia();
  pop();
  
  push();
  translate(0,300)
  scale(0.25)
  rotate(0)
  rotate(radians(0));
  //llamo a la funcion
Sofia();
  pop();
  
  push();
  translate(0,200)
  scale(0.25)
  kusa();
  pop();
  
   push();
  translate(200,0)
  scale(0.25)
  rotate(0)
  rotate(radians(0));
  //llamo a la funcion
Sofia();
  pop();
  
   push();
  translate(200,100)
  scale(0.25)
  kusa();
  pop();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function Sofia (){
  noStroke(); // para quitarle la linea

  line(200,0, 200,400);
  line(0, 200, 400, 200);
  fill(17, 28, 175);
  quad(160, 0, 200, 0,0,200,0 ,160 );
  quad(200,80,200,120,120,200,80,200)
  quad(40,200,80,200,200,320,200,360)
  quad(0,320,80,400,40,400,0,360)
  quad(200,120,280,200,240,200,200,160)
  quad(280,0,400,120,400,160,240,0)
  quad(360,200,400,200,200,400,200,360) 
  quad(400,280,400,320,320,400,280,400)
  fill(233,22,140)
  quad(80,0,120,0,0,120,0,80)
  quad(200,0,200,40,40,200,0,200)
  quad(120,200,160,200,200,240,200,280)
  quad(0,240,160,400,120,400,0,280)
  quad(320,0,360,0,400,40,400,80)
  quad(200,40,360,200,320,200,200,80)
  quad(280,200,320,200,200,320,200,280)
  quad(400,200,400,240,240,400,200,400)
  fill(0,2,52)
  quad(40,0,80,0,0,80,0,40)
  quad(200,40,200,80,80,200,40,200)
  quad(0,200,40,200,200,360,200,400)
  quad(0,280,120,400,80,400,0,320)
  quad(200,0,240,0,400,160,400,200)
  quad(200,80,320,200,280,200,200,120)
  quad(240,200,280,200,200,280,200,240)
  quad(400,240,400,280,280,400,240,400)
  fill(17,28,175)
  triangle(0, 40, 0, 0, 40, 0);
  triangle(200, 240, 200, 200, 240, 200)
  fill(233,22,140)
  triangle(200,160,200,200,160,200)
  triangle(400,360,400,400,360,400)
  fill(0,2,52)
  triangle(360, 0, 400, 0, 400, 40);
  triangle(160, 200, 200, 200, 200,240);

  quad(360,200,400,200,200,400,200,360) ;
}

 function kusa(){
    noStroke(); // para quitarle la linea
  line(200,0, 200,400);
  line(0, 200, 400, 200);
  fill(17,28,175);//azul claro
rect(0, 200, 40, 200);
rect(160, 200, 40, 200);
rect(240, 200, 40, 200);
  fill(0,2,52)//morado
  rect(40,200,40,200)
  rect(200,200,40,200)
rect(360, 200, 40, 200);
  fill (233,22,140)//rosado
rect(80, 200, 40, 200);
  rect(280, 200, 40, 200);
  fill(17,28,175)
  rect(40, 0, 40, 200);
  rect(320, 0, 40, 200);
  fill(0,2,52)
  rect(80, 0, 40, 200);
  rect(240,0,40,200)
  fill(233,22,140)
  rect(120,0,40,200)
  rect(360,0,40,200)
  rect(200,0,40,200)
  fill(239,91,52)
  rect(0,0,40,200)
  rect(160,0,40,200)
  fill(233,22,140)
  circle(300, 300, 120);
fill(0,2,52)
  circle(100, 100, 120);
  fill(233,22,140)
  circle(100, 300, 120);
  fill(239,91,52)
  circle(300,100,120)
    
}
