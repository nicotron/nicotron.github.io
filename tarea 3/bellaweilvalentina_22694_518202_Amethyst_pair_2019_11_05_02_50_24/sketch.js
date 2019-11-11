c_x = 400;
c_y = 400;


function setup() {
  createCanvas(c_x, c_y);
}

function draw() {
  mosaico(0, 0, 100, c_x, c_y);
  //modulo(100);
}

function mosaico(x, y, size, c_x, c_y){
  for(var i = 0; i < (c_x/size); i++){
    for(var j = 0; j < (c_y/size); j++){
      modulo(x, y, size, c_x, c_y);
      
      x = x + size;
    }
    x = 0;
    y = y + size;
  }
}

function modulo(x, y, size, c_x, c_y){
  push();
    //background(36,56,141);//azulclaro
    fill(36,56,141);
    square(x, y, size);
  
    fill(15, 13, 29); //negro
    quad(x+size, y, x+(180*size)/c_x, y+size, x, y+size, x+(220*size)/c_x, y); // figuravertical
  
    fill(227, 32, 133); //rosado
    quad(x, y, x+size, y+(220*size)/c_y, x+size, y+size, x, y+(180*size)/c_y); // figuravertical
  
    fill(223,9,24); //rojo
    quad(x+(169*size)/c_x, y+(93*size)/c_y, x+(308*size)/c_x, y+(169*size)/c_y, x+(230*size)/c_x, y+(306*size)/c_y, x+(93*size)/c_x, y+(232*size)/c_y);//cuadrado
  
    fill(37,38,85); //azul
    triangle(x, y, x+(220*size)/c_x, y, x+(169*size)/c_x, y+(93*size)/c_y);//triangulo de arriba
    triangle(x+(180*size)/c_x, y+size, x+size, y+size, x+(230*size)/c_x, y+(307*size)/c_y);//triangulo de abajo
  
    fill(235,91, 43);
    quad(x+(308*size)/c_x, y+(169*size)/c_y, x+(230*size)/c_x, y+(307*size)/c_y, x+size, y+size, x+size, y+(220*size)/c_y);
  pop();
}