let a = document.getElementById("one");
console.log(parseInt(a.style.marginTop))
setInterval(moveDown, 20);

function moveDown(){
    a.style.marginTop = parseInt(a.style.marginTop) + 3 + 'px';
    if (isHidden(a)){
        a.style.marginTop = 10 + 'px';
    }
}

function isHidden(element){
    const elementRect = element.getBoundingClientRect();
    const elementHidesUp = elementRect.top < 0;
    const elementHidesLeft = elementRect.left < 0;
    const elementHidesDown = elementRect.bottom > window.innerHeight;
    const elementHidesRight = elementRect.right > window.innerWidth;
    const elementHides = elementHidesUp || elementHidesLeft || elementHidesDown || elementHidesRight;
    return elementHides;
}
function countHidden(element){
    const elementRect = element.getBoundingClientRect();
    const elementHides = {
        up: Math.max(0,0 - elementRect.top),
        left: Math.max(0,0 - elementRect.left),
        down: Math.max(0,elementRect.bottom - window.innerHeight),
        right: Math.max(0,elementRect.right - window.innerWidth)
    };
    return elementHides;
}


