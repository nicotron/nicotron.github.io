function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); 
}

function draw() {
  background(15, 2, 30);
  
  push()
  translate (125,50)
  rotate (225)
  euge2()
  pop()
  
  push()
   translate (275,50)
  rotate (225)
  euge2()
  pop()
  
   push()
   translate (350,125)
  rotate (135)
  euge2()
  pop()
  
   push()
   translate (200,125)
  rotate (135)
  euge2()
  pop()
  
   push()
   translate (50,125)
  rotate (135)
  euge2()
  pop()
  
   push()
   translate (50,275)
  rotate (135)
  euge2()
  pop()
  
   push()
   translate (200,275)
  rotate (135)
  euge2()
  pop()
  
  push()
   translate (350,275)
  rotate (135)
  euge2()
  pop()
  
  push()
   translate (125,200)
  rotate (225)
  euge2()
  pop()
  
  push()
   translate (275,200)
  rotate (225)
  euge2()
  pop()
  
  push()
   translate (125,350)
  rotate (225)
  euge2()
  pop()
  
  push()
   translate (275,350)
  rotate (225)
  euge2()
  pop()
  
  
  
  
  push ()
  translate (50,50)
  euge1 ()
  pop () 
  
  push()
  translate (125,125)
  euge1 ()
  pop ()
  
  push()
  translate (275,125)
  euge1 ()
  pop()
  
  push ()
  translate (200,50)
  euge1 ()
  pop ()
  
  push()
  translate (125,275)
  euge1 ()
  pop ()
  
  push()
  translate (275,275)
  euge1 ()
  pop()
            
  push ()
  translate (350,50)
  euge1 ()
  pop ()
  
  
  
  
  push ()
  translate (50,200)
  euge1 ()
  pop ()
  
  push()
  translate (200,200)
  euge1()
  pop()
  
  push()
  translate(350,200)
  euge1()
  pop()
  
  push()
  translate (50,350)
  euge1()
  pop()
  
  push()
  translate(200,350)
  euge1()
  pop()
  
  push()
  translate (350,350)
  euge1()
  pop()
  
}

function euge2 (){
    scale (0.2)
    push ()
   translate (-200,-200)
  noStroke()
  fill (255)
  circle (200,200,195)
  fill(255)
  circle (320,320,50)
  fill (255)
  circle (80,80,50)
  fill (231,105,24)
  circle (320,320,30)
fill (245,0,0)
  circle (80,80,30)
  fill (255)
  circle (280,280,95)
  fill (255,0,133)
  circle (280,280,50)
  fill (28, 0, 100)
  circle (200,200, 170);
  fill (49,0,180)
  circle (200,200,95)
  fill (255)
  circle (120,120,95)
  fill (255,0,133)
  circle (120,120,50)
  pop()
}
  
    
  
  


 function euge1 () {
   push ()
    scale (0.2)
translate (-200,-200)
    noStroke();
  fill(28, 0, 100);
  circle(60, 60, 110);
  fill(49, 0, 180);
  circle(75, 75, 110);
  fill(245,0, 0);
  circle(90, 90, 110);
  fill(231, 105, 24);
  circle(105, 105, 110);
  fill(225,0, 133);
  circle(120, 120, 110);
  fill(225);
  circle(135, 135, 110);
  fill(28, 0, 100);
  circle(265, 135, 110)
  fill(49, 0, 180);
  circle(280, 120, 110);
  fill(245,0, 0);
  circle(295, 105, 110);
  fill(231, 105, 24);
  circle(310, 90, 110);
  fill(225,0, 133);
  circle(325, 75, 110);
  fill(225);
   circle(340, 60, 110);
  fill(28, 0, 100);
  circle(135, 265, 110);
  fill(49, 0, 180);
  circle(120, 280, 110);
  fill(245,0, 0);
  circle(105, 295, 110);
  fill(231, 105, 24);
  circle(90, 310, 110);
  fill(225,0, 133);
  circle(75, 325, 110);
  fill(225);
  circle(60, 340, 110);
  fill(28, 0, 100);
  circle(340, 340, 110);
  fill(49, 0, 180);
  circle(325, 325, 110);
  fill(245,0, 0);
  circle(310, 310, 110);
  fill(231, 105, 24);
  circle(295, 295, 110);
  fill(225,0, 133);
  circle(280, 280, 110);
  fill(225);
  circle(265, 265, 110);
  pop ()
}
