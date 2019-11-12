function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(36,56,141);//azulclaro
  noStroke();
  fill(15, 13, 29); //negro
  quad(400,0, 180, 400, 0, 400, 220, 0);// figuravertical
  fill(227, 32, 133); //rosado
  quad(0, 0, 400, 220, 400, 400, 0, 180);//figurahorizontal
  fill(223,9,24) //rojo
  quad(169, 93, 308, 169, 230, 306, 93, 232);//cuadrado
  fill(37,38,85)//azul
  triangle(0,0, 220, 0, 169, 93);//triangulo de arriba
  triangle(180, 400, 400, 400, 230, 307 );//triangulo de abajo
  fill(235,91, 43)
  quad(308, 169, 230, 307, 400,400,400,220)
  
  
  
}