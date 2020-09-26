var canvas = document.getElementById('one');
var ctx = canvas.getContext('2d');

var mouseX = 0;
var mouseY = 0;

var paintX = 0;
var paintY = 0;

var bufX = 900;
var bufY = 200;

orbit(ctx);
ctx.arc(bufX, bufY, 10, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.beginPath();

ctx.arc(bufX + 100, bufY, 10, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.beginPath();

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    ctx.clearRect(0, 0, 2000, 2000);
    orbit(ctx);
    apple();
}

function orbit(ctx) {
    ctx.beginPath();
    ctx.arc(bufX, bufY, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(bufX + 100, bufY, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
}

function apple(){
    countXY(mouseX - bufX, mouseY - bufY, 40);
    if (((mouseX - bufX) * (mouseX - bufX) + (mouseY - bufY) * (mouseY - bufY)) >= 2000) {
        ctx.arc(paintX + bufX, paintY + bufY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.beginPath();
    }
    else{
        ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.beginPath();
    }

    countXY(mouseX - bufX - 100, mouseY - bufY, 40);

    if (((mouseX - bufX - 100) * (mouseX - bufX - 100) + (mouseY - bufY) * (mouseY - bufY)) >= 2000) {
        ctx.arc(paintX + bufX + 100, paintY + bufY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.beginPath();
    }
    else{
        ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.beginPath();
    }


}



function countXY(x1, y1, r) {
    oneX = (x1 * r) / Math.sqrt(x1 * x1 + y1 * y1);
    oneY = (y1 * r) / Math.sqrt(x1 * x1 + y1 * y1);
    twoX = -1 * (x1 * r) / Math.sqrt(x1 * x1 + y1 * y1);
    twoY = -1 * (y1 * r) / Math.sqrt(x1 * x1 + y1 * y1);
    buf1 = ((x1 - oneX) * (x1 - oneX) + (y1 - oneY) * (y1 - oneY));
    buf2 = ((x1 - twoX) * (x1 - twoX) + (y1 - twoY) * (y1 - twoY));
    console.log(buf1, buf2);
    if (buf2 < buf1) {
        paintX = twoX;
        paintY = twoY;
    }
    else{
        paintX = oneX;
        paintY = oneY;
    }
}


