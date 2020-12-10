import Data from "./Data.js";

export default class BoxDiv 
{
    constructor(div) {                      // here the parameter enter from the tag div
        let data;
        let sketch;
        new p5(function (p5) {
            p5.preload = function () {
                data = p5.loadJSON('./data.json');
            }
            
            p5.setup = function () {
                p5.createCanvas(350, 350);
                console.log(data.box_1);
                const p = [];
                const t = [];
                // for (let j=0; j<20; j++) {

                    for (let i=0; i < data.box_1.length; i++) {
                        console.log(
                            // data.box_1.tiempo
                            data.box_1[i].tiempo, 
                            data.box_1[i].pregunta
                            );
                            t.push(data.box_1[i].tiempo + p5.randomGaussian(-.5, .5)); 
                            p.push(data.box_1[i].pregunta + p5.randomGaussian(-.5, .5));
                    }
                    // sketch.print(data.box_1);
                    sketch = new Data(p, t);
                // }
                    // }

                // let personas = 3;
                // let questions = 20;
                // for (let j=0; j<personas; j++) {
                //     for (let i=0; i<questions; i++) {
                //         p.push((i*questions) + p5.randomGaussian(-.5, .5));
                //         t.push((i*questions )+ p5.randomGaussian(-20, 20));
                //     }
                    // sketch = new Data(p, t);
                // }
            }
            p5.draw = function () {
                p5.background(255, 10);
                sketch.show(p5);
            }
        }, div);
    }
}
