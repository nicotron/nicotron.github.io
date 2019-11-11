function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
fill(19,15,31)//fondo negro
  square(0,0,400)
  
  fill(34,29,93)//azul oscuro
  noStroke()
arc(80, 80, 115, 115, PI, HALF_PI+PI);
  arc(80, 313, 115, 115, HALF_PI, PI);
  arc(312, 313, 115, 115, TWO_PI, HALF_PI);
  arc(312, 80, 115, 115, HALF_PI+PI, TWO_PI);//CUARTO CIRCULO DERECHO SUPERIOR
  
  fill(47,59,150)//azul claro
  noStroke()
  arc(80, 80, 55, 55, PI, HALF_PI+PI);
  arc(80, 138, 115, 115, PI, HALF_PI+PI);
    arc(138, 80, 115, 115, PI, HALF_PI+PI);//cuarto circulo grande izquierdo superior
  arc(138, 138, 115, 115, PI, HALF_PI+PI);
  arc(80, 254, 115, 115, HALF_PI, PI);// CUARTO CIRCULO IZQUIERDO INFERIOR
arc(138, 254, 115, 115, HALF_PI, PI);
  arc(138, 313, 115, 115, HALF_PI, PI);
  arc(80, 313, 55, 55, HALF_PI, PI);
  arc(254, 313, 115, 115, TWO_PI, HALF_PI);//cuarto circulo grande DERECHO INFERIOR
  arc(254, 254, 115, 115, TWO_PI, HALF_PI);
  arc(312, 254, 115, 115, TWO_PI, HALF_PI);
  arc(313, 313, 55, 55, TWO_PI, HALF_PI);
  arc(254, 80, 115, 115, HALF_PI+PI, TWO_PI);
  arc(254, 138, 115, 115, HALF_PI+PI, TWO_PI);
  arc(313, 138, 115, 115, HALF_PI+PI, TWO_PI);
  arc(312, 80, 55, 55, HALF_PI+PI, TWO_PI);
 
  fill(222,31,38)//rojo
  noStroke()
   arc(80, 138, 55, 55, PI, HALF_PI+PI);
   arc(80, 196, 115, 115, HALF_PI,HALF_PI +PI);
  arc(138, 138, 55, 55, PI, HALF_PI+PI);//cuarto circulo pequeño izquierdo superior
  arc(138, 80, 55, 55, PI, HALF_PI+PI);
  arc(138, 196, 115, 115, HALF_PI,HALF_PI +PI);// medio circulo izquierdo
  arc(196, 80, 115, 115, PI,HALF_PI+PI+QUARTER_PI+QUARTER_PI);//MEDIO CIRCULO ACOSTADO
  arc(196, 138, 115, 115, PI,HALF_PI+PI+QUARTER_PI+QUARTER_PI);
  arc(196, 196,115, 115, PI,PI); //CIRCULO
  arc(80, 254, 55, 55, HALF_PI, PI);
  arc(138, 313, 55, 55, HALF_PI, PI);
  arc(138, 254, 55, 55, HALF_PI, PI);
  arc(196, 254, 115, 115, TWO_PI,PI);//MEDIO CIRCULO ACOSTADO ABAJO
  arc(196, 313, 115, 115, TWO_PI,PI);
  arc(254, 313, 55, 55, TWO_PI, HALF_PI);
  arc(254, 254, 55, 55, TWO_PI, HALF_PI);
  arc(313, 254, 55, 55, TWO_PI, HALF_PI);
  arc(313, 196, 115, 115, HALF_PI + PI,HALF_PI );// MEDIO CIRCULO DERECHO
  arc(254, 196, 115, 115, HALF_PI + PI,HALF_PI );
   arc(254, 80, 55, 55, HALF_PI+PI, TWO_PI);
  arc(254, 138, 55, 55, HALF_PI+PI, TWO_PI);
  arc(313, 138, 55, 55, HALF_PI+PI, TWO_PI);
  
  fill(241,90,43)//naranjo
  noStroke()
  arc(80, 196, 55, 55, HALF_PI,HALF_PI +PI);
  arc(138, 196, 55, 55, HALF_PI,HALF_PI +PI); //medio circulo izquierdo
  arc(196, 80, 55, 55, PI,HALF_PI+PI+QUARTER_PI+QUARTER_PI);
  arc(196, 138, 55, 55, PI,HALF_PI+PI+QUARTER_PI+QUARTER_PI);
  arc(196, 196,55, 55, PI,PI);
  arc(196, 313, 55, 55, TWO_PI,PI);
   arc(196, 254, 55, 55, TWO_PI,PI);//MEDIO CIRCULO PEQUEÑO ABAJO
  arc(313, 196, 55, 55, HALF_PI + PI,HALF_PI );// MEDIO CIRCULO DERECHO
  arc(254, 196, 55, 55, HALF_PI + PI,HALF_PI );
  
  
}