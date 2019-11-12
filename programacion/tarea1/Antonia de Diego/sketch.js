function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(12, 5, 30);//oscuro
  
   //arc(x, y, acho, alto, donde parte radians(270),  donde termina radians(130));
  //circulo 1
  fill(223, 0, 22);//rojo
  ellipse(110, 110, 210, 210);
  //circulo 2
  fill(12, 5, 30);//oscuro
  ellipse(290, 110, 210, 210);
  //circulo 3
  fill(12, 5, 30);//oscuro
  ellipse(110, 290, 210, 210);
  //circulo 4
  fill(223, 0, 22);//rojo
  ellipse(290, 290, 210, 210);
  //divisiones
  //1
  fill(13, 13, 178);//azul
  arc(110, 110, 210, 210, radians(310), radians(130));
  //2
  fill(223, 0, 22);//rojo
  arc(290, 110, 210, 210, radians(310), radians(130));
  fill(223, 0, 22);//rojo
  arc(110, 290, 210, 210, radians(310), radians(130));
  fill(13, 13, 178);//azul
  arc(290, 290, 210, 210, radians(310), radians(130));
  noStroke();
  fill(241, 90, 41);//naranjo
  arc(110, 110, 210, 210, radians(170), radians(260));
  fill(13, 13, 178);//azul
  arc(290, 110, 210, 210, radians(170), radians(260));
  arc(110, 290, 210, 210, radians(170), radians(260));
  fill(241, 90, 41);//naranjo
  arc(290, 290, 210, 210, radians(170), radians(260));
  fill(12, 5, 30);//oscuro
  arc(110, 110, 210, 210, radians(350), radians(92));
  fill(241, 90, 41);//naranjo
  arc(290, 110, 210, 210, radians(350), radians(92));
  fill(241, 90, 41);//naranjo
  arc(110, 290, 210, 210, radians(350), radians(92));
  fill(12, 5, 30);//oscuro
  arc(290, 290, 210, 210, radians(350), radians(92));
  fill(13, 13, 178);//azul
  ellipse(110, 110, 150, 150);
  fill(241, 90, 41);//naranjo
  ellipse(290, 110, 150, 150);
  fill(241, 90, 41);//naranjo
  ellipse(110, 290, 150, 150);
  fill(13, 13, 178);//azul
  ellipse(290, 290, 150, 150);
   //arc(x, y, acho, alto, donde parte radians(270),  donde termina radians(130));
  fill(241, 90, 41);//naranjo
  arc(110, 110, 150, 150, radians(310), radians(130));
  fill(13, 13, 178);//azul
  arc(290, 110, 150, 150, radians(310), radians(130));
  fill(13, 13, 178);//azul
  arc(110, 290, 150, 150, radians(310), radians(130));
  fill(241, 90, 41);//naranjo
  arc(290, 290, 150, 150, radians(310), radians(130));
  fill(12, 5, 30);
  ellipse(110, 110, 100, 100);
  fill(223, 0, 22);//rojo
  ellipse(290, 110, 100, 100);
  fill(223, 0, 22);//rojo
  ellipse(110, 290, 100, 100);
  fill(12, 5, 30);//oscuro
  ellipse(290, 290, 100, 100);
  //arc(x, y, acho, alto, donde parte radians(270),  donde termina radians(130));
  fill(223, 0, 22);//rojo
  arc(110, 110, 100, 100, radians(310), radians(130));
  fill(12, 5, 30);//oscuro
  arc(290, 110, 100, 100, radians(310), radians(130));
  fill(12, 5, 30);
  arc(110, 290, 100, 100, radians(310), radians(130));
  fill(223, 0, 22);
  arc(290, 290, 100, 100, radians(310), radians(130));
}