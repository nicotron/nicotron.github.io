function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(63,34,152);
  
 push();
  translate(0,0)
  scale(0.2)
  rotate(360)
  pelayo();
  pop();
  
   push();
  translate(82,90)
  scale(0.2)
  rotate(90);
  pelayo();
  pop();
  
     push();
  translate(112,165)
  scale(0.2)
  rotate(90);
  pepo();
  pop();
  
      push();
  translate(81,140)
  scale(0.2)
  rotate();
  pepo();
  pop();
  
      push();
  translate(81,140)
  scale(0.2)
  rotate();
  pepo();
  pop();
  
      push();
  translate(286,305)
  scale(0.2)
  rotate();
  pepo();
  pop();
   
       push();
  translate(206,305)
  scale(0.2)
  rotate();
  pepo();
  pop();
  
  

  
       push();
  translate(248,2)
  scale(0.42)
  rotate(90)
  pelayo();
  pop();
  
         push();
  translate(164,170)
  scale(0.42)
  rotate()
  pelayo();
  pop();
  
   push();
  translate(248,3)
  scale(0.42)
  rotate(360)
  pelayo();
  pop();
  
         push();
  translate(160,233)
  scale(0.42)
  rotate(90)
  pelayo();
  pop();
  
}

function pelayo(){
  fill(0,0,0)
  rect(100,0,100,400)
  rect(300,0,100,400)
  fill(47,11,113);
  quad(400,300,300,400,200,300,300,200)
  quad(0,0,100,0,200,110,100,110)
}
  
 function pepo(){
 fill(0,0,0);
//rect(x, y, ancho, alto); 
  
  rect(0,400,400,80) 
  rect(0,150,400,80)
  fill(47,11,113);

}






