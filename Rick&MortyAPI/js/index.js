"use strict"
let mainDiv = document.getElementById("main");
// characters.results.forEach(e =>{
//     let charDiv = document.createElement("div");
//     let idP = document.createElement("p");
//     let nameP= document.createElement("p");
//     let img =  document.createElement("img");

//     img.src = e.image;
//     img.id = e.id;
//     img.onclick = () => alert(`Id: ${img.id}`);

//     // img.onclick = function() {
//     //     let char = characters.results.find(p => p.id == this.id);
//     //     console.log(char);
//     // };
//     idP.textContent = `Id: ${e.id}`;
//     nameP.textContent = `Nombre: ${e.name}`;
//     let divs = [img, idP, nameP]
//     divs.forEach(e => charDiv.appendChild(e));
//     charDiv.id = e.id;

//     mainDiv.appendChild(charDiv);
// })

characters.results.forEach(e => {
    
    mainDiv.innerHTML += `<div class="card">
                            <img id=${e.id} src="${e.image}"/>
                            <p>Id: ${e.id}</p>
                            <p>Nombre: ${e.name}</p>
                            <button id=${e.id} class="button btn btn-primary">Detail</button>
                        </div>`;
    
})
Array.from(document.getElementsByClassName("button")).forEach(b => b.addEventListener("click", showDetails));

function showDetails() {
    let charDetails = document.getElementById("charDetails");
    let char = characters.results.find(p => p.id == this.id);
    document.getElementById("charDetailImg").src = char.image;
    document.getElementById("charDetailId").innerHTML = `<b>Id:</b> ${char.id}`;
    document.getElementById("charDetailName").innerHTML = `<b>Name:</b> ${char.name}`;
    document.getElementById("charDetailSpecies").innerHTML = `<b>Species:</b> ${char.species}`;
    document.getElementById("charDetailStatus").innerHTML = `<b>Status:</b> ${char.status}`;
    charDetails.showModal();
    document.getElementById("detailClose").addEventListener("click", () => charDetails.close());
}

