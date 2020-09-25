var canvas = document.getElementById('one');
var ctx = canvas.getContext('2d');

var mouseX = 0;
var mouseY = 0;

var xx = 0;
var yy = 0;

orbit(ctx);
canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    apple();
    ctx.clearRect(0, 0, 1000, 1000);
    orbit(ctx);
    apple();
}

function orbit(ctx) {
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(200, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
}

function apple(){
    countXY(mouseX - 100, mouseY - 100, 30);
    ctx.arc(xx + 100, yy + 100, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.beginPath();

    countXY(mouseX - 200, mouseY - 100, 30);
    ctx.arc(xx + 200, yy + 100, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.beginPath();
}


function countXY(x1, y1, r) {
    x12 = (x1 * r) / Math.sqrt(x1 * x1 + y1 * y1);
    y12 = (y1 * r) / Math.sqrt(x1 * x1 + y1 * y1);
    x22 = -1 * (x1 * r) / Math.sqrt(x1 * x1 + y1 * y1);
    y22 = -1 * (y1 * r) / Math.sqrt(x1 * x1 + y1 * y1);
    //console.log(x12, y12, x22, y22);
    buf1 = ((x1 - x12) * (x1 - x12) + (y1 - y12) * (y1 - y12));
    buf2 = ((x1 - x22) * (x1 - x22) + (y1 - y22) * (y1 - y22));
    console.log(buf1, buf2);
    if (buf2 < buf1) {
        xx = x22;
        yy = y22;
    }
    else{
        xx = x12;
        yy = y12;
    }
}


