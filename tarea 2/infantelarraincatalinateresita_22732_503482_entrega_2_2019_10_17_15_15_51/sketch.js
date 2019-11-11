function setup() {
  createCanvas(400, 400);
  background (100)
  angleMode(DEGREES);
}

function draw () { 
  push();
translate(358,42)
scale(0.2);
rotate();
primero();
pop();
  
  push();
   translate (276,42)
   scale(0.2)
   rotate(90)
  segundo();
  pop();

  push();
translate(194,42)
scale(0.2);
rotate();
primero();
pop();
  
  push();
   translate (112,42)
   scale(0.2)
   rotate(90)
  segundo();
  pop();
  
  push();
translate(30,42)
scale(0.2);
rotate();
primero();
pop();
  
   push();
   translate (358,124)
   scale(0.2)
   rotate()
  segundo();
  pop();
  
  push();
translate(276,124)
scale(0.2);
rotate();
primero();
pop();
  
 push();
   translate (194,124)
   scale(0.2)
   rotate()
  segundo();
  pop();
  
  push();
translate(112,124)
scale(0.2);
rotate();
primero();
pop();
  
  push();
   translate (30,124)
   scale(0.2)
   rotate()
  segundo();
  pop();
  
  push();
translate(358,205)
scale(0.2);
rotate();
primero();
pop();

  push();
   translate (276,205)
   scale(0.2)
   rotate(90)
  segundo();
  pop();

  push();
translate(194,205)
scale(0.2);
rotate();
primero();
pop();
  
  push();
   translate (112,205)
   scale(0.2)
   rotate(90)
  segundo();
  pop();
  
  push();
translate(30,205)
scale(0.2);
rotate();
primero();
pop();
  
  push();
   translate (358,286)
   scale(0.2)
   rotate()
  segundo();
  pop();
  
  push();
   translate (276,286)
   scale(0.2)
   rotate()
  primero();
  pop();
  
  push();
   translate (194,286)
   scale(0.2)
   rotate()
  segundo();
  pop();
  
  push();
   translate (112,286)
   scale(0.2)
   rotate()
  primero();
  pop();
  
  push();
   translate (30,286)
   scale(0.2)
   rotate()
  segundo();
  pop();
  
  push();
   translate (358,367)
   scale(0.2)
   rotate()
  primero();
  pop();
  
  push();
   translate (276,367)
   scale(0.2)
   rotate(90)
  segundo();
  pop();
  
  push();
   translate (194,367)
   scale(0.2)
   rotate()
  primero();
  pop();
  
   push();
   translate (112,367)
   scale(0.2)
   rotate(90)
  segundo();
  pop();
  
  push();
   translate (30,367)
   scale(0.2)
   rotate()
  primero();
  pop();
  
}





//funciones abajo
function primero() {
  translate(-200,-200)
  
  fill(0,0,0)
  square (0,0,400)
  fill (13,13,178)
  square (100,100,200)
  
  square (0,0,100)
  square (300,0,100)
  square (0,300,100)
  square (300,300,100)
 
 fill(233,0,22)
  circle(100, 100, 146)
  circle(300, 97, 146)
  circle(97, 300, 146)
  circle(300, 300, 146)
 
  fill(241,90,41)
  noStroke()
  square (100,100,73)
  square (99,227,71)
  square (228,99,72)
  square (227,227,73)
 
square (27,27,73)
square (25,299,75)
square(300,24,73)
square (300,300,73)
}
  

  function segundo() {
  translate (-200, -200)
  fill(37, 193, 48)
square (0,0,400)
    fill(48, 48, 242)
  noStroke()
 circle (200,200,400)
  fill(244,213,10)
  square(0, 0, 200);
  square(200, 200, 200);
  
  }