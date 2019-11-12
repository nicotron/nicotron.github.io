
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  
background(220);
  push();
  translate(120, 280);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
    
  push();
  translate(120, 240);
  scale(0.10);
  rotate();
  sebastian();
  pop();
    push();
  translate(120, 200);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
  push();
  translate(200, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  

   push();
  translate(200, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
    
  push();
  translate(160, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
 push();
  translate(240, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
  push();
  translate(0, 80);
  scale(0.3);
  rotate();
  sebastian();
  pop();
  
  push();
  translate(300, 140);
  scale(0.10);
  rotate();
  camila();
  pop();
  
   push();
  translate(300, 100);
  scale(0.10);
  rotate();
  camila();
  pop();
  
   push();
  translate(300, 60);
  scale(0.10);
  rotate();
  camila();
  pop();
  
 push();
  translate(300, 20);
  scale(0.10);
  rotate();
  camila();
  pop();

 //esquina izquierda abajo
  push();
  translate(60, 260);
  scale(0.30);
  rotate();
  camila();
  pop();
  
 
  
 //este no
  push();
  translate(160, 280);
  scale(0.3);
  rotate();
  sebastian();
  pop();
  

  
  //este no
  push();
  translate(160, 40);
  scale(0.3);
  rotate();
  sebastian();
  pop();
  


  //al medio
  push();
  translate(220, 220);
  scale(0.30);
  rotate();
  camila();
  pop();
  
  //esquina izquierda derecha
  push();
  translate(40, 40);
  scale(0.20);
  rotate();
  camila();
  pop();
  
  //esquina derecha abajo
   push();
  translate(340, 340);
  scale(0.30);
  rotate();
  camila();
  pop();
  
  //esquina izquierda abajo
  push();
  translate(40, 360);
  scale(0.20);
  rotate();
  camila();
  pop();
  
  //esquina derecha arriba
  push();
  translate(360, 40);
  scale(0.20);
  rotate();
  camila();
  pop();
  
  push();
  translate(120, 40);
  scale(0.20);
  rotate();
  camila();
  pop();
   push();
  //este no
  translate(280, 160);
  scale(0.3);
  rotate();
  sebastian();
  pop();
  
  push();
  translate(80, 320);
  scale(0.2);
  rotate();
  sebastian();
  pop();
  
  push();
  translate(140, 100);
  scale(0.10);
  rotate();
  camila();
  pop();
  
  push();
  translate(140, 140);
  scale(0.10);
  rotate();
  camila();
  pop();
  
  push();
  translate(140, 180);
  scale(0.10);
  rotate();
  camila();
  pop();
  
  push();
  translate(200, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
    
  push();
  translate(160, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
 push();
  translate(240, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
    
  
  push();
  translate(320, 80);
  scale(0.2);
  rotate();
  sebastian();
  pop();

    push();
  translate(200, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
    
  push();
  translate(160, 0);
  scale(0.10);
  rotate();
  sebastian();
  pop();
  
} 

function camila() {
  push();
  translate(-200,-200);
  angleMode(RADIANS);

fill(49,30,56)//fondo 
  noStroke();
  square(0,0,400)
  
  
  fill(54,168,181)//celeste claro
  noStroke()
arc(80, 80, 115, 115, PI, HALF_PI+PI);
  arc(80, 313, 115, 115, HALF_PI, PI);
  arc(312, 313, 115, 115, TWO_PI, HALF_PI);
  arc(312, 80, 115, 115, HALF_PI+PI, TWO_PI);//CUARTO CIRCULO DERECHO SUPERIOR
  
  
  fill(57,220,225)//cyan
  noStroke()
  arc(80, 80, 55, 55, PI, HALF_PI+PI);
  arc(80, 138, 115, 115, PI, HALF_PI+PI);
    arc(138, 80, 115, 115, PI, HALF_PI+PI);//cuarto circulo grande izquierdo superior
  arc(138, 138, 115, 115, PI, HALF_PI+PI);
  arc(80, 254, 115, 115, HALF_PI, PI);// CUARTO CIRCULO IZQUIERDO INFERIOR
arc(138, 254, 115, 115, HALF_PI, PI);
  arc(138, 313, 115, 115, HALF_PI, PI);
  arc(80, 313, 55, 55, HALF_PI, PI);
  arc(254, 313, 115, 115, TWO_PI, HALF_PI);//cuarto circulo grande DERECHO INFERIOR
  arc(254, 254, 115, 115, TWO_PI, HALF_PI);
  arc(312, 254, 115, 115, TWO_PI, HALF_PI);
  arc(313, 313, 55, 55, TWO_PI, HALF_PI);
  arc(254, 80, 115, 115, HALF_PI+PI, TWO_PI);
  arc(254, 138, 115, 115, HALF_PI+PI, TWO_PI);
  arc(313, 138, 115, 115, HALF_PI+PI, TWO_PI);
  arc(312, 80, 55, 55, HALF_PI+PI, TWO_PI);
 
  
  fill(148,6,72)//vino
  noStroke()
   arc(80, 138, 55, 55, PI, HALF_PI+PI);
   arc(80, 196, 115, 115, HALF_PI,HALF_PI +PI);
  arc(138, 138, 55, 55, PI, HALF_PI+PI);//cuarto circulo pequeño izquierdo superior
  arc(138, 80, 55, 55, PI, HALF_PI+PI);
  arc(138, 196, 115, 115, HALF_PI,HALF_PI +PI);// medio circulo izquierdo
  arc(196, 80, 115, 115, PI,HALF_PI+PI+QUARTER_PI+QUARTER_PI);//MEDIO CIRCULO ACOSTADO
  arc(196, 138, 115, 115, PI,HALF_PI+PI+QUARTER_PI+QUARTER_PI);
  arc(196, 196,115, 115, PI,PI); //CIRCULO
  arc(80, 254, 55, 55, HALF_PI, PI);
  arc(138, 313, 55, 55, HALF_PI, PI);
  arc(138, 254, 55, 55, HALF_PI, PI);
  arc(196, 254, 115, 115, TWO_PI,PI);//MEDIO CIRCULO ACOSTADO ABAJO
  arc(196, 313, 115, 115, TWO_PI,PI);
  arc(254, 313, 55, 55, TWO_PI, HALF_PI);
  arc(254, 254, 55, 55, TWO_PI, HALF_PI);
  arc(313, 254, 55, 55, TWO_PI, HALF_PI);
  arc(313, 196, 115, 115, HALF_PI + PI,HALF_PI );// MEDIO CIRCULO DERECHO
  arc(254, 196, 115, 115, HALF_PI + PI,HALF_PI );
   arc(254, 80, 55, 55, HALF_PI+PI, TWO_PI);
  arc(254, 138, 55, 55, HALF_PI+PI, TWO_PI);
  arc(313, 138, 55, 55, HALF_PI+PI, TWO_PI);
  
  
  fill(184,101,126)//naranjo
  noStroke()
  arc(80, 196, 55, 55, HALF_PI,HALF_PI +PI);
  arc(138, 196, 55, 55, HALF_PI,HALF_PI +PI); //medio circulo izquierdo
  arc(196, 80, 55, 55, PI,HALF_PI+PI+QUARTER_PI+QUARTER_PI);
  arc(196, 138, 55, 55, PI,HALF_PI+PI+QUARTER_PI+QUARTER_PI);
  arc(196, 196,55, 55, PI,PI);
  arc(196, 313, 55, 55, TWO_PI,PI);
   arc(196, 254, 55, 55, TWO_PI,PI);//MEDIO CIRCULO PEQUEÑO ABAJO
  arc(313, 196, 55, 55, HALF_PI + PI,HALF_PI );// MEDIO CIRCULO DERECHO
  arc(254, 196, 55, 55, HALF_PI + PI,HALF_PI );
  
  pop();
}
function sebastian(){
   fill(49,30,56);
  noStroke();
  square(0,0,400);

 fill(57,220,225);//cyan
  noStroke();
  circle(130, 200, 115);
 arc(0,130, 115, 115, HALF_PI+PI,HALF_PI );//MEDIO CIRCULO DERECHO
  arc(0,270, 115, 115, HALF_PI+PI,HALF_PI );

fill(148,6,72);//color vino 
noStroke();
arc(400,0, 115, 115, HALF_PI, PI);
arc(0,0, 115, 115, PI+PI, HALF_PI);
arc(400,400, 115, 115, PI, HALF_PI+PI);
arc(0,400, 115, 115, HALF_PI+PI, TWO_PI);
circle(270, 200, 115);
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
  
  

  
  
  
  fill(54,168,187);//celeste
  noStroke();
  circle(200, 130, 115);
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
  circle(200, 270, 55);
  circle(270, 400, 55);
  circle(130, 400, 55);
}
