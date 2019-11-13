let txt, txt_Width_Window, index, txtSize, img, msg, indexM;
let points = [-250, -250, 250, -250, 250, 250, -250, 250];

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
    'DESDE CAMILO CATRILLANCA \nA GUSTAVO GATICA \nHAY 361 DIAS'
  ]
  console.log(indexM, msg.length);
}

function draw() {
  background(0);

  txt.background(0);
  txt.textSize(txtSize);

  txt.fill(255);
  txt.text(msg[indexM], 0, 0, txt_Width_Window, 768);
  texture(txt);
  beginShape();
  vertex(points[0], points[1], 0, 0);
  vertex(points[2], points[3], txt_Width_Window, 0);
  vertex(points[4], points[5], txt_Width_Window, txt_Width_Window);
  vertex(points[6], points[7], 0, txt_Width_Window);
  endShape();

  strokeWeight(0.2);
  stroke(140);
  point(points[0], points[1]);
  point(points[2], points[3]);
  point(points[4], points[5]);
  point(points[6], points[7]);
}

function mousePressed() {
  if (index > 7) {
    index = 0;
  }
  points[index] = mouseX - width / 2;
  points[index + 1] = mouseY - height / 2;
  console.log(index, points[index], points[index + 1], points);

  index += 2;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    txtSize = txtSize + 1;
  } else if (keyCode === DOWN_ARROW) {
    txtSize = txtSize - 1;
  }
  if (keyCode === RIGHT_ARROW) {
    console.log(indexM, msg.length);
    indexM = indexM + 1;

    if (indexM > msg.length - 1) {
      indexM = 0;
    }
  }
  if (keyCode === LEFT_ARROW) {
    console.log(indexM, msg.length);
    indexM = indexM - 1;

    if (indexM < 0) {
      indexM = msg.length - 1;
    }
  }
  return false; // prevent default
}

function keyTyped() {
  if (key === 'a') {
    console.log(indexM, msg.length);
    console.log('here');
    if (indexM > msg.length - 1) {
      indexM = 0;
    }
    indexM++;
  }
  // uncomment to prevent any default behavior
  // return false;
}
