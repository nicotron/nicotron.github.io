let txt, txt_Width_Window, index, txtSize, msg, indexM, x, y, setRewind;
// let points = [-250, -250, 250, -250, 250, 250, -250, 250];
let points = [0,0,500,0,500,500,0,500];
let mazurquica, frame, goX, goY;
let pointer;  // vectors for the frame edit

function preload() {
  mazurquica = loadFont('Mazurquica-Medium.otf');
}

function setup() {
  // createCanvas(1024, 768, WEBGL);
  createCanvas(windowWidth, windowHeight, WEBGL);
  frame = true;
  goX= false;
  goY= false;
  setRewind = 40000;
  txt_Width_Window = 250;
  txt = createGraphics(txt_Width_Window, 500);
  y = 0;
  index = 0;
  txtSize = 200;
  indexM = 0;
  msg = [
    'EL DERECHO DE VIVIR EN PAZ\n\tEL DERECHO DE VIVIR EN PAZ',
    'NOS ESTAN MATANDO',
    'HASTA QUE VALGA LA PENA VIVIR',
    'DESDE CAMILO CATRILLANCA A GUSTAVO GATICA \n\nHAY 361 DIAS',
    'NUEVA CONSTITUCION',
    'PROMETIMOS QUE NUNCA MÁS',
    'Miren el hervidero de vigilantes \n\npara rociarle flores al estudiante',
    'miren como relumbran carabineros \n\npara ofrecerle premios a los obreros',
    'miren como se visten cabo y sargento \n\npara teñir de rojo los pavimentos',
    'miren como le muestran una escopeta \n\npara quitarle al pobre su marraqueta',
    'NO HABRÁ PAZ MIENTRAS NO HAYA JUSTICIA'
  ]
  // console.log(indexM, msg.length);


  //vectors
  pointer = createVector(0, 0);
}

function draw() {
  translate(-windowWidth/2, -windowHeight/2);
  background(0);

  push();
  txt.background(0, 255);
  txt.textFont(mazurquica);
  txt.textSize(txtSize);
  txt.fill(255);
  txt.strokeWeight(0);
  // txt.text(msg[indexM].toUpperCase(), 0, y, txt_Width_Window, 1000);
  txt.text(msg[indexM].toUpperCase(), y, txtSize);
  texture(txt);
  beginShape();
  vertex(points[0], points[1], 0, 0);
  vertex(points[2], points[3], txt_Width_Window, 0);
  vertex(points[4], points[5], txt_Width_Window, txt_Width_Window);
  vertex(points[6], points[7], 0, txt_Width_Window);
  endShape();
  pop();

  if(frame) {
    strokeWeight(1);
    stroke(120);
    line(points[0], points[1], points[2], points[3]);
    line(points[2], points[3], points[4], points[5]);
    line(points[4], points[5], points[6], points[7]);
    line(points[6], points[7], points[0], points[1]);
    strokeWeight(2);
    point(points[0], points[1]);
    point(points[2], points[3]);
    point(points[4], points[5]);
    point(points[6], points[7]);
  }
  // console.log(y, -(points[5]-points[3]));
  if(y < -setRewind) {
    y = 0;
  }

  if(goX) {x-=5;}
  if(goY) {y-=5;}

  for ( i = 0; i < points.length; i+= 2) {
    let d = dist(mouseX,mouseY,points[i],points[i+1]);
    if(d < 20) {
      // function mouseDragged() {
        points[i] = mouseX;
        points[i+1] = mouseY;
      // }
      line(mouseX,mouseY,points[i],points[i+1]);

    }
  }
}



function mousePressed() {
  if (index > 7) {
    index = 0;
  }
  points[index] = mouseX;
  points[index + 1] = mouseY;
  // console.log(index, points[index], points[index + 1], points);

  index += 2;
}

function keyPressed() {
  if (key === ' ') {
    frame = !frame;
  }
  if (key === 'x') {
    goX = !goX;
  }
  }
  if (key === 'y') {
    goY = !goY;
  }
  if (key === 'r') {
    setRewind = y*-1;
  }
  if (key === 'e') {
    setRewind = 4000;
  }
  if (keyCode === UP_ARROW) {
    txtSize = txtSize + 1;
  } else if (keyCode === DOWN_ARROW) {
    txtSize = txtSize - 1;
  }
  if (keyCode === RIGHT_ARROW) {
    // console.log(indexM, msg.length);
    indexM = indexM + 1;

    if (indexM > msg.length - 1) {
      indexM = 0;
    }
  }
  if (keyCode === LEFT_ARROW) {
    // console.log(indexM, msg.length);
    indexM = indexM - 1;

    if (indexM < 0) {
      indexM = msg.length - 1;
    }
  }
  return false; // prevent default
}
