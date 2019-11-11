
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
 background(243,240,7);
  
    push();
  translate(0 ,0)
  scale(0.2)
  rotate(0);
  rectangulo(520,520,1245,985,13,15, 204, 243,13,13);
    pop();
  
  
     push();
  translate(0 ,0)
  scale(0.2)
  rotate(0);
  rectangulo(520,520,200,405, 13,15, 204, 243,13,13)
    
}
  
 function rectangulo(tam, tam2,espacio1, espacio2, r, g, b, r2, g2, b2){
  // parámetros de mi f(X) (tam, tam2, espacio, r,g, b, r2, g2, b2)
   
// 1 rectangulo rosado
  fill(r, g, b)
// rect (desplX, desplY, ancho, alto)
  rect(0+espacio1,0+espacio2,tam,tam2) 
   
//2 rectangulo
  fill(r2,g2,b2);
  rect(espacio2,espacio1,tam,tam2)

   
 
  

}






