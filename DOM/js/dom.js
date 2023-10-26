"use strict"

let mainDiv = document.getElementById("main");

function createP(){
    let p = document.createElement("p");
    let text = document.createTextNode(prompt("Texto"));
    p.appendChild(text);
    mainDiv.appendChild(p);
}

function createImg(){
    let i = document.createElement("img");
    i.src = "assets/SP4_wallpaper_vertical_back_recolored.jpg";
    mainDiv.appendChild(i);
}

function selectPs(){
    let ps = document.getElementsByTagName("p");
    console.log(ps);
    Array.from(ps).forEach(p => console.log(p.textContent));
    // Array.from(ps).forEach(p => console.log(p.firstChild.nodeValue));
}

function selectPsByLayer(){
    let id = prompt("Capa (c1/c2)");
    let layer = document.getElementById(id);
    if (id !== "c1" && id !== "c2"){
        alert("Capa incorrecta");
        selectPsByLayer();
    }
    let pOfLayer = layer.getElementsByTagName("p");
    Array.from(pOfLayer).forEach(p => console.log(p.textContent));
}

function selectByClass(){
    let elements = document.getElementsByClassName("fw-bold");
    Array.from(elements).forEach(p => console.log(p.textContent));
}

function createBtn(){
    let btn = document.createElement("button");
    btn.textContent = "Dinero gratis... ;)";
    mainDiv.appendChild(btn);
    btn.onclick = ()=> {
        btn.className = "btn btn-danger";
        alert("Eres tontisimo");
        btn.textContent = "HAHAHAHAHAHAHAHAHAHAHAHAHA";
    };
}

function createBtn2(){
    let btn = document.createElement("button");
    btn.textContent = "Crear parrafo con 'text'";
    mainDiv.appendChild(btn);
    btn.onclick = () => createWithParameter("text");
}

function createWithParameter(text){
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(text));
    mainDiv.appendChild(p);
}

function createThings(){
    let e = document.getElementById("dom");
    e.onclick = () => alert("No va");
}

function changeEverything(){
    let btns = document.getElementsByTagName("button");
    Array.from(btns).forEach((b) => b.onclick = () => alert("EOEOEOEOEOEOEOEOEOE"));
}