function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(37, 193, 48);
  
  push();
  translate(200,200)
  cata (0, 400,200,48, 48, 242,244,213,10)
  pop();
  
  function cata (espacio, tam, tam2, r, g, b, r2, g2, b2) {

    fill (r, g, b)
    noStroke()
    circle (espacio, 0, tam)
    fill (r2, g2, b2)
    square(-200,-200, tam2);
    square(0, 0, 200);
  }
}