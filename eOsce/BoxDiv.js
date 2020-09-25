import Data from "./Data.js";
// import * as data from "./data.json";
export default class BoxDiv {

    constructor(div) {                      // here the parameter enter from the tag div
        let sketch;
        new p5(function (sk) {
            // sk.preload = function () {
            //     data = sk.loadJSON('./data.json');
            // }

            sk.setup = function () {
                sk.createCanvas(350, 350);
                
                const p = [];
                const t = [];
                for (let j=0; j<10; j++) {
                    for (let i=0; i<10; i++) {
                        p.push((i*3) + sk.randomGaussian(-.5, .5));
                        t.push((i*60 )+ sk.randomGaussian(-20, 20));
                    }
                // for(let i=0; i<p.length; i++) {
                    //     sk.print(t[i]);
                    // }
                    // sketch = new Data();
                    sketch = new Data(p, t);
                }
            } 
            sk.draw = function () {
                // sk.background(255, 10);
                sketch.show(sk);
            }
        }, div);
    }
}