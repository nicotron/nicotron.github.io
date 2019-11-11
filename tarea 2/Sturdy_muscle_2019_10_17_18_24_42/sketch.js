function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  
  push();
  translate(100, 175);
  scale(0.5);
  rotate(0);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(30, 80);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(15, 150);
  scale(1);
  rotate(180);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(-5, 95);
  scale(0.5);
  rotate(0);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(-76, 0);
  scale(1);
  rotate(0);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(16, 150);
  scale(1);
  rotate(180);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(65, 137);
  scale(0.5);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(160, 67);
  scale(1);
  rotate(90);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(24, -99);
  scale(0.7);
  rotate(270);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(-277, -42);
  scale(0.7);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(-166, -42);
  scale(0.7);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(-67, -57);
  scale(0.4);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(-4, -57);
  scale(0.4);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(17, 69);
  scale(1);
  rotate(180);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(203, -30);
  scale(1.5);
  rotate(90);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(-15, 130);
  scale(0.5);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(-69, 75);
  scale(1);
  rotate(270);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(192, 9.3);
  scale(0.74);
  rotate(0);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(255, -17);
  scale(0.5);
  rotate(0);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(330, -17);
  scale(0.5);
  rotate(0);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(-56, 329);
  scale(0.52);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(-49, -20);
  scale(0.7);
  rotate(180);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(16, 69);
  scale(1);
  rotate(180);
  //llamo a la funcion
  BlancaSistek2();
  pop();
  
  push();
  translate(258, 543);
  scale(0.4);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(195, 543);
  scale(0.4);
  rotate(90);
  //llamo a la funcion
  BlancaSistek();
  pop();
  
  push();
  translate(154, 499);
  scale(0.75);
  rotate(270);
  //llamo a la funcion
  BlancaSistek2();
  pop();
}
  
function BlancaSistek2() {
  push();
  translate(-50,-50);
  //background(255);
  fill(157, 167, 255)
  noStroke();
  triangle(20, 85, 58, -30, 96, 85);
  fill(257, 167, 255)
  noStroke();
  triangle(20, 85, 20, -30, 58, -30);
  fill(257, 167, 255)
  noStroke();
  triangle(58, -30, 96, 85, 96, -30);
  fill(255)
  noStroke();
  triangle(42, 20, 75, 20, 59, 85);
}


  function BlancaSistek() {
    push();
    translate(-200,-200);
   // background(255);
  fill(157, 167, 255);
  noStroke();
  triangle(0, 80, 75, 120, 150, 80);
  fill(280, 127, 165);
  noStroke();
  triangle(0, 80, 0, 160, 75, 120);
  fill(93, 24, 170);
  noStroke();
  triangle(75, 120, 150, 160, 150, 80);
  fill(93, 24, 170);
  noStroke();
  triangle(0, 160, 0, 240, 75, 200);
  fill(157, 167, 255);
  noStroke();
  triangle(75, 200, 0, 240, 150, 240);
  fill(280, 127, 165);
  noStroke();
  triangle(150, 160, 150, 240, 75, 200);
  pop();
  }
