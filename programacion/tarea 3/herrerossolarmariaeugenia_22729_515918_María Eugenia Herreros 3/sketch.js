function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(15, 2, 30);

  push()
  translate(200, 200)
  rotate(0)
  euge2(195, 50, 15 , 245, 0, 0,255, 0, 133)
  pop()


}

function euge2(tam, tam2, espacio, r, g, b, r2, g2, b2) {

  push()
 // scale(0.5)

  translate(-200, -200)
  noStroke()
  fill(255)
  circle(200 - espacio, 200, tam)
  fill(255)
  circle(320, 320, tam2)
  fill(255)
  circle(80, 80, 50)
  fill(231, 105, 24)
  circle(320, 320, 30)
  fill(r, g, b)
  circle(80, 80, 30)
  fill(255)
  circle(280, 280, tam - 100)
  fill(r2, g2, b2)
  circle(280, 280, 50)
  fill(28, 0, 100)
  circle(200-espacio, 200, 170);
  fill(49, 0, 180)
  circle(200-espacio, 200, 95)
  fill(255)
  circle(120, 120, 95)
  fill(255, 0, 133)
  circle(120, 120, 50)

  pop()


}