function f(id){
    let id1 = document.getElementById(id);
    let c = getComputedStyle(id1);
    document.body.style.background = c.backgroundColor;
}

function g(){
    let colors = ["button1","button2","button3"];
    for(let i = 0;i < colors.length; i++){
        let c = document.getElementById(colors[i])
        c.style.backgroundColor= '#' + Math.floor(Math.random()*15000000).toString(16)
    }
}

