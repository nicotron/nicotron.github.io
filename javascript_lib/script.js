// este script se aloja en las dimensiones de un div particular por medio de id

for (let index = 1; index < 17; index++) {
    
    new p5(( p ) => {

        var elmnt = document.getElementById('sketch'+index);
        let x, y, xvel;
        let scaleWin = 1;

        p.setup = () => {
            // p.createCanvas(100 , 100);
            p.createCanvas(elmnt.offsetWidth , elmnt.offsetHeight);
            // p.createCanvas(p.windowWidth*scaleWin , p.windowHeight*scaleWin);
            // p.col = p.color(p.random(255), p.random(255), p.random(255));
            p.col=p.color(0);
            p.background(p.col);

            x = p.map(Math.floor(p.random(3)), 0, 2, 0, elemnt.offsetWidth);
            // x = p.map(Math.floor(p.random(3)), 0, 2, 0, p.windowWidth*scaleWin);
            xvel = Math.floor(p.random(-2,2));
            setInterval(function(){ xvel = Math.floor(p.random(-2,2)); }, 3000);
        };
        
        p.draw = () => {
            p.background(p.col);
            // x = 200;
            p.noStroke();
            p.fill(255);
            p.circle(x, 200, 200);
            x-=xvel;
            // p.background(p.frameCount%255);
        };

        p.windowResized = () => {
            // elmnt = document.getElementById('sketch'+index+1);
            // p.createCanvas(windowWidth*scaleWin, elmnt.offsetHeight);
            p.resizeCanvas(elmnt.offsetWidth , elmnt.offsetHeight);
            // p.resizeCanvas(p.windowWidth*scaleWin, p.windowHeight*scaleWin);
        };

    }, document.getElementById( 'sketch'+index ));
    
}