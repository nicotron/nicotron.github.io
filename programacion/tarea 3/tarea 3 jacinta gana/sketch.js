function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 100, 110);
  translate(100, 100)
    push();
  scale(0.5)
 jacinta (200, 10, 50, 17, 28, 175, 233, 22, 140);
  pop();
  
}

  function jacinta(tam, tam2, esp, R, G, B, r, g, b){
fill(R, G, B)
  noStroke()
  triangle(0 - esp, 0 - esp, 0 - esp, 400 + esp, 100, 200)
  triangle(0, 0, 400, 0, 200, 100)
  triangle(400 + esp, 0 - esp, 400 + esp, 400 + esp, 300, 200)
  triangle(0, 400, 400, 400, 200, 300)
    fill(r, g, b)
  triangle(200, 100, 200, 300, tam2 + 90, tam2 + 190)
  fill(255, 255, 255)
   triangle(300, 200, 200, 100, tam, tam + 100)
  }