
let div = document.getElementById("capa");

function getPeliculas(){
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/movies";

    xhr.open("get", url);
    xhr.responseType="json";
    xhr.send();
    xhr.onload = ()=>{
        if(xhr.status === 200){
            let peliculas = xhr.response;
            div.innerHTML = "";
            peliculas.forEach(p => div.innerHTML += "<p>" + p.title);
        } else {
            div.innerHTML = `ERROR: ${xhr.statusText} CODIGO: ${xhr.status}`;
        }
    }
    xhr.onerror = ()=>console.log("ERROR...");
}

function getPelicula(){
    let id = prompt("Dime el id");
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/movies/" + id;

    xhr.open("get", url);
    xhr.responseType="json";
    xhr.send();
    xhr.onload = ()=> {
        if(xhr.status === 200){
            let pelicula = xhr.response;
            div.innerHTML = "";
            div.innerHTML += "<p>" + pelicula.title;
        } else {
            div.innerHTML = `ERROR: ${xhr.statusText} CODIGO: ${xhr.status}`;
        }
    }
    xhr.onerror = ()=>console.log("ERROR...");
}

function deletePelicula(){
    let id = prompt("Dime el id");
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/movies/" + id;

    xhr.open("delete", url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload=()=> {
        if (xhr.status === 200) {
            div.innerHTML = "";
            div.innerHTML += "<p>Pelicula borrada</p>";
        } else {
            div.innerHTML = `ERROR: ${xhr.statusText} CODIGO: ${xhr.status}`;
        }
    }
    xhr.onerror = ()=>console.log("ERROR...");
}

function postPelicula() {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/movies";
    let pelicula = {
        "id": parseInt(prompt("Dime el id")),
        "title": prompt("Dime el titulo"),
        "year": parseInt(prompt("Dime el anyo")),
        "runtime": parseInt(prompt("Dime el duracion"))
    };

    xhr.open("post", url);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(pelicula));
    xhr.onload=()=>{
        if (xhr.status >= 200 && xhr.status < 300) {
            div.innerHTML = "";
            div.innerHTML += "<p>Pelicula insertada</p>";
        } else {
            div.innerHTML = `ERROR: ${xhr.statusText} CODIGO: ${xhr.status}`;
        }
    }
    xhr.onerror = ()=>console.log("ERROR...");
}

function putPelicula() {
    let xhr = new XMLHttpRequest();
    let id = parseInt(prompt("Dime el id"));
    let url = `http://localhost:3000/movies/${id}`;
    let pelicula = {
        "title": prompt("Dime el titulo"),
        "year": parseInt(prompt("Dime el anyo")),
        "runtime": parseInt(prompt("Dime el duracion"))
    };

    xhr.open("put", url);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(pelicula));
    xhr.onload=()=>{
        if (xhr.status >= 200 && xhr.status < 300) {
            div.innerHTML = "";
            div.innerHTML += "<p>Pelicula modificada</p>";
        } else {
            div.innerHTML = `ERROR: ${xhr.statusText} CODIGO: ${xhr.status}`;
        }
    }
    xhr.onerror = ()=>console.log("ERROR...");
}

