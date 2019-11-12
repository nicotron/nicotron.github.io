function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  scale(1.3);
  vero2(100,8,160,75,80,20,155,135,18);
}


function vero2(tam1, tam2,espacio,R1,G1,B1,R2,G2,B2) {
stroke(35,38,81);
fill(35,38,81);
square(30, 20, tam1);
stroke(35,38,81);
fill(35,38,81);
square(30, 90, 55);
stroke(35,38,81);
fill(35,38,81);
square(30, 160, 55); 
stroke(35,38,81);
fill(35,38,81);
square(30, 230, 55); 
 stroke(35,38,81);
fill(35,38,81);
square(100, 20, 55);
                     stroke(R2,38,81);
                     fill(R2,38,81);
square(100, 90, 55);
stroke(35,38,81);
fill(35,38,81);
square(100, 160, 55); 
stroke(35,38,81);
fill(35,38,81);
square(100, 230, 55); 
stroke(35,38,81);
fill(35,38,81);
square(170, 20, 55);
stroke(35,38,81);
fill(35,38,81);
square(170, 90, 55);
stroke(35,38,81);
fill(35,38,81);
square(170, 160, 55); 
stroke(35,38,81);
fill(35,38,81);
square(170, 230, 55); 
                       stroke(35,G1,81);
                       fill(35,G1,81);
square(240, 20, 55);
stroke(35,38,81);
fill(35,38,81);
square(240, 90, 55);
                       stroke(35,G2,81);
                       fill(35,G2,81);
square(240, 160, 55); 
stroke(35,38,81);
fill(35,38,81);
square(240, 230, 55);
//circulos//
  stroke(216,51,138);
  fill(216,51,138);
  circle(57, 47, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(127, 47, 40);
                       stroke(216,51,B2);
                       fill(216,51,B2);
  circle(197, 47, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(267, 47, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(57, 117, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(espacio, 117, 40);
                   stroke(R1,51,138);
                   fill(R1,51,138);
  circle(197, 117, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(267, 117, 40);
  stroke(216,51,138);
  fill(216,51,138);
  circle(57, 187, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(127, 187, 40);
  stroke(216,51,138);
  fill(216,51,138);
  circle(197, 187, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(267, 187, 40);
                        stroke(216,51,B1);
                        fill(216,51,B1);
  circle(57, 257, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(127, 257, 40);
  stroke(216,51,138);
  fill(216,51,138);
  circle(197, 257, 40);
   stroke(216,51,138);
  fill(216,51,138);
  circle(267, 257, tam2);
  
}