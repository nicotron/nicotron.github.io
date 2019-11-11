function setup() {
  createCanvas(400, 400);
}

function draw() {

 background(49,30,56)

  
  push();
  translate(2,2);
  modulo(115,299,2,3,4,255,256,257,180,100);
  pop();
  
}
  function modulo(espacio1,espacio2, color1,color2,color3,color4,color5,color6, tamaño,tamaño2){
  
  
  
  
  fill(49,30,56);
  noStroke();
  square(0,0,400);

 fill(57,220,225);//cyan
  noStroke();
  circle(130, 200, tamaño);//tamaño1
 arc(0,130, 115, 115, HALF_PI+PI,HALF_PI );//MEDIO CIRCULO DERECHO
  arc(0,270, 115, 115, HALF_PI+PI,HALF_PI );

fill(color1,color2,color3);//color vino 
noStroke();
arc(400,0, 115, 115, HALF_PI, PI);
arc(0,0, 115, 115, PI+PI, HALF_PI);
arc(400,400, 115, 115, PI, HALF_PI+PI);
arc(0,400, 115, 115, HALF_PI+PI, TWO_PI);
circle(270, 200, tamaño2);//tamaño2
  arc(400,130, 115, 115, HALF_PI,HALF_PI+PI );//MEDIO CIRCULO IZQUIERDO
circle(130, 200, 55); 
circle(0, 130, 55); 
circle(0, 270, 55);  
  arc(400,270, 115, 115, HALF_PI,HALF_PI+PI );

  
 fill(57,220,225);//cyan
  noStroke();
  circle(400, 130, 55);
  circle(270, 200, 55);
  circle(400, 270, 55);
  
  

  
  
  
  fill(color4,color5,color6);//celeste
  noStroke();
  circle(espacio1, 130, 115);
   arc(270,0, 115, 115, TWO_PI, PI);//MEDIO CIRCULO SUPERIOR
  arc(130,0, 115, 115, TWO_PI, PI);
  
fill(148,101,126);//rosado
  noStroke();
  circle(200, 270, 115);
arc(130,400, 115, 115, PI, TWO_PI);//MEDIO CIRCULO INFERIOR
  arc(270,400, 115, 115, PI, TWO_PI);
  circle(200, 130, 55);
  circle(130, 0, 55);
  circle(270, 0, 55);

   fill(54,168,187);//celeste
  noStroke();
  circle(espacio2, 270, 55);
  circle(270, 400, 55);
  circle(130, 400, 55);
  



}