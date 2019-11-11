function setup() {
  createCanvas(400, 400)
;
}

function draw() {
  background(245,0,0);
  
  antonia(120, 95, 200,72,0,182, 41,0,101);
}
  
function antonia(tam, tam2, esp, R, G, B, r, g, b) {
   fill (255,102,40)
  circle(200,200,170)
  
  noStroke ()
  
  fill (R, G, B)
  circle(115,esp,tam)
  circle(285,esp,tam)
  circle(200,esp +90,tam)
  circle(200,esp -90,tam)
  
  fill (r, g, b)
  circle (200,315,tam2)
  circle (200,80, tam2)
  circle (90,200,tam2)
  circle (315,200,tam2)
  
  fill (19,0,30)
  circle (340,200,70)
  circle (65,200,70)
  circle (200,50,70)
  circle (200,340,70)
}