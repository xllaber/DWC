"use strict"

let btnDiv = document.getElementById("botones");
let fotopizza = document.getElementById("fotopizza");
let ingredientesDiv = document.getElementById("ingredientes");
let importeDiv = document.getElementById("importe");
let total = 0;

pizzas.forEach(p => {
    let btn = document.createElement("button");
    btn.textContent = p.nombre;
    btn.id = p.codigo
    btn.addEventListener("click", () => {
        fotopizza.innerHTML = "";
        ingredientesDiv.innerHTML = "";
        importeDiv.innerHTML = "";
        showPizza(btn.id);
    });

    btnDiv.appendChild(btn);
})

function showPizza(id){
    let pizza = pizzas.find(p => p.codigo === id);
    let pizzaImg = document.createElement("img");
    pizzaImg.src = `assets/${id}.jpg`;
    pizzaImg.className = "imagencss";
    fotopizza.appendChild(pizzaImg);

    pizza.ingredientes.forEach(i => ingredientesDiv.innerHTML += `<p>${i.ingrediente}</p>`);

    total = 5;
    pizza.ingredientes.forEach(i => total += parseFloat(i.precio));

    importeDiv.innerHTML = `Importe: ${total} &euro;`;
}
