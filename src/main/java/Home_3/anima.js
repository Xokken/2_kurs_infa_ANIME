let a = document.getElementById("one");
var count = 0;
console.log(parseInt(a.style.marginTop));

setInterval(moveDown, 10);


function moveDown(){
    if (count % 2 == 0) {
        a.style.marginTop = parseInt(a.style.marginTop) + 3 + 'px';
        if (isHidden(a)) {
            count++;
            console.log(count, "down")
        }
    }
    else{
        a.style.marginTop = parseInt(a.style.marginTop) - 3 + 'px';
        console.log(a.style.marginTop)
        if (a.style.marginTop === "0px") {
            count++;
            console.log(count, "up")
            console.log(a.style.marginTop)
        }
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



