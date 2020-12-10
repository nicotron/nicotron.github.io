export default class Data {
    constructor(pregunta, tiempo) {
    // constructor(preguntas) {
    // constructor() {
        this.pregunta = pregunta;
        this.tiempo = tiempo;
        this.margin = 10;
        // this.preguntas = preguntas;
    }
    show(p5) {
        p5.background(245);
        // strokeWeight(.5);
        // stroke(100);
        // noFill();
        // rect(0, 0, 200, 200);

        // stroke(0);
        // strokeWeight(1);
        // line(0, 0, 200, 200);


        p5.stroke(51);
        p5.strokeWeight(.5);
        p5.noFill();
        p5.beginShape();
        for (let i=0; i<this.pregunta.length; i++) {
            p5.vertex(
            p5.map(this.pregunta[i],  Math.min(...this.pregunta), Math.max(...this.pregunta), 0+this.margin, p5.width-this.margin),
            p5.map(this.tiempo[i],    Math.min(...this.tiempo),   Math.max(...this.tiempo),   0+this.margin, p5.height-this.margin)
            )
        }
        p5.endShape();

        for (let i=0; i<this.pregunta.length; i++) {
            p5.fill(250);
            p5.strokeWeight(1);
            p5.circle(
                p5.map(this.pregunta[i], Math.min(...this.pregunta), Math.max(...this.pregunta),  0+this.margin, p5.width-this.margin),
                p5.map(this.tiempo[i], Math.min(...this.tiempo),   Math.max(...this.tiempo),    0+this.margin, p5.height-this.margin),
                2);
            // print(this.tiempo[i]);
        }

        // beginShape();
        // vertex(0, 0);
        // for (let i=0; i<200; i+=20) {
        // point(i, i+this.r);
        // }
        // endShape();
    }
}
