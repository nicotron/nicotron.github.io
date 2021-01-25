// este script se aloja en las dimensiones de un div particular por medio de id

for (let index = 1; index < 7; index++) {
    
    new p5(( p ) => {

        var elmnt = document.getElementById('sketch'+index);
        let x, y, xvel;

        p.setup = () => {
            p.createCanvas(400, 300);
            // if (index === 3) {
            //     p.createCanvas(600, 400);
            // }
            // p.createCanvas(elmnt.offsetWidth , elmnt.offsetHeight);
            p.col=p.color(155+100/index, 255/index, 0);
            p.background(p.col);

            x = p.map(Math.floor(p.random(3)), 0, 2, 0, elmnt.offsetWidth);
            xvel = 2 * Math.floor(p.random(2));
            setInterval(function(){ xvel = Math.floor(p.random(-2,2)); }, 2000);
        };
        
        p.draw = () => {
            p.background(0);
            p.noFill();
            p.strokeWeight(1);
            p.stroke(255);
            p.rect(0,0, p.width, p.height);
            p.noStroke();
            p.fill(255);
            p.circle(x, p.height, p.height);
            x-=xvel;

            if ( x>p.width + p.height/2 ) {
                x = 0;
            } else if ( x<0 - p.height/2 ) {
                x = p.width;
            }
        };

        p.windowResized = () => {
            // p.resizeCanvas(elmnt.offsetWidth , elmnt.offsetHeight);
        };

    }, document.getElementById( 'sketch'+index ));
    
}