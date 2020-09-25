var canvas = document.getElementById('one');
var ctx = canvas.getContext('2d');

circle(ctx);
function circle(ctx) {
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 100, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(200, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(200, 100, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
}

var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(mouseX, "X");
    console.log(mouseY, "Y");
    ctx1 = canvas.getContext('2d');
    ctx.arc(mouseX - 50, mouseY - 50, 50, 0, 2 * Math.PI);
    ctx.stroke();
    context.clearRect(0, 0, canvas.width, canvas.height);
    circle(ctx);
}

