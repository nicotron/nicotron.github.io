let txt, txt_Width_Window, index, txtSize, img, msg, indexM;
let points = [-250, -250, 250, -250, 250, 250, -250, 250];
let mazurquica;

function preload() {
  mazurquica = loadFont('Mazurquica-Medium.otf');
}

function setup() {
  createCanvas(1024, 768, WEBGL);

  txt_Width_Window = 200;
  txt = createGraphics(txt_Width_Window, 500);

  index = 0;
  txtSize = 20;
  img = loadImage('bg.jpeg');
  indexM = 0;
  msg = [
    'EL DERECHO DE VIVIR EN PAZ',
    'NOS ESTAN MATANDO',
    'HASTA QUE VALGA LA PENA VIVIR',
    'DESDE CAMILO CATRILLANCA A GUSTAVO GATICA \n\nHAY 361 DIAS',
    'NUEVA CONSTITUCION',
    'PROMETIMOS QUE NUNCA MÁS'
  ]
  // console.log(indexM, msg.length);
}

function draw() {
  background(0);
  push();
  txt.background(0, 255);
  txt.textFont(mazurquica);
  txt.textSize(txtSize);
  txt.fill(255);
  txt.strokeWeight(0);
  txt.text(msg[indexM], 0, 0, txt_Width_Window, 768);
  texture(txt);
  beginShape();
  vertex(points[0], points[1], 0, 0);
  vertex(points[2], points[3], txt_Width_Window, 0);
  vertex(points[4], points[5], txt_Width_Window, txt_Width_Window);
  vertex(points[6], points[7], 0, txt_Width_Window);
  endShape();
  pop();

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


  //
  //
  // beginShape();
  // strokeWeight(3);
  // stroke(250);
  // vertex(points[0], points[1]);
  // vertex(points[2], points[3]);
  // vertex(points[4], points[5]);
  // vertex(points[6], points[7]);
  // endShape();
  //
  // if(second()%5===0) {
  //   console.log(second());
  //   if (indexM > msg.length - 1) {
  //     indexM = 0;
  //     break;
  //   }
  //   indexM = indexM + 1;
  //   break;
  // }

}

function mousePressed() {
  if (index > 7) {
    index = 0;
  }
  points[index] = mouseX - width / 2;
  points[index + 1] = mouseY - height / 2;
  // console.log(index, points[index], points[index + 1], points);

  index += 2;
}

function keyPressed() {
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

function keyTyped() {
  if (key === 'a') {
    // console.log(indexM, msg.length);
    if (indexM > msg.length - 1) {
      indexM = 0;
    }
    indexM++;
  }
  // uncomment to prevent any default behavior
  // return false;
}
