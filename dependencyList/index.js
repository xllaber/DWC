"use strict"

let data = [
    {
        "trimestre": 1,
        "meses": ['Enero', 'Febrero', 'Marzo'],
    },
    {
        "trimestre": 2,
        "meses": ['Abril', 'Mayo', 'Junio'],
    },
    {
        "trimestre": 3,
        "meses": ['Julio', 'Agosto', 'Septiembre'],
    },
    {
        "trimestre": 4,
        "meses": ['Octubre', 'Noviembre', 'Diciembre'],
    },
]


window.onload = function() {
    let mainSelect = document.getElementById("trimestreSelect");
    let monthSelect = document.getElementById("mesesSelect");

    mainSelect.addEventListener("change", () => {
        console.log(mainSelect.value);
        let trimestre = data.find(t => t.trimestre === mainSelect.value);
        trimestre.meses.forEach(m => {
            monthSelect.add(m, 1);
        })
    })
}