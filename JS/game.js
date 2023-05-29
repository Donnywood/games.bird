let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

let gap = 90;

// Press F for play xD
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 30;
}

//BLOCKSSSSS

let pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
}



// Position Bird

let xPos = 10;
let yPos = 150;
let grav = 1;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i <pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;
    }


    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;