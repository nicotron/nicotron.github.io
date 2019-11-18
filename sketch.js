let txt, txt_Width_Window, index, txtSize, msg, indexM, x, y, setRewind, wX, wY, init;
// let points = [-250, -250, 250, -250, 250, 250, -250, 250];
let points = [
  0, 0,
  250, 50,
  500, 0,
  500, 500,
  250, 450,
  0, 500
];
let mazurquica, frame, goX, goY, gifGo;
let pointer; // vectors for the frame edit

//-- GIF
let gifLength = 10;
let canvas, gif;


function preload() {
  mazurquica = loadFont('Mazurquica-Medium.otf');
}

function setup() {
  wX = 1600;
  wY = 1200;
  // createCanvas(1024, 768, WEBGL);
  let p5vancas = createCanvas(wX, wY, WEBGL);
  canvas = p5vancas.canvas;
  gif = false;
  init = 0;

  // createCanvas(windowWidth, windowHeight, WEBGL);
  frame = true;
  goX = false;
  goY = false;
  gifGo = false;
  setRewind = 40000;
  txt_Width_Window = 500;
  txt = createGraphics(txt_Width_Window, 500);
  y = 0;
  x = 0;
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
    'NO HABRÁ PAZ MIENTRAS NO HAYA JUSTICIA',
    'NO VAMOS A PARAR',
    'Quieres justicia? @sebastianpinera entrégate.'
  ]
  // console.log(indexM, msg.length);


  //vectors
  pointer = createVector(0, 0);
}

function draw() {
  // translate(-windowWidth/2, -windowHeight/2);
  translate(-wX / 2, -wY / 2);
  background(0);


  if (gif) {
    capturer.start();
  }

  push();
  txt.background(0, 255);
  txt.textFont(mazurquica);
  txt.textSize(txtSize);
  txt.fill(255);
  txt.strokeWeight(0);
  // txt.text(msg[indexM].toUpperCase(), 0, y, txt_Width_Window, 1000);
  txt.text(msg[indexM].toUpperCase(), x, y + txtSize);
  texture(txt);
  beginShape();
  vertex(points[0], points[1], 0, 0);
  vertex(points[4], points[53], 250, 50);
  vertex(points[2], points[3], 500, 0);
  vertex(points[6], points[7], 500, 500);
  vertex(points[8], points[9], 250, 500);
  vertex(points[10], points[11], 0, 500);
  endShape();
  pop();

  if (gif) {
    if (init < gifLength) {
      capturer.capture(canvas);
      init++;
    } else if (init === gifLength) {
      capturer.stop();
      capturer.save();
      gif = false;
    }
  }



  if (frame) {

    stroke(120);
    for (let i = 0; i < points.length; i += 2) {
      strokeWeight(2 + (i * 2));
      // line(points[i], points[i + 1], points[i + 2], points[i + 3]);
      // strokeWeight(2);
      point(points[i], points[i + 1]);
      // point(points[2], points[3]);
      // point(points[4], points[5]);
      // point(points[6], points[7]);

    }
  } // console.log(y, -(points[5]-points[3]));
  if (y < -setRewind) {
    y = 0;
  }
  if (x < -setRewind) {
    x = 0;
  }

  if (goX) {
    x -= 3;
  }
  if (goY) {
    y -= 3;
  }
  if (gifGo) {
    gifLength++;
    console.log(gifLength);
  }

  for (i = 0; i < points.length; i += 2) {
    let d = dist(mouseX, mouseY, points[i], points[i + 1]);
    if (d < 20) {
      // function mouseDragged() {
      points[i] = mouseX;
      points[i + 1] = mouseY;
      // }
      noFill();
      strokeWeight(1)
      stroke(255, 255, 0);
      circle(points[i], points[i + 1], 50);

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
  if (key === 'g') {
    gif = true;
  }
  if (key === ' ') {
    frame = !frame;
  }
  if (key === 'x') {
    goX = !goX;
    gifGo = true;
  }
  if (key === 'z') {
    goY = !goY;
    gifGo = true;
  }
  if (key === 's') {
    setRewind = x * -1;
    // gifLength = 0;
    gifGo = false;
  }
  if (key === 'a') {
    setRewind = y * -1;
    // gifLength = 0;
    gifGo = false;
    // gifLength = y*-1;
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