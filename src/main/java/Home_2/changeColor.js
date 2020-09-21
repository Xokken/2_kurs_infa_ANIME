function f(id){
    let s= document.getElementById(id);
    let a= getComputedStyle(s);
    document.body.style.background = a.backgroundColor;
}

function g(){
    let mass= ["button1","button2","button3"];
    for(let i=0;i<mass.length;i++){
        let s = document.getElementById(mass[i])
        s.style.backgroundColor= '#' + Math.floor(Math.random()*15000000).toString(16)
    }
}