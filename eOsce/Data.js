export default class Data {
    constructor(pregunta, tiempo) {
    // constructor() {
        this.pregunta = pregunta;
        this.tiempo = tiempo;
        this.margin = 10;
    }
    show(sk) {
        sk.background(245);
        // sk.strokeWeight(.5);
        // sk.stroke(100);
        // sk.noFill();
        // sk.rect(0, 0, 200, 200);

        // sk.stroke(0);
        // sk.strokeWeight(1);
        // sk.line(0, 0, 200, 200);

        
        sk.stroke(51);
        sk.strokeWeight(.1);
        sk.noFill();
        sk.beginShape();
        for (let i=0; i<this.pregunta.length; i++) {
            sk.vertex(
            sk.map(this.pregunta[i],  Math.min(...this.pregunta), Math.max(...this.pregunta), 0+this.margin, sk.width-this.margin),
            sk.map(this.tiempo[i],    Math.min(...this.tiempo),   Math.max(...this.tiempo),   0+this.margin, sk.height-this.margin)
            )
        }
        sk.endShape();
        
        for (let i=0; i<this.pregunta.length; i++) {
            sk.fill(250);
            sk.strokeWeight(1);
            sk.circle(
                sk.map(this.pregunta[i], Math.min(...this.pregunta), Math.max(...this.pregunta),  0+this.margin, sk.width-this.margin),
                sk.map(this.tiempo[i], Math.min(...this.tiempo),   Math.max(...this.tiempo),    0+this.margin, sk.height-this.margin),
                2);
            // sk.print(this.tiempo[i]);
        }
            
        // sk.beginShape();
        // sk.vertex(0, 0);
        // for (let i=0; i<200; i+=20) {
        // sk.point(i, i+this.r);
        // }
        // sk.endShape();
    }
}