function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245,0,0);
 
  fill(210,0,50);
  noStroke();
  rect(0, 0, 400, 55);  
  rect(0,100,400,55);
  rect(0,200,400,55);
  rect(0,300,400,55);
  
  


  push();
  scale(0.28);
 antonia();
  pop();
  
  push();
  translate (285,0)
  scale(0.28)
  antonia();
  pop();
  
  push();
  translate(200,128);
  scale(0.47)
  rotate(radians(45));
  antonia();
  pop();
  
  push();
  translate (200,-50);
  scale(0.48);
  rotate(radians(45));
rebolledo ();
  pop();
  
  push();
  translate(-9,110);
  scale(0.4);
  rebolledo();
  pop();
  
  push();
  translate(246,110);
  scale(0.4);
  rebolledo();
  pop();
  
  push();
  translate(274,250)
  scale(0.36);
  rotate(radians(10));
  rebolledo();
  pop();
  
  push();
  translate(155,388)
  scale(0.36);
  rotate(radians(170));
  rebolledo();
  pop();
  
}

function antonia () {
   
  fill(255,102,40);   
  noStroke()  
  circle (97,105,180)
  circle (305,297,180)
  circle (305,105,180)
  circle (97,297,180)
  
  fill(49,0,180); 
  circle (84, 91, 140)
  circle (292,120, 140)
  circle (108,280,140)
  circle (316, 315,140)
  
  fill(28,0,100) 
  circle (64,76,90) 
  circle (125, 262, 90) 
  circle (335,332,90)
  circle (276,140,90)
  
  fill(15,2,30)
  circle (45,60, 41)
  circle (260,158,41)
  circle (349,352,41)
  circle (141,244,41)
} 

function rebolledo(){
  noStroke()
   fill (255,102,40)
  circle(200,200,170)
  noStroke ()
  
  fill (49,0,180)
  circle(115,200,120)
  circle(285,200,120)
  circle(200,290,120)
  circle(200,110,120)
  
  fill (28,0,100)
  circle (200,315,95)
  circle (200,80,95)
  circle (90,200,95)
  circle (315,200,95)
  
  fill (15,2,30)
  circle (340,200,70)
  circle (65,200,70)
  circle (200,50,70)
  circle (200,340,70)
}