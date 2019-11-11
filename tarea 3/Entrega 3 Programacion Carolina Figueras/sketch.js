function setup() {
  createCanvas(400, 400);

}


function draw() {
  background(240);

  carolina(200, 100, 100, 200, 138, 180, 187, 160, 140, 179);

}



function carolina(tam1, tam2, espacio, R1, G1, B1, R2, G2, B2) {

  stroke(255, 255, 255);
  fill(R1, G1, B1); // blanco 
  circle(250, 100, tam1);
  stroke(224, 100, 58);
  fill(224, 100, 58); // naranjo
  stroke(0, 27, 171);
  circle(245, 100, tam2);
  fill(R2, G2, B2); // azul claro 
  circle(espacio, 100, 40); // fin 
}