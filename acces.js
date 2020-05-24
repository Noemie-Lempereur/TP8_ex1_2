
function changeColor1() { 
    let e=document.getElementById("id1");
    let c1=Math.floor(Math.random()*(255-0+1));
    let c2=Math.floor(Math.random()*(255-0+1));
    let c3=Math.floor(Math.random()*(255-0+1));
    e.style.backgroundColor="rgb("+c1+","+c2+","+c3+")";
}

let ex1=document.getElementById("id1");
ex1.addEventListener("click", changeColor1);




function printPosition(e){
    let x=e.clientX;
    let y=e.clientY;
    let text=document.createElement("p");
    let a=document.body;
    let old=document.getElementById("id3");
    text.innerHTML="Coordonnées: x="+x+" y="+y;
    a.replaceChild(text,old);
    text.id="id3";
    console.log("Coordonnées: x="+x+" y="+y);
}

function changeColor2() { 
    let f=document.getElementById("id2");
    let c1=Math.floor(Math.random()*(255-0+1));
    let c2=Math.floor(Math.random()*(255-0+1));
    let c3=Math.floor(Math.random()*(255-0+1));
    f.style.backgroundColor="rgb("+c1+","+c2+","+c3+")";
}

let ex2=document.getElementById("id2");
ex2.addEventListener("mouseenter", changeColor2);
ex2.addEventListener("mouseenter",printPosition);

