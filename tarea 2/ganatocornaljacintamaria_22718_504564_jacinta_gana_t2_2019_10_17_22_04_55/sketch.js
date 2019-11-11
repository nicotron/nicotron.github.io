function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(225, 225, 225);
  
  push();
  scale(0.5)
 jacinta ();
  pop();
  
   push();
  translate(400, 100)
  scale(0.5)
  rotate(radians(90));
 jacinta ();
  pop();
  
   push();
  translate(100, 200)
  rotate(radians(90))
  scale(0.25)
 jacinta ();
  pop();
  
   push();
  translate(200, 200)
  rotate(radians(90))
  scale(0.25)
 jacinta ();
  pop();
  
   push();
  translate(200, 300)
  scale(0.25)
 jacinta ();
  pop();
  
    push();
  translate(300, 300)
  scale(0.25)
 jacinta ();
  pop();
  
  
  push();
  translate(200, 0)
  scale(0.25)
 jacinta2 ();
  pop();
  
  
  push();
  translate(300, 0)
  scale(0.25)
 jacinta2 ();
  pop();
  
  
  
  push();
  translate(0, 300)
  scale(0.5)
 jacinta2 ();
  pop();
  
   push();
  translate(00, 300)
  scale(0.25)
  jacinta2 ();
  pop();
  
  
}

  function jacinta(){
fill(17, 28, 175)
  noStroke()
  triangle(0, 0, 0, 400, 100, 200)
  triangle(0, 0, 400, 0, 200, 100)
  triangle(400, 0, 400, 400, 300, 200)
  triangle(0, 400, 400, 400, 200, 300)
    fill(233, 22, 140)
  triangle(200, 100, 200, 300, 100, 200)
  fill(255, 255, 255)
   triangle(300, 200, 200, 100, 200, 300)
  }

function jacinta2 (){
   noStroke();
  fill(17, 28, 175);
 square(0, 0, 400);
   fill(220, 10, 34);
  quad(0, 50, 0, 100, 100, 0, 50, 0);
  quad(0, 100, 0, 150, 50, 200, 100, 200)
quad(0, 250, 0, 300, 100, 200, 50, 200);
  quad(0, 300, 0, 350, 50, 400, 100, 400)
  triangle(150, 0, 200, 0, 200, 50)
  triangle(200, 150, 150, 200, 200, 250)
  triangle(150, 400, 200, 400, 200, 350)
  quad(200, 50, 200, 100, 300, 0, 250, 0)
  quad(200, 100, 300, 200, 250, 200, 200, 150);
  quad(200, 250, 250, 200, 300, 200, 200, 300);
  quad(200, 300, 300, 400, 250, 400, 200, 350)
  triangle(350, 0, 400, 0, 400, 50)
  triangle(400, 250, 400, 150, 350, 200)
  triangle(400, 350, 400, 400, 350, 400)
  
  fill(255, 255, 255)
  triangle(0, 100, 100, 0, 100, 200)
  triangle(100, 50, 150, 100, 100, 150)
  triangle(300, 0, 200, 100, 300, 200)
  triangle(300, 50, 350, 100, 300, 150);
  triangle(0, 300, 100, 200, 100, 400);
  triangle(300, 200, 200, 300, 300, 400) 
  triangle(300, 250, 350, 300, 300, 350)
  triangle(100, 250, 150, 300, 100, 350)
  
  fill(233, 22, 140)
  triangle(50, 100, 100, 50, 100, 150)
  quad(100, 50, 100, 0, 200, 100, 150, 100)
  quad(100, 150, 100, 200, 200, 100, 150, 100)
 triangle(100, 250, 100, 350, 50, 300)
  quad(100, 200, 100, 250, 150, 300, 200, 300)
  quad(100, 350, 100, 400, 200, 300, 150, 300)
  triangle(250, 100, 300, 50, 300, 150)
  quad(300, 0, 300, 50, 350, 100, 400, 100)
  quad(300, 150, 300, 200, 400, 100, 350, 100)
  triangle(250, 300, 300, 250, 300, 350)
  quad(300, 250, 300, 200, 400, 300, 350, 300)
  quad(300, 350, 300, 400, 400, 300, 350, 300)
}